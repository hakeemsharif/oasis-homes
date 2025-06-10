"use client"

import style from "./message.module.scss"
import CloseIcon from "../../../../public/close.svg"
import Image from "next/image";
import { useState } from "react";

export default function Message() {
    const [isVisible, setIsVisible] = useState(true);
        
    const handleDismiss = () => {
      setIsVisible(false);
    };
    
    if (!isVisible) return null;

  return (
    <div className={style.demo_notice} id="demoNotice">
      {/* <span className={style.notice_icon}></span> */}
      <p className={style.notice_message}>
        <b>DISCLAMER: </b>This is a demo website created to showcase my web
        development and design skills. All content, products, and services shown here are for demonstration purposes only.
      </p>
      <button onClick={handleDismiss} className={style.close_button} aria-label="Dismiss notice">
       <Image src={CloseIcon} alt="Close Icon" width={25} height={25}/>
      </button>
    </div>
  );
}