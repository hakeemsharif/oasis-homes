import React from "react";
import style from "./properties.module.scss";
import SectionHeader from "@/component/ui/sectionheader";
import PropertyCard from "@/component/ui/cards/property";
import Link from "next/link";

async function getProperties() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_WP_URL}/property?&_embed=true`);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return {
      error: "Failed to load properties",
    };
  }
}

export default async function FeaturedPropertiesSection() {
  const data = await getProperties();

  return (
    <section>
      <div className={style.container}>
        <SectionHeader title={"Featured Properties"} />
        {data.error ? (
          <p>Failed to Property Data</p>
        ) : (
          <>
            <PropertyCard data={data} limit={4} />
            <div className={style.button_container}>
              <Link href={`/properties`}>
                <button className={style.button}>View More Properties</button>
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
