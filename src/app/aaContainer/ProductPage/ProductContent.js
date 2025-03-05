"use client";
import React from "react";
import styles from "./ProductContent.module.css";
import BlindsSwiper from './productswiper/BlindsSwiper'
import ClothHangerSwiper from './productswiper/ClothHangerSwiper'
import InvisibleGrillSwiper from './productswiper/InvisibleGrillSwiper'
import Openable_Door_Swiper from './productswiper/Openable_Door_Swiper'
import Openable_Window_Swiper from './productswiper/Openable_Window_Swiper'
import Pleated_Door_Swiper from './productswiper/Pleated_Door_Swiper'
import Pleated_Window_Swiper from './productswiper/Pleated_Window_Swiper'
import VelcroSwiper from './productswiper/VelcroSwiper'
import UPVC_Door from "./productswiper/UPVC_Door";
import UPVC_Window from './productswiper/UPVC_Window'
import Grill_Door from './productswiper/Grilldoor'




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
            Keep your home mosquito-free with Velcro mosquito nets, a convenient and cost-effective solution for blocking insects while allowing fresh air to circulate. Designed for easy installation and long-lasting durability, these nets provide seamless protection without compromising ventilation or visibility.
            
            Key Features:
            ✔ Strong & Durable Material – Made from high-quality mesh fabric, ensuring maximum airflow while effectively keeping mosquitoes and pests out.
            ✔ Easy DIY Installation & Removal – The Velcro attachment system allows for quick and tool-free setup, making it easy to remove and clean whenever needed.
            ✔ Customizable & Versatile Fit – Suitable for windows, doors, and balconies, available in multiple sizes to fit different openings perfectly.
            ✔ Washable & Low Maintenance – Designed for long-term use, these mosquito nets are easy to clean and maintain, providing hygienic and reliable protection.           
          </p>
          <div style={{marginLeft:'2rem'}}>
          <VelcroSwiper></VelcroSwiper>
          </div>
        </div>
        

        {/* --------Blinds------- */}
        <div style={{ textAlign: "left", paddingBottom:'2rem' }}>
          <h2>
            <span className={styles.circle}>2</span>{" "}
            <span className={styles.heading}>Blinds :</span>
          </h2>
          <p className={styles.plpara}>
            Blinds are an ideal choice for those looking to enhance their space with both elegance and practicality. Designed for effortless light and privacy control, they offer a sleek, modern aesthetic while ensuring a comfortable indoor environment.
            Features:
            ✔ Versatile Designs: Available in premium materials like durable aluminum and elegant wood, perfectly complementing any décor.
            ✔ Light & Privacy Control: Easily adjust brightness while maintaining privacy for a cozy, stylish ambiance.
            ✔ Dust & Sun Protection: Acts as a shield against dust and harsh sunlight, keeping your space fresh and inviting.
            Protect your home effortlessly with “Our Mosquito Mesh Blinds”—where simplicity meets safety!
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
            Upgrade your home with sleek and functional pleated sliding doors, designed for smooth operation, space efficiency, and superior insect protection. These modern doors provide a perfect blend of elegance and practicality, making them an ideal choice for any living space.
            
            Key Features:
            ✔ Durable & High-Quality Materials – Crafted with premium alloy 304 stainless steel and extruded aluminum corners, ensuring long-lasting strength and corrosion resistance.
            ✔ Smooth & Space-Saving Design – The foldable pleated mesh system allows for effortless sliding, making it perfect for compact areas while maintaining maximum airflow.
            ✔ Superior Insect Protection – Effectively blocks mosquitoes and other pests, keeping your home comfortable and bug-free.
            ✔ Easy Installation & Low Maintenance – Our expert team provides seamless installation, ensuring a perfect fit with minimal upkeep required.

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
            Enhance your home with sleek and functional pleated sliding windows, designed for smooth operation, optimal ventilation, and superior insect protection. These modern windows offer a perfect combination of style, durability, and practicality, making them ideal for any living or workspace.

            Key Features:
            ✔ Premium-Quality Construction – Made with alloy 304 stainless steel and extruded aluminum corners, ensuring long-lasting strength, corrosion resistance, and durability.
            ✔ Effortless Sliding & Space-Saving Design – The foldable pleated mesh system allows for smooth operation, making it ideal for compact spaces without compromising airflow.
            ✔ Effective Insect Protection – Blocks mosquitoes and pests while allowing fresh air and natural light to flow into your home.
            ✔ Easy Installation & Low Maintenance – Our expert team ensures quick and precise installation, delivering a perfect fit with minimal upkeep.
          </p>
          <div style={{marginLeft:'2rem'}}>
            <Pleated_Window_Swiper></Pleated_Window_Swiper>
          </div>   
        </div>


        {/* --------Grill_Door------- */}
        <div style={{ textAlign: "left", paddingBottom:'2rem'  }}>
          <h2>
            <div style={{ display: "flex" }}>
              <div className={styles.circle}>5</div>{" "}
              <div className={styles.heading}>Grill Door:</div>
            </div>
          </h2>
          <p className={styles.plpara}>
            A grill door with mesh is the perfect combination of security, ventilation, and protection against insects. Designed to enhance your home’s safety while allowing fresh air to circulate, it adds both functionality and aesthetic appeal to any space.

            Key Features:
            ✔ Strong & Durable Build: Made from high-quality materials, our grill doors provide superior strength and long-lasting security without compromising style.
            ✔ Insect Protection & Ventilation: The fine mesh ensures proper airflow while keeping mosquitoes and other pests out, maintaining a healthy indoor environment.
            As a leading provider of mosquito mesh solutions, we guarantee premium quality products that offer maximum protection and durability for your home. Upgrade to a secure and pest-free space today!

          </p>

          <div style={{marginLeft:'2rem'}}>
            <Grill_Door></Grill_Door>
          </div>
            
        </div>

        

        {/* --------INVISIBLE GRILL------- */}
        <div style={{ textAlign: "left", paddingBottom:'2rem'  }}>
          <h2>
            <div style={{ display: "flex" }}>
              <div className={styles.circle}>6</div>{" "}
              <div className={styles.heading}>INVISIBLE GRILL:</div>
            </div>
          </h2>
          <p className={styles.plpara}>
            Apartment living comes with its challenges, and safety is a top priority—especially for families with young children. Whether you live on the second floor or the thirty-first, securing your balcony is essential. Invisible Grills provide a durable, cost-effective, and aesthetically pleasing solution to keep your home safe without compromising your view.
            
            Key Features:
            ✔ High-Quality Material: Made from grade 316 austenitic stainless steel with enhanced corrosion resistance and a protective nylon coating, ensuring superior durability and strength.
            ✔ Unobstructed Views: Designed to maintain a clear, elegant aesthetic, allowing you to enjoy your balcony’s scenic beauty without visual obstruction.
            ✔ Customizable Installation: Available in 2”, 3”, and 4” cable distances, with flexible vertical or horizontal installation to suit your space and preferences.
            ✔ Child & Pet Safety: Provides a secure barrier to prevent accidental falls, ensuring a safe environment for your loved ones.
          </p>

          <div style={{marginLeft:'2rem'}}>
            <InvisibleGrillSwiper></InvisibleGrillSwiper>
          </div>
            
        </div>

        {/* --------CLOTH HANGERS------- */}
        <div style={{ textAlign: "left", paddingBottom:'2rem'  }}>
          <h2>
            <div style={{ display: "flex" }}>
              <div className={styles.circle}>7</div>{" "}
              <div className={styles.heading}>
              CLOTH HANGERS:
              </div>
            </div>
          </h2>
          <p className={styles.plpara}>
            A cloth hanger is an essential addition to any home, offering a stylish and practical solution for keeping clothes wrinkle-free and well-organized. Designed for durability and convenience, it helps maximize space while maintaining the elegance of your wardrobe.

            Key Features:
            ✔ Space-Saving & Sturdy Design: Made from high-quality materials, our cloth hangers provide strong support while optimizing closet space for a clutter-free environment.
            ✔ Anti-Slip & Gentle on Fabrics: Designed to prevent clothes from slipping or getting damaged, ensuring your garments stay in perfect shape.
            As a trusted provider of mosquito mesh solutions, we also ensure top-quality home essentials that combine protection, style, and long-lasting durability. Upgrade your home with our premium products today!
            d closet starts with the right hangers. Whether you’re storing delicate silks, bulky coats, or everyday wear, our cloth hangers are designed to meet all your needs. Transform your closet into a tidy, stylish space that makes getting dressed a joy!

          </p>

          <div style={{marginLeft:'2rem'}}>
            <ClothHangerSwiper></ClothHangerSwiper>
          </div>
            
        </div>

        {/* --------OPENABLE DOORS AND WINDOWS------- */}
        <div style={{ textAlign: "left", paddingBottom:'2rem'  }}>
          <h2>
            <div style={{ display: "flex" }}>
              <div className={styles.circle}>8</div>{" "}
              <div className={styles.heading}>
              OPENABLE DOORS :
              </div>
            </div>
          </h2>
          <p className={styles.plpara}>
            Enhance your home’s functionality and aesthetics with high-quality openable doors designed for durability, convenience, and modern appeal. Whether for residential or commercial spaces, these doors provide seamless operation, optimal ventilation, and enhanced security while complementing any interior or exterior design.

            Key Features:
            ✔ Premium-Quality Material: Crafted from robust aluminum or stainless steel for long-lasting durability and resistance to wear and tear.
            ✔ Smooth & Effortless Operation: Designed with advanced hinge mechanisms for easy opening and closing, ensuring maximum convenience.
            ✔ Versatile Design Options: Available in multiple styles, finishes, and sizes to perfectly match your space and aesthetic preferences.
            ✔ Enhanced Security & Ventilation: Provides proper airflow while keeping your home safe, offering a blend of style and protection.

          </p>

          <div style={{marginLeft:'2rem'}}>
            <Openable_Door_Swiper></Openable_Door_Swiper>
          </div>     
        </div>


        {/* --------OPENABLE WINDOWS------- */}
        <div style={{ textAlign: "left", paddingBottom:'2rem'  }}>
          <h2>
            <div style={{ display: "flex" }}>
              <div className={styles.circle}>9</div>{" "}
              <div className={styles.heading}>
              OPENABLE WINDOWS:
              </div>
            </div>
          </h2>
          <p className={styles.plpara}>
            Upgrade your home or office with premium openable windows, designed for maximum airflow, security, and aesthetic appeal. These windows offer a seamless blend of functionality and modern design, making them an ideal choice for any space.

            Key Features:
            ✔ Superior Durability: Made from high-quality aluminum or stainless steel, ensuring long-lasting strength and weather resistance.
            ✔ Smooth & Easy Operation: Designed with advanced hinge mechanisms for effortless opening and closing, providing convenience and comfort.
            ✔ Optimal Ventilation & Light Control: Enjoy fresh air and natural light while maintaining security and energy efficiency.
            ✔ Customizable Designs: Available in various sizes, styles, and finishes to perfectly complement your home’s architecture.

          </p>

          <div style={{marginLeft:'2rem'}}>
            <Openable_Window_Swiper></Openable_Window_Swiper>
          </div>     
        </div>

        {/* --------UPVS DOORS------- */}
        <div style={{ textAlign: "left", paddingBottom:'2rem'  }}>
          <h2>
            <div style={{ display: "flex" }}>
              <div className={styles.circle}>10</div>{" "}
              <div className={styles.heading}>
              UPVC DOORS:
              </div>
            </div>
          </h2>
          <p className={styles.plpara}>
            Upgrade your home with high-quality UPVC doors, designed for superior durability, security, and energy efficiency. These modern doors offer a sleek, weather-resistant, and low-maintenance solution, perfect for both residential and commercial spaces.

            Key Features:
            ✔ Long-Lasting & Weather-Resistant – Made from premium UPVC material, these doors are waterproof, termite-proof, and resistant to corrosion, fading, and warping.
            ✔ Energy-Efficient & Soundproof – Designed with thermal insulation properties, UPVC doors help reduce energy costs while minimizing outside noise for a peaceful indoor environment.
            ✔ Secure & Low Maintenance – Equipped with multi-point locking systems, these doors provide enhanced security with minimal upkeep required.
            ✔ Customizable Designs – Available in various styles, colors, and finishes, ensuring a perfect match for your home’s aesthetics.

          </p>

          <div style={{marginLeft:'2rem'}}>
            <UPVC_Door></UPVC_Door>
          </div>  
        </div>

        {/* --------UPVS WINDOWS------- */}
        <div style={{ textAlign: "left", paddingBottom:'2rem'  }}>
          <h2>
            <div style={{ display: "flex" }}>
              <div className={styles.circle}>11</div>{" "}
              <div className={styles.heading}>
              UPVC WINDOWS:
              </div>
            </div>
          </h2>
          <p className={styles.plpara}>
            Upgrade your home with high-quality UPVC windows, designed for superior insulation, durability, and modern aesthetics. These windows offer exceptional weather resistance, security, and energy efficiency, making them a perfect choice for any residential or commercial space.

            Key Features:
            ✔ Weather-Resistant & Long-Lasting – Made from premium UPVC material, these windows are waterproof, rust-proof, and resistant to fading, warping, and termites, ensuring long-term durability.
            ✔ Energy Efficiency & Sound Insulation – UPVC windows provide excellent thermal insulation, reducing energy costs while keeping your indoor space comfortable in all seasons. They also offer effective noise reduction for a peaceful environment.
            ✔ Low Maintenance & Secure – With multi-point locking systems, these windows enhance security, while their smooth surface requires minimal upkeep compared to traditional window materials.
            ✔ Customizable Designs & Styles – Available in various sizes, finishes, and styles, ensuring a perfect fit for your home’s architecture while enhancing its aesthetic appeal.

          </p>

          <div style={{marginLeft:'2rem'}}>
            <UPVC_Window></UPVC_Window>
          </div>  
        </div>

        
      </div>
    </>
  );
};

export default ProductContent;