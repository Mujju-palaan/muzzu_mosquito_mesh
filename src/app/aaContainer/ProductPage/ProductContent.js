"use client";
import React from "react";
import styles from "./ProductContent.module.css";
import BlindsSwiper from './productswiper/BlindsSwiper'
import ClothHangerSwiper from './productswiper/ClothHangerSwiper'
import InvisibleGrillSwiper from './productswiper/InvisibleGrillSwiper'
import Openable_Door_Swiper from './productswiper/Openable_Door_Swiper'
import Openable_Window_Swiper from './productswiper/Openable_Door_Swiper'
import Pleated_Door_Swiper from './productswiper/Pleated_Door_Swiper'
import Pleated_Window_Swiper from './productswiper/Pleated_Window_Swiper'
import VelcroSwiper from './productswiper/VelcroSwiper'
import UPVS_Door from "./productswiper/UPVS_Door";
import UPVS_Window from './productswiper/UPVS_Window'



const ProductContent = () => {
  return (
    <>
      <div className={styles.maincontent}>
        <h2 className={styles.h2} style={{color:'#1f5156'}}>
          Mesh Products
        </h2>

        {/* --------⁠Velcro Mosquito Net------- */}
        <div style={{ textAlign: "left", paddingBottom:'2rem' }}>
          <h2>
            <div style={{ display: "flex" }}>
              <div className={styles.circle}>1</div>{" "}
              <div className={styles.heading}>
                ⁠Velcro Mosquito Net:
              </div>
            </div>
          </h2>
          <p className={styles.plpara}>
            Why Choose Velcro Mosquito Nets?

            ✅ Easy to Install & Remove: No tools, no hassle! Our Velcro mosquito nets can be effortlessly attached and detached, making them ideal for any space.
            ✅ Perfect Fit for Every Window/Door: Custom-designed to fit your windows, doors, or even balconies, ensuring complete protection without gaps.
            ✅ Durable & Breathable: Made from high-quality materials, our nets are strong, long-lasting, and allow fresh air to flow freely.
            ✅ Eco-Friendly & Safe: Ditch the harmful chemicals and sprays. Our nets provide a non-toxic, eco-friendly way to keep mosquitoes at
            [25/02/25, 10:18:40 PM] Muddasir Pro Player: ✅ Stylish & Minimalistic: Designed to blend seamlessly with your home decor, our Velcro nets add a touch of elegance while keeping your space safe.

          </p>
          <div style={{marginLeft:'2rem'}}>
          <VelcroSwiper></VelcroSwiper>
          </div>
        </div>
        

        {/* --------Blinds------- */}
        <div style={{ textAlign: "left", paddingBottom:'2rem' }}>
          <h2>
            <span className={styles.circle}>2</span>{" "}
            <span className={styles.heading}>Blinds:</span>
          </h2>
          <p className={styles.plpara}>
            Why Choose Blinds Mosquito Nets?

            ✨ Dual Functionality: Not just a mosquito net – it’s a blind too! Enjoy complete protection from mosquitoes while controlling light and privacy with ease.
            ✨ Sleek & Modern Design: Our nets are designed to complement your home’s aesthetics, adding a touch of sophistication to any room.
            ✨ Easy to Operate: Effortlessly roll up or down with a smooth mechanism, making them convenient for daily use.
            ✨ Durable & Breathable: Crafted from high-quality materials, our nets are built to last and allow fresh air to circulate freely.
            ✨ Custom Fit: Tailored to fit your windows or doors perfectly, ensuring no gaps for mosquitoes to sneak through.

          </p>

          <div style={{marginLeft:'2rem'}}>
            <BlindsSwiper></BlindsSwiper>
          </div>
          
        </div>

        {/* --------PLEATED SLIDING DOORS------- */}
        <div style={{ textAlign: "left", paddingBottom:'2rem'  }}>
          <h2>
            <span className={styles.circle}>3</span>{" "}
            <span className={styles.heading}>PLEATED SLIDING DOORS :</span>
          </h2>
          <p className={styles.plpara}>
            Why Choose Pleated Sliding Doors and Windows?

            🌟 Space-Saving Design: Perfect for modern homes, our pleated sliding systems fold neatly, saving space while maximizing airflow and natural light.
            🌟 Sleek & Stylish: Add a touch of contemporary elegance to your home with our aesthetically pleasing designs that blend effortlessly with any decor.
            🌟 Smooth Operation: Engineered for ease, our sliding doors and windows glide effortlessly, making them a joy to use every day.
            🌟 Durable & Weather-Resistant: Built to withstand the elements, our pleated sliding systems are crafted from high-quality materials for long-lasting performance.
            🌟 Customizable Fit: Tailored to your exact specifications, ensuring a perfect fit for your doors, windows, or even large openings like patios and balconies.

          </p>
          <div style={{marginLeft:'2rem'}}>
            <Pleated_Door_Swiper></Pleated_Door_Swiper>
          </div>   
        </div>

        {/* --------PLEATED SLIDING WINDOWS------- */}
        <div style={{ textAlign: "left", paddingBottom:'2rem'  }}>
          <h2>
            <span className={styles.circle}>4</span>{" "}
            <span className={styles.heading}>PLEATED SLIDING WINDOWS:</span>
          </h2>
          <p className={styles.plpara}>
            Why Choose Pleated Sliding Doors and Windows?

            🌟 Space-Saving Design: Perfect for modern homes, our pleated sliding systems fold neatly, saving space while maximizing airflow and natural light.
            🌟 Sleek & Stylish: Add a touch of contemporary elegance to your home with our aesthetically pleasing designs that blend effortlessly with any decor.
            🌟 Smooth Operation: Engineered for ease, our sliding doors and windows glide effortlessly, making them a joy to use every day.
            🌟 Durable & Weather-Resistant: Built to withstand the elements, our pleated sliding systems are crafted from high-quality materials for long-lasting performance.
            🌟 Customizable Fit: Tailored to your exact specifications, ensuring a perfect fit for your doors, windows, or even large openings like patios and balconies.

          </p>
          <div style={{marginLeft:'2rem'}}>
            <Pleated_Window_Swiper></Pleated_Window_Swiper>
          </div>   
        </div>

        {/* --------INVISIBLE GRILL------- */}
        <div style={{ textAlign: "left", paddingBottom:'2rem'  }}>
          <h2>
            <div style={{ display: "flex" }}>
              <div className={styles.circle}>5</div>{" "}
              <div className={styles.heading}>INVISIBLE GRILL:</div>
            </div>
          </h2>
          <p className={styles.plpara}>
            Why Choose Invisible Grills?

            🔒 Maximum Safety, Minimum Visibility: Made from high-tensile steel cables, our grills offer superior strength and protection without obstructing your view.
            🌄 Uninterrupted Views: Keep your vistas clear and your spaces open, whether it’s a stunning cityscape, a lush garden, or a serene balcony.
            ✨ Sleek & Modern Design: Enhance the beauty of your home with a minimalist, almost invisible solution that blends seamlessly with your architecture.
            🌧️ Weather-Resistant & Durable: Built to withstand harsh weather conditions, our grills are rust-proof and long-lasting, ensuring years of reliable performance.
            🛠️ Customizable Solutions: Tailored to fit your windows, balconies, or terraces perfectly, providing a secure and stylish solution for every space.
            Safety Meets Elegance
            Invisible grills are more than just a security feature – they’re a lifestyle upgrade. Whether you’re safeguarding your children, pets, or simply enhancing your home’s aesthetic, our grills offer peace of mind without compromising on style.

          </p>

          <div style={{marginLeft:'2rem'}}>
            <InvisibleGrillSwiper></InvisibleGrillSwiper>
          </div>
            
        </div>

        {/* --------CLOTH HANGERS------- */}
        <div style={{ textAlign: "left", paddingBottom:'2rem'  }}>
          <h2>
            <div style={{ display: "flex" }}>
              <div className={styles.circle}>6</div>{" "}
              <div className={styles.heading}>
              CLOTH HANGERS:
              </div>
            </div>
          </h2>
          <p className={styles.plpara}>
            Why Choose Our Cloth Hangers?

            ✨ Space-Saving Design: Slim and lightweight, our hangers maximize closet space, giving you more room for your favorite outfits.
            👗 Gentle on Clothes: Say goodbye to shoulder bumps and wrinkles! Our hangers are crafted to protect your garments, keeping them in perfect shape.
            💪 Durable & Sturdy: Made from high-quality materials, our hangers are built to last, supporting even your heaviest coats and dresses with ease.
            🎨 Sleek & Stylish: Available in a variety of designs and finishes, our hangers add a touch of sophistication to your closet.
            🌿 Eco-Friendly Options: Choose from sustainable materials that are kind to the planet without compromising on quality.
            Elevate Your Wardrobe Experience
            A well-organized closet starts with the right hangers. Whether you’re storing delicate silks, bulky coats, or everyday wear, our cloth hangers are designed to meet all your needs. Transform your closet into a tidy, stylish space that makes getting dressed a joy!

          </p>

          <div style={{marginLeft:'2rem'}}>
            <ClothHangerSwiper></ClothHangerSwiper>
          </div>
            
        </div>

        {/* --------OPENABLE DOORS AND WINDOWS------- */}
        <div style={{ textAlign: "left", paddingBottom:'2rem'  }}>
          <h2>
            <div style={{ display: "flex" }}>
              <div className={styles.circle}>7</div>{" "}
              <div className={styles.heading}>
              OPENABLE DOORS AND WINDOWS::
              </div>
            </div>
          </h2>
          <p className={styles.plpara}>
            Why Choose Openable Doors and Windows?

            🌬️ Maximize Airflow: Our doors and windows are designed to open wide, allowing fresh air to circulate freely and keeping your space cool and comfortable.
            🌄 Uninterrupted Views: Enjoy stunning vistas with minimal obstruction, creating a seamless connection between your indoor and outdoor spaces.
            ✨ Sleek & Modern Design: Add a touch of sophistication to your home with our contemporary designs that complement any architectural style.
            🔒 Secure & Durable: Built with high-quality materials and advanced locking mechanisms, our doors and windows provide safety without compromising on aesthetics.
            🛠️ Customizable Options: Tailored to fit your unique needs, our openable systems are available in a variety of sizes, styles, and finishes.
            The Perfect Blend of Form and Function

            Openable doors and windows are more than just a practical addition – they’re a lifestyle upgrade. Whether it’s a folding door for your patio, a sliding window for your living room, or a casement window for your bedroom, our solutions are designed to enhance your home’s beauty and functionality.
          </p>

          <div style={{marginLeft:'2rem'}}>
            <Openable_Door_Swiper></Openable_Door_Swiper>
          </div>     
        </div>


        {/* --------OPENABLE DOORS AND WINDOWS------- */}
        <div style={{ textAlign: "left", paddingBottom:'2rem'  }}>
          <h2>
            <div style={{ display: "flex" }}>
              <div className={styles.circle}>8</div>{" "}
              <div className={styles.heading}>
              OPENABLE DOORS AND WINDOWS::
              </div>
            </div>
          </h2>
          <p className={styles.plpara}>
            Why Choose Openable Doors and Windows?

            🌬️ Maximize Airflow: Our doors and windows are designed to open wide, allowing fresh air to circulate freely and keeping your space cool and comfortable.
            🌄 Uninterrupted Views: Enjoy stunning vistas with minimal obstruction, creating a seamless connection between your indoor and outdoor spaces.
            ✨ Sleek & Modern Design: Add a touch of sophistication to your home with our contemporary designs that complement any architectural style.
            🔒 Secure & Durable: Built with high-quality materials and advanced locking mechanisms, our doors and windows provide safety without compromising on aesthetics.
            🛠️ Customizable Options: Tailored to fit your unique needs, our openable systems are available in a variety of sizes, styles, and finishes.
            The Perfect Blend of Form and Function

            Openable doors and windows are more than just a practical addition – they’re a lifestyle upgrade. Whether it’s a folding door for your patio, a sliding window for your living room, or a casement window for your bedroom, our solutions are designed to enhance your home’s beauty and functionality.
          </p>

          <div style={{marginLeft:'2rem'}}>
            <Openable_Window_Swiper></Openable_Window_Swiper>
          </div>     
        </div>

        {/* --------UPVS DOORS------- */}
        <div style={{ textAlign: "left", paddingBottom:'2rem'  }}>
          <h2>
            <div style={{ display: "flex" }}>
              <div className={styles.circle}>9</div>{" "}
              <div className={styles.heading}>
              UPVS DOORS:
              </div>
            </div>
          </h2>
          <p className={styles.plpara}>
            Why Choose UPVC Mosquito Doors and Windows?

            🦟 Total Mosquito Protection: Our tightly fitted mesh screens keep mosquitoes and other insects out, ensuring a safe and healthy environment for your family.
            🌬️ Uninterrupted Ventilation: Enjoy the cool breeze and fresh air without worrying about pests – our designs allow maximum airflow while keeping bugs at bay.
            ✨ Sleek & Modern Aesthetics: UPVC frames add a touch of elegance to your home, blending seamlessly with any decor style.
            💪 Durable & Low-Maintenance: Built to last, UPVC is resistant to weathering, corrosion, and wear, making it a cost-effective and long-lasting choice.
            🔒 Secure & Energy-Efficient: Our doors and windows come with advanced locking systems and excellent insulation properties, keeping your home safe and energy-efficient
            The Perfect Blend of Safety and Style
            UPVC mosquito doors and windows are more than just a practical solution – they’re a lifestyle upgrade. Whether it’s for your home, office, or commercial space, our products provide the perfect balance of protection, comfort, and visual appeal.
          </p>

          <div style={{marginLeft:'2rem'}}>
            <UPVS_Door></UPVS_Door>
          </div>  
        </div>

        {/* --------UPVS WINDOWS------- */}
        <div style={{ textAlign: "left", paddingBottom:'2rem'  }}>
          <h2>
            <div style={{ display: "flex" }}>
              <div className={styles.circle}>10</div>{" "}
              <div className={styles.heading}>
              UPVS WINDOWS:
              </div>
            </div>
          </h2>
          <p className={styles.plpara}>
            Why Choose UPVC Mosquito Doors and Windows?

            🦟 Total Mosquito Protection: Our tightly fitted mesh screens keep mosquitoes and other insects out, ensuring a safe and healthy environment for your family.
            🌬️ Uninterrupted Ventilation: Enjoy the cool breeze and fresh air without worrying about pests – our designs allow maximum airflow while keeping bugs at bay.
            ✨ Sleek & Modern Aesthetics: UPVC frames add a touch of elegance to your home, blending seamlessly with any decor style.
            💪 Durable & Low-Maintenance: Built to last, UPVC is resistant to weathering, corrosion, and wear, making it a cost-effective and long-lasting choice.
            🔒 Secure & Energy-Efficient: Our doors and windows come with advanced locking systems and excellent insulation properties, keeping your home safe and energy-efficient
            The Perfect Blend of Safety and Style
            UPVC mosquito doors and windows are more than just a practical solution – they’re a lifestyle upgrade. Whether it’s for your home, office, or commercial space, our products provide the perfect balance of protection, comfort, and visual appeal.
          </p>

          <div style={{marginLeft:'2rem'}}>
            <UPVS_Window></UPVS_Window>
          </div>  
        </div>

        
      </div>
    </>
  );
};

export default ProductContent;