import React from "react";
import style from './sectionheader.module.scss'

type Title = {
    title: string;
}

export default function SectionHeader(props: Title) {
  return (
    <div className={style.section_header}>
      <span></span>
      <h2>{props.title}</h2>
      <span></span>
    </div>
  );
}
