// 'use client'
import React from 'react'
import styles from './HomePlansCard.module.css'
import Image from 'next/image'
import { AiOutlineDoubleRight } from "react-icons/ai";
import Link from "next/link";
// import { useState } from "react";

const HomePlansCard = (props) => {
    // const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className={styles.card}>
        <Image
          width={400}
          height={400}
          src={props.Images}
          className={styles.img}
          alt="Image"
        /> 
        {/* <img
        src={props.Images}
        className={styles.img}
        /> */}
        <h2 className={styles.card_h2}
          style={{
            textAlign: "center",
            // padding: "1.5rem 0 0 0",
            fontWeight: "500",
            marginBottom: "0rem",
            fontFamily:'Pangeatext,sans-serif',
            color:'#50D5B1',
          }}
        >
          {props.title}
        </h2>
        
    </div>
  )
}

export default HomePlansCard