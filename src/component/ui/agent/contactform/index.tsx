import React from "react";
import style from "./form.module.scss";
import AgentForm from "../mainform";
type AgentDetails = {
  title: { rendered: string };
  acf: {
    title: string;
    number: number;
    email: string;
  };
};

type AgentDetailsProps = {
  data: AgentDetails;
};
export default function AgentContactForm({ data }: AgentDetailsProps) {
  return (
    <section className={style.inquiry}>
      <div className={style.agent}>
        <div className={style.name}>
          <h2>{data.title.rendered}</h2>
          <span>{data.acf.title}</span>
        </div>

        <div className={style.contact}>
          <p>+{data.acf.number}</p>
          <p>{data.acf.email}</p>
        </div>
      </div>

      <h2>Let&apos;s get in touch</h2>
      <AgentForm name={data.title.rendered}/>
    </section>
  );
}
