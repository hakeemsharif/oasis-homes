import React from "react";
import style from "./details.module.scss";

type PropertyDetails = {
  acf: { 
    property_id	: string;
    property_type: string;
    status: string;
    address: string
  };
}

type DetailsProps = {
  data: PropertyDetails;
}

export default function Details({data}: DetailsProps) {
  return (
    <>
      <div className={style.details}>
        <dt>Property ID</dt>
        <dd>{data.acf?.property_id || "N/A"}</dd>
      </div>

      <div className={style.details}>
        <dt>Property Type</dt>
        <dd>{data.acf?.property_type || "N/A"}</dd>
      </div>

      <div className={style.details}>
        <dt>Status</dt>
        <dd>{data.acf?.status || "N/A"}</dd>
      </div>

      <div className={style.details}>
        <dt>Address</dt>
        <dd>{data.acf?.address || "N/A"}</dd>
      </div>
    </>
  );
}
