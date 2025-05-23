import React from "react";
import Image from "next/image";
import style from "./card.module.scss";
import moment from "moment";
import Link from "next/link";

type Blog = {
  id: string;
  title: { rendered: string };
  slug: string;
  date: string;
  _embedded: { "wp:featuredmedia": { source_url: string }[] };
};

type BlogCardProps = {
  data: Blog[];
  currentBlogSlug?: string;
  limit: number;
};

export default function BlogCards({ data, currentBlogSlug, limit,  }: BlogCardProps) {
  
  return (
    <div className={style.grid}>
      {data
      .filter((blog) => blog.slug !== currentBlogSlug)
      // .sort(() => Math.random() - 0.5)     
      .slice(0, limit)
      .map((blog) => (
        <div className={style.card} key={blog.id}>
          <div className={style.title}>
            <span>{moment(blog.date).format("DD MMMM YYYY")}</span>
            <h2>{blog.title.rendered}</h2>
            <Link href={`/blogs/${blog.slug}`}>
              <button className={style.read}>Read More</button>
            </Link>
          </div>
          <Image 
            src={blog._embedded["wp:featuredmedia"][0].source_url}
            alt="Blog Image" 
            width={1000}
            height={100}
            />
        </div>
      ))}
    </div>
  );
}
