// 'use client'
import React from 'react'
import styles from './ProjectsCard.module.css'
import Image from 'next/image'
import { AiOutlineDoubleRight } from "react-icons/ai";
import Link from "next/link";
// import { useState } from "react";

const ProjectsCard = (props) => {
    // const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className={styles.card}>
        <Image
          width={200}
          height={200}
          src={props.Images}
          className={styles.img}
          alt="Image"
        />
    </div>
  )
}

export default ProjectsCard