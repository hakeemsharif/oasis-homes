import React from "react";
import style from "./card.module.scss";
import Image from "next/image";
import Link from "next/link";

type Property = {
  id: string;
  title: { rendered: string };
  slug: string;
  acf: { address: string };
  _embedded: { "wp:featuredmedia": { source_url: string }[] };
};

type PropertyCardProps = {
  data: Property[];
  limit: number;
};

export default function PropertyCard({ data, limit }: PropertyCardProps) {
  return (
    <div className={style.grid}>
      {data.slice(0,limit).map((property) => (
        <div className={style.card} key={property.id}>
          <Link href={`properties/${property.slug}`}>
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
            src={property._embedded["wp:featuredmedia"][0]?.source_url}
            alt="Property Image"
            width={600}
            height={200}
          />
          </Link>
        </div>
      ))}
    </div>
  );
}