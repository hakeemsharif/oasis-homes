import React from 'react'
import style from './interior.module.scss'

type PropertyInterior = {
  acf: { 
    features: string;
    full_bathrooms: number;
    partial_bath: number;
    bedrooms: number;
  };
}

type InteriorProps = {
  data: PropertyInterior;
}

export default function Interior({data}: InteriorProps) {
  return (
    <>
      <div className={style.details}>
        <dt>Features</dt>
        <dd>{data.acf?.features || "N/A"}</dd>
      </div>

      <div className={style.details || "N/A"}>
        <dt>Full Bathooms</dt>
        <dd>{data.acf?.full_bathrooms || "N/A"}</dd>
      </div>

      <div className={style.details}>
        <dt>Partial Bath</dt>
        <dd>{data.acf?.partial_bath || "N/A"}</dd>
      </div>

      <div className={style.details}>
        <dt>Bedrooms</dt>
        <dd>{data.acf?.bedrooms || "N/A"}</dd>
      </div>
    </>
  )
}
