import React from "react";
import Image from "next/image";
import style from "./card.module.scss";
import Link from "next/link";

type Agent = {
  id: string;
  title: { rendered: string };
  slug: string;
  acf: {
    title: string;
    number: number;
    email: string;
  };
  _embedded: { "wp:featuredmedia": { source_url: string }[] };
};

type AgentCardProps = {
  data: Agent[];
  limit: number;
};

export default function AgentsCards({ data, limit }: AgentCardProps) {
  return (
    <div className={style.grid}>
      {data
      // .sort((a, b) => parseInt(a.id) - parseInt(b.id))
      .slice(0, limit)
      .map((agent) => (
        <div className={style.card} key={agent.id}>
          <Link href={`agents/${agent.slug}`}>
            <div className={style.title}>
              <h2>{agent.title.rendered}</h2>
              <span>+{agent.acf.number}</span>
            </div>
            <Image 
              src={agent._embedded["wp:featuredmedia"][0]?.source_url}
              alt="Agent Image"
              width={600}
              height={200}/>
          </Link>
        </div>
      ))}
    </div>
  );
}
