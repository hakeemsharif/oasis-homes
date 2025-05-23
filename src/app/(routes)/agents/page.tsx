import React from 'react'
import Headlines from '@/component/ui/headlines';
import Search from '@/component/ui/search';
import AgentsCards from '@/component/ui/cards/agents';
import Pagination from '@/component/ui/pagination';

async function getAgents(page = 1, perPage = 8) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_WP_URL}/agent?_embed=true&page=${page}&per_page=${perPage}`);
    
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

export default async function AgentsPage({searchParams}: {searchParams: Promise<SearchParams>;}) {

  const params = await searchParams;
  const page = parseInt(typeof params.page === "string" ? params.page : '1', 10);
  const perPage = 8;

  const { data, totalPages } = await getAgents(page, perPage);
  
  return (
    <main>
        <Headlines title={"Agents"}/>
        <Search placeholder={"Agents"}/>
        <AgentsCards data={data} limit={8}/>
        <Pagination currentPage={page} totalPages={totalPages} />
    </main>
  )
}
