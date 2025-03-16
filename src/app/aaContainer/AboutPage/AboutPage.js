import React from 'react'
import styles from './Aboutpage.module.css'
import Projects from './ProjectSwiper'
import Projects2 from './ProjectSwiper2'

const AboutPage = () => {
  return (
    <>
      
      {/* ---------Choose Us------------- */}
      <div style={{justifySelf:'center', textAlign:'center'}}>
        <h1 className={styles.h1}>Why Choose Us</h1>
        <h2 className={styles.h2}>Quality Of Work</h2>

        <img src='./home/about1.png'></img>
      </div>

      {/* ---------projects------------- */}
      <div style={{justifySelf:'center', textAlign:'center'}}>
        <h1 className={styles.h1}>Project We Have Done</h1>
        <h2 className={styles.h2}>Company Services</h2>

      </div>
      <Projects></Projects>

      <Projects2></Projects2>

    </>
  )
}

export default AboutPage