import React from "react";
import style from "./blog.module.scss";
import SectionHeader from "@/component/ui/sectionheader";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";

type Blog = {
  id: string;
  title: { rendered: string };
  slug: string;
  date: string;
  acf: { 
    featured_image: string;
  };
  _embedded: { "wp:featuredmedia": { source_url: string }[] };
};

async function getBlogs() {
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
    return {
      error: "Failed to load blog",
    };
  }
}

export default async function BlogSection() {

  const data = await getBlogs();

  return (
    <section>
      <div className={style.container}>
        <SectionHeader title={"Blogs"} />
        {data.error ? <p>Failed to Blog Data</p> : 
        <>
        <div className={style.grid}>
          {data.slice(0, 1).map((blog: Blog) => (
            <div className={style.card_one} key={blog.id}>
              <div className={style.title}>
                <span>{moment(blog.date).format("DD MMMM YYYY")}</span>
                <h2>
                  {blog.title.rendered}
                </h2>
                <Link href={`blogs/${blog.slug}`}>
                  <button className={style.read}>Read More</button>
                </Link>
              </div>
              <Image
                src={blog.acf.featured_image}
                alt="Blog Image"
                width={1000}
                height={100}
              />
            </div>
          ))}

          {data.slice(0, 2).map((blog: Blog) => (
            <div className={style.card_two} key={blog.id}>
              <div className={style.title}>
                <span>{moment(blog.date).format("DD MMMM YYYY")}</span>
                <h2>
                  {blog.title.rendered}
                </h2>
                <Link href={`blogs/${blog.slug}`}>
                  <button className={style.read}>Read More</button>
                </Link>
              </div>
              <Image
                src={blog.acf.featured_image}
                alt="Agent Image"
                width={1000}
                height={100}
              />
            </div>
          ))}

          {data.slice(0, 3).map((blog: Blog) => (
            <div className={style.card_three} key={blog.id}>
              <div className={style.title}>
                <span>{moment(blog.date).format("DD MMMM YYYY")}</span>
                <h2>
                  {blog.title.rendered}
                </h2>
                <Link href={`blogs/${blog.slug}`}>
                  <button className={style.read}>Read More</button>
                </Link>
              </div>
              <Image
                src={blog.acf.featured_image}
                alt="Agent Image"
                width={1000}
                height={100}
              />
            </div>
          ))}

          {data.slice(0, 4).map((blog: Blog) => (
            <div className={style.card_four} key={blog.id}>
              <div className={style.title}>
                <span>{moment(blog.date).format("DD MMMM YYYY")}</span>
                <h2>
                  {blog.title.rendered}
                </h2>
                <Link href={`blogs/${blog.slug}`}>
                  <button className={style.read}>Read More</button>
                </Link>
              </div>
              <Image
                src={blog.acf.featured_image}
                alt="Agent Image"
                width={1000}
                height={100}
              />
            </div>
          ))}

          {data.slice(0, 5).map((blog: Blog) => (
            <div className={style.card_five} key={blog.id}>
              <div className={style.title}>
                <span>{moment(blog.date).format("DD MMMM YYYY")}</span>
                <h2>
                  {blog.title.rendered}
                </h2>
                <Link href={`blogs/${blog.slug}`}>
                  <button className={style.read}>Read More</button>
                </Link>
              </div>
              <Image
                src={blog.acf.featured_image}
                alt="Agent Image"
                width={1000}
                height={100}
              />
            </div>
          ))}

          {data.slice(0, 6).map((blog: Blog) => (
            <div className={style.card_six} key={blog.id}>
              <div className={style.title}>
                <span>{moment(blog.date).format("DD MMMM YYYY")}</span>
                <h2>
                  {blog.title.rendered}
                </h2>
                <Link href={`blogs/${blog.slug}`}>
                  <button className={style.read}>Read More</button>
                </Link>
              </div>
              <Image
                src={blog.acf.featured_image}
                alt="Agent Image"
                width={1000}
                height={100}
              />
            </div>
          ))}
        </div>

        <div className={style.button_container}>
          <Link href={`/blogs`}>
            <button className={style.button}>More Blogs</button>
          </Link>
        </div>
        </>
        }
      </div>
    </section>
  );
}
