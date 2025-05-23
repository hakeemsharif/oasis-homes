import React from "react";
import style from "./search.module.scss";

type Search = {
  placeholder: string
}

export default function Search(props: Search) {
  return (
    <div className={style.container}>
      <div className={style.search}>
        <input type="text" name="search" placeholder={`Search ${props.placeholder}`} />
      </div>

      <div className={style.sort}>
        <span>Sort by: </span>

        {props.placeholder === "Properties" ? (
          <>
            <select className={style.select} name="properties" id="properties">
              <option className={style.option} value="Newest Listing">Newest Listing</option>
              <option className={style.option} value="Lowest Price">Lowest Price</option>
              <option className={style.option} value="Highest Price">Highest Price</option>
              <option className={style.option} value="Lot Size">Lot Size</option>
            </select>
          </>
        ) : props.placeholder === "Agents" ? (
          <>
            <select className={style.select} name="agents" id="agents">
              <option className={style.option} value="Most Experienced">Most Experienced</option>
              <option className={style.option} value="Top Rated">Top Rated</option>
              <option className={style.option} value="Newest Agents">Newest Agents</option>
            </select>
          </>
        ) : props.placeholder === "Blog" ?(
          <>
            <select className={style.select} name="blogs" id="blogs">
              <option className={style.option} value="Most Recent">Most Recent</option>
              <option className={style.option} value="Oldest">Oldest</option>
            </select>
          </>
        ) : (
            <button className={style.button}>Default Filter</button>
        )}
        
      </div>
    </div>
  );
}
