import React from 'react'
import style from './utilities.module.scss'

type PropertyUtilities = {
  acf: { 
    year_built: string;
    total_sqft: number;
    lot_size: number;
    parking: string;
    cooling: string;
  };
}

type UtilitiesProps = {
  data: PropertyUtilities;
}

export default function Utilities({data}: UtilitiesProps) {
  return (
    <>
      <div className={style.details}>
        <dt>Year Built</dt>
        <dd>{data.acf?.year_built || "N/A"}</dd>
      </div>

      <div className={style.details}>
        <dt>Total Sqft</dt>
        <dd>{data.acf?.total_sqft || "N/A"}</dd>
      </div>

      <div className={style.details}>
        <dt>Lot Size Unit</dt>
        <dd>Acre(s)</dd>
      </div>

      <div className={style.details}>
        <dt>Lot Size</dt>
        <dd>{data.acf?.lot_size || "N/A"}</dd>
      </div>

      <div className={style.details}>
        <dt>Parking</dt>
        <dd>{data.acf?.parking || "N/A"}</dd>
      </div>
      
      <div className={style.details}>
        <dt>Cooling</dt>
        <dd>{data.acf.cooling || "N/A"}</dd>
      </div>
    </>
  )
}
