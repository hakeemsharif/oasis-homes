import React from 'react'
import style from './hightlights.module.scss'

type PropertyHighlights = {
  acf: { 
    price: number;
    full_bathrooms: number;
    partial_bath: number;
    bedrooms: number;
    total_sqft: number;
    lot_size: number;
  };
}

type HighlightsProps = {
  data: PropertyHighlights;
}

export default function Highlights({data}: HighlightsProps) {
  return (
    <div className={style.highlights}>
        <p>Price<strong>PHP {data.acf?.price.toLocaleString() || "N/A"}</strong></p>
        <p>Bedroom<strong>{data.acf?.bedrooms || "N/A"}</strong></p>
        <p>Bathrooms<strong>{data.acf?.full_bathrooms + data.acf.partial_bath || "N/A"}</strong></p>
        <p>Interior<strong>{data.acf?.total_sqft || "N/A"} Sq Ft.</strong></p>
        <p>Exterior<strong>{data.acf?.lot_size || "N/A"} Acre(s)</strong></p>
    </div>
  )
}
