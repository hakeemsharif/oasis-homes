import React from "react";
import Image from "next/image";
import style from "./property.module.scss";
import SectionHeader from "@/component/ui/sectionheader";
import ContactForm from "@/component/ui/property/contactform";
import Highlights from "@/component/ui/property/highlights";
import Details from "@/component/ui/property/details";
import Utilities from "@/component/ui/property/utilities";
import Interior from "@/component/ui/property/interior";
import NotFound from "@/app/pages/not-found";

type PropertyStaticParams = {
  slug: string;
};

async function fetchPropertyDetails(slug: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WP_URL}/property?slug=${slug}&_embed=true`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch property: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data[0] || null;
  } catch (error) {
    console.error("Error fetching property:", error);
    throw error;
  }
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WP_URL}/property?_embed=true`);
  const data: PropertyStaticParams[] = await res.json();

  return data.map((data) => ({
    slug: data.slug,
  }));
}

export default async function PropertyPage({params,}: {params: Promise<{ slug: string }>;}) {

  const { slug } = await params;
  const property = await fetchPropertyDetails(slug);

  if (!property) {
    return <NotFound title={"Property"}/>;
  }
  
  return (
    <main>
      <section>
        <div className={style.image_contact}>
          <div className={style.image_container}>
            <Image
              src={property._embedded["wp:featuredmedia"][0]?.source_url}
              alt="Property Image"
              width={1000}
              height={200}
            />
          </div>
          <div className={style.form}>
             <ContactForm id={property.acf?.agent_associate} title={property.title.rendered} />
          </div>
        </div>

        <article className={style.container}>
            <SectionHeader title={property.title.rendered} />
            <Highlights data={property}/>
        </article>

        <article className={style.container}>
            <SectionHeader title={"Listing Details"} />
            <Details data={property}/>
        </article>

        <article className={style.container}>
            <SectionHeader title={"Utilities & Building"} />
            <Utilities data={property}/>
        </article>

        <article className={style.container}>
            <SectionHeader title={"Interior"} />
            <Interior data={property}/>
        </article>
      </section>
    </main>
  );
}
