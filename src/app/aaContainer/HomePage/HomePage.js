import React from 'react'
import Image from 'next/image'
import SwiperPlan from './Swiper'
import styles from './HomePage.module.css'

const HomePage = () => {

  return (
    <div style={{fontFamily:'Gill Sans, sans-serif'}}>
      <div 
        // style={{height:'500',
        //   backgroundImage: "url(" + "https://www.omdecor.in/wp-content/uploads/2023/06/Sliding-Mosqiute-Net-banner.jpg" + ")",
        //   backgroundPosition: 'center',
        //   backgroundSize: 'cover',
        //   backgroundRepeat: 'no-repeat',
        //   objectFit:'container'
        // }}
        >
      </div>
      {/* <div className="h-20 bg-gradient-to-r from-cyan-500 to-blue-500"></div> */}
      <div className={styles.sman_container}>
        <div className={styles.img_box}>
          <Image
            src='./home/Sman.png'
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div className={styles.content_box}>
          <h1 className={styles.content_box_h1}
            style={{color:'#27772e', lineHeight:'1', position:'relative'}}>
            Welcome To Our Mosquito Mesh
          </h1>
          <h4 className='p-4' style={{fontSize:'1.5rem', color:'black', lineHeight:'1'}}
          >About Company</h4>
          <p className='px-4'>
          Mr. Mosquito is your go-to guy for any type of screen installation. With over 100+ corporate clients 
          and over 240+ projects completed since 2020, we have become one of the prominent home service companies. 
          We deliver eco-friendly and cost-effective mosquito screening solutions that suffice your needs by 
          incorporating innovation in our products.
          </p>
        </div>
      </div>

       {/* -------swiper--------- */}
      <div style={{textAlign:'center',justifyContent:'center',padding:'1.5rem'}}>
          <SwiperPlan></SwiperPlan>
      </div>

        
    </div>
  )
}

export default HomePage