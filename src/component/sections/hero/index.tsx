import React from "react";
import style from "./hero.module.scss";
import Image from "next/image";
import Hero from "../../../../public/images/hero-image.jpg";
import Link from "next/link";

export default function HeroSection() {

  return (
    <section>
      <div className={style.container}>
        <Image src={Hero} alt="Hero Image" fill priority quality={100} />
        <div className={style.tagline}>
          <span>Welcome to</span>
          <h1>Oasis Homes</h1>
          <Link href={'/properties'}>
            <button className={style.button}>Browse Properties</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
