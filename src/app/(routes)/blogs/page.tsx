import React from 'react'

import Headlines from '@/component/ui/headlines';
import Search from '@/component/ui/search';
import BlogCards from '@/component/ui/cards/blogs';
// import ButtonContainer from '@/component/ui/button';
import Pagination from '@/component/ui/pagination';

// async function getBlogs(): Promise<Blog[]> {
async function getBlogs(page = 1, perPage = 6) {
  try {
    // const response = await fetch(`${process.env.WP_URL}/posts?&_embed=true`);
    const response = await fetch(`${process.env.NEXT_PUBLIC_WP_URL}/posts?_embed=true&page=${page}&per_page=${perPage}`);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();

    const totalPosts = parseInt(response.headers.get('X-WP-Total') || '0', 10);
    const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '1', 10);

    return { data, totalPosts, totalPages };
    // return data;

  } catch (error) {
    console.error(error);
    // return [];
    return { data: [], totalPosts: 0, totalPages: 1 };
  }
}


// https://nextjs.org/docs/app/guides/upgrading/version-15#params--searchparams
// With AI Assist

type SearchParams = { [key: string]: string | string[] | undefined };

export default async function BlogsPages({searchParams}: {searchParams: Promise<SearchParams>;}) {
  const params = await searchParams;
  const page = parseInt(typeof params.page === "string" ? params.page : '1', 10);
  const perPage = 6;

  const { data, totalPages } = await getBlogs(page, perPage);

  return (
    <main>
        <Headlines title={"Blogs"}/>
        <Search placeholder={"Blog"}/>
        {/* <BlogCards data={data} limit={6}/> */}
        <BlogCards data={data} limit={perPage} />
        <Pagination currentPage={page} totalPages={totalPages} />
        {/* <ButtonContainer /> */}
    </main>
  )
}

/// PAGINATION THIS BAD BOY
/// Refer https://www.youtube.com/watch?v=qPsY4AKFlnM