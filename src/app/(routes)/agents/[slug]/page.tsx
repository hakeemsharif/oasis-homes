import React from "react";
import style from "./agent.module.scss";
import AgentContactForm from "@/component/ui/agent/contactform";
import Image from "next/image";
import SectionHeader from "@/component/ui/sectionheader";
import Link from "next/link";
import NotFound from "@/app/pages/not-found";

type ImageProperty = {
  id: number;
  featured_media: string;
};

type AgentStaticParams = {
  slug: string;
};
// export const revalidate = 60;

async function fetchAgentDetails(slug: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WP_URL}/agent?slug=${slug}&_embed=true`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch agent`);
    }

    const data = await response.json();
    //[0] quite imported
    return data[0] || null;
  } catch (error) {
    console.error("Error fetching agent:", error);
    throw error;
  }
}

// THIS IS AI (fetchPropertyHandled)
async function fetchPropertyHandled(slug: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WP_URL}/agent?slug=${slug}&_embed=true`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch agent`);
    }
    const data = await response.json();

    // Get embedded properties (the [0] is important as you noted)
    const properties = data[0]._embedded["acf:post"] || [];

    // For each property, fetch its featured image details
    const propertiesWithImages = await Promise.all(
      properties.map(async (property: ImageProperty) => {
        if (property.featured_media) {
          try {
            const mediaResponse = await fetch(
              `${process.env.NEXT_PUBLIC_WP_URL}/media/${property.featured_media}`
            );

            if (mediaResponse.ok) {
              const mediaData = await mediaResponse.json();
              // Add the image URL to the property object
              return {
                ...property,
                featured_image_url: mediaData.source_url,
                // You can also include other sizes if needed
                featured_image_sizes: mediaData.media_details?.sizes,
              };
            }
          } catch (mediaError) {
            console.error(
              `Error fetching media for property ${property.id}:`,
              mediaError
            );
          }
        }
        return property;
      })
    );

    return propertiesWithImages;
  } catch (error) {
    console.error("Error fetching agent:", error);
    throw error;
  }
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WP_URL}/agent?_embed=true`);
  const data: AgentStaticParams[] = await res.json();

  return data.map((data) => ({
    slug: data.slug,
  }));
}

export default async function AgentPage({ params,}: {params: Promise<{ slug: string }>;}) {
  
  const { slug } = await params;
  const agent = await fetchAgentDetails(slug);

  if (!agent) {
    return <NotFound title={"Agent"}/>;
  }

  const property = await fetchPropertyHandled(slug);
  
  return (
    <main>
      <section>
        <div className={style.contact}>
          <div className={style.image_container}>
            <Image
              src={agent._embedded["wp:featuredmedia"][0]?.source_url}
              alt="Property Image"
              width={1000}
              height={200}
            />
          </div>

          <AgentContactForm data={agent} />
        </div>

        <div className={style.properties}>
          <SectionHeader title={"Properties Handled"} />

          <div className={style.grid}>
            {property.map((property) => (
              <div className={style.card} key={property.id}>
                <Link href={`/properties/${property.slug}`}>
                  <div className={style.title}>
                    <h2>{property.title.rendered}</h2>
                    <div className={style.address}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="104 411 24 32"
                        fill="#FFB22C"
                      >
                        <title>Location Icon</title>
                        <path d="M116,426 C114.343,426 113,424.657 113,423 C113,421.343 114.343,420 116,420 C117.657,420 119,421.343 119,423 C119,424.657 117.657,426 116,426 Z M116,418 C113.239,418 111,420.238 111,423 C111,425.762 113.239,428 116,428 C118.761,428 121,425.762 121,423 C121,420.238 118.761,418 116,418 Z M116,440 C114.337,440.009 106,427.181 106,423 C106,417.478 110.477,413 116,413 C121.523,413 126,417.478 126,423 C126,427.125 117.637,440.009 116,440 Z M116,411 C109.373,411 104,416.373 104,423 C104,428.018 114.005,443.011 116,443 C117.964,443.011 128,427.95 128,423 C128,416.373 122.627,411 116,411 Z" />
                      </svg>
                      <address>{property.acf.address}</address>
                    </div>
                  </div>
                  <Image
                    src={property.featured_image_url}
                    alt="Property Image"
                    width={600}
                    height={200}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
