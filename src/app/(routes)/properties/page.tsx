import React from "react";
import Search from "@/component/ui/search";
import PropertyCard from "@/component/ui/cards/property";
import Headlines from "@/component/ui/headlines";
import Pagination from "@/component/ui/pagination";

export const dynamic = 'force-static'; // This is the key line!
export const revalidate = false; // Never revalidate

async function getProperties(page = 1, perPage = 8) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_WP_URL}/property?_embed=true&page=${page}&per_page=${perPage}`, {
        headers: {
          "Authorization": "Basic " + Buffer.from(`${process.env.WP_USER}:${process.env.WP_PW}`).toString("base64"),
        },
    });;

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();

    const totalPosts = parseInt(response.headers.get('X-WP-Total') || '0', 10);
    const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '1', 10);
    
    return { data, totalPosts, totalPages };
  } catch (error) {
    console.error(error);
    return { data: [], totalPosts: 0, totalPages: 1 };
  }
}

type SearchParams = { [key: string]: string | string[] | undefined };

export default async function PropertiesPage({searchParams}: {searchParams: Promise<SearchParams>;}) {

  const params = await searchParams;
  const page = parseInt(typeof params.page === "string" ? params.page : '1', 10);
  const perPage = 8;

  const { data, totalPages } = await getProperties(page, perPage);

  return (
    <main>
      <Headlines title={"Properties"} />
      <Search placeholder={"Properties"}/>
      <PropertyCard data={data} limit={15}/>
      <Pagination currentPage={page} totalPages={totalPages} />
    </main>
  );
}
