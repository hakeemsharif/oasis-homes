import React from "react";
import style from "./inquiry.module.scss";
import Image from "next/image";
import Link from "next/link";
import MainForm from "../mainform";

async function fetchAgentAssociate(id: number) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_WP_URL}/agent/${id}?_embed=true`);

    if (!response.ok) {
      throw new Error(`Failed to fetch agent`);
    }

    const data = await response.json();
    return data || null;
  } catch (error) {
    console.error("Error fetching agent:", error);
    throw error;
  }
}

export default async function ContactForm({ id, title }: { id: number; title: string}) {
  const agent = await fetchAgentAssociate(id);

  if (!agent) {
    return <div>Error: Agent not found</div>;
  }

  return (
    <div className={style.form}>
      <div className={style.agent}>
        <div className={style.image_container}>
            <Image 
            src={agent._embedded["wp:featuredmedia"][0]?.source_url}
            alt="Agent Image"
            width={300}
            height={90}
            />
        </div>

        <div className={style.agent_info}>
            <div className={style.name}>
                <h2>{agent.title.rendered}</h2>
                <dd className={style.title}>{agent.acf.title}</dd>
            </div>

            <div className={style.contact_info}>      
                <dd>+{agent.acf.number}</dd>
                <dd>{agent.acf.email}</dd>
            </div>
            <Link className={style.link} href={`/agents/${agent.slug}`}>Agent Profile</Link>
        </div>
      </div>
      <MainForm title={title}/>
    </div>
  );
}
