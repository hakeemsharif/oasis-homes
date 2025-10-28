import React from 'react'
import style from './blog.module.scss'
import Image from 'next/image';
import moment from 'moment';
import DOMPurify from 'isomorphic-dompurify';
import SectionHeader from '@/component/ui/sectionheader';
import BlogCards from '@/component/ui/cards/blogs';
import NotFound from '@/app/pages/not-found';

type Blog = {
  title: { rendered: string; };
  content: {rendered: string; }
  date: string;
  author: string;
  acf: {
    featured_image: string;
  }
  _embedded: { 
    "author": { name: string; }[];
    "wp:featuredmedia": { source_url: string; }[];
  };
}

type BlogStaticParams = {
  slug: string;
};


async function getBlogs(slug: string): Promise<Blog | null> {

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_WP_URL}/posts?slug=${slug}&_embed=true`, {
        headers: {
          "Authorization": "Basic " + Buffer.from(`${process.env.WP_USER}:${process.env.WP_PW}`).toString("base64"),
        },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data[0] || null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function getMoreBlogs() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_WP_URL}/posts?&_embed=true`, {
        headers: {
          "Authorization": "Basic " + Buffer.from(`${process.env.WP_USER}:${process.env.WP_PW}`).toString("base64"),
        },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WP_URL}/posts?_embed=true`, {
        headers: {
          "Authorization": "Basic " + Buffer.from(`${process.env.WP_USER}:${process.env.WP_PW}`).toString("base64"),
        },
    });
  const data: BlogStaticParams[] = await res.json();

  return data.map((data) => ({
    slug: data.slug,
  }));
}

export default async function BlogPage({params}: {params: Promise<{ slug: string}>;}) {

    const { slug } = await params;
    const blog = await getBlogs(slug);
    const moreblog = await getMoreBlogs();

    if (!blog) {
        return <NotFound title={"Blog"}/>;
    }

    return (
    <main>
        <article className={style.article}>
            <h1>{blog.title.rendered}</h1>
          <div className={style.image_container}>
            <Image
              src={blog.acf.featured_image}
              alt="Property Image"
              width={5000}
              height={650}
            />
          </div>

          <div className={style.info}>
            <p>Published by<strong>{blog._embedded["author"][0]?.name}</strong></p>
            <p>Date Published<strong>{moment(blog.date).format('DD MMMM YYYY | hh:mm ')}</strong></p>
            <p>Reading Time<strong>2 mins.</strong></p>
          </div>

          <div
            className={style.content}
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.content.rendered) }}
            />
        </article>

        <SectionHeader title={"More Blogs"}/>
        <BlogCards data={moreblog} limit={3} currentBlogSlug={slug} />
    </main>
  )
}
