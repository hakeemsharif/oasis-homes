import React from "react";
import style from "./agent.module.scss";
import SectionHeader from "@/component/ui/sectionheader";
import AgentsCards from "@/component/ui/cards/agents";
import Link from "next/link";
async function getAgents() {
  
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_WP_URL}/agent?&_embed=true`);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return {
      error: "Failed to fetch agent data"
    }
  }
}

export default async function AgentSection() {

  const data = await getAgents()
  
  return (
    <section>
      <div className={style.container}>
        <SectionHeader title={"Agents"} />
        {data.error ? 
          <p>Failed to Agent Data</p> 
          : 
          <>
            <AgentsCards data={data} limit={4}/>
            <div className={style.button_container}>
              <Link href={`/agents`}>
                <button className={style.button}>View All Agents</button>
              </Link>
            </div>
          </>
        }

      </div>
    </section>
  );
}
