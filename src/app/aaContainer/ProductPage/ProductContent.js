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
            <br></br>
            <p1 className={styles.plpara_key}>🔑 Key Features :</p1>
            <br></br>
            <p1 className={styles.plpara_key}>✔ Strong & Durable Material – </p1>
            Made from high-quality mesh fabric, ensuring maximum airflow while effectively keeping mosquitoes and pests out.
            <br></br>
            <p1 className={styles.plpara_key}>✔ Easy DIY Installation & Removal – </p1>
            The Velcro attachment system allows for quick and tool-free setup, making it easy to remove and clean whenever needed.
            <br></br>
            <p1 className={styles.plpara_key}>✔ Customizable & Versatile Fit – </p1>
            Suitable for windows, doors, and balconies, available in multiple sizes to fit different openings perfectly.
            <br></br>
            <p1 className={styles.plpara_key}>✔ Washable & Low Maintenance – </p1>
            Designed for long-term use, these mosquito nets are easy to clean and maintain, providing hygienic and reliable protection.           
          </p>
          <div className={styles.swiperr}>
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
            <br></br>
            <p1 className={styles.plpara_key}>🔑 Key Features :</p1>
            <br></br>
            <p1 className={styles.plpara_key}>✔ Versatile Designs - </p1>
            Available in premium materials like durable aluminum and elegant wood, perfectly complementing any décor.
            <br></br>
            <p1 className={styles.plpara_key}>✔ Light & Privacy Control - </p1>
            Easily adjust brightness while maintaining privacy for a cozy, stylish ambiance.
            <br></br>
            <p1 className={styles.plpara_key}>✔ Dust & Sun Protection - </p1>
            Acts as a shield against dust and harsh sunlight, keeping your space fresh and inviting.
          </p>

          <div className={styles.swiperr}>
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
            <br></br>
            <p1 className={styles.plpara_key}>🔑 Key Features :</p1>
            <br></br>
            <p1 className={styles.plpara_key}>✔ Durable & High-Quality Materials – </p1>
            Crafted with premium alloy 304 stainless steel and extruded aluminum corners, ensuring long-lasting strength and corrosion resistance.
            <br></br>
            <p1 className={styles.plpara_key}>✔ Smooth & Space-Saving Design – </p1>
            The foldable pleated mesh system allows for effortless sliding, making it perfect for compact areas while maintaining maximum airflow.
            <br></br>
            <p1 className={styles.plpara_key}>✔ Superior Insect Protection – </p1>
            Effectively blocks mosquitoes and other pests, keeping your home comfortable and bug-free.
            <br></br>
            <p1 className={styles.plpara_key}>✔ Easy Installation & Low Maintenance – </p1>
            Our expert team provides seamless installation, ensuring a perfect fit with minimal upkeep required.

          </p>
          <div className={styles.swiperr}>
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
            <br></br>
            <p1 className={styles.plpara_key}>🔑 Key Features :</p1>
            <br></br>
            <p1 className={styles.plpara_key}>✔ Premium-Quality Construction – </p1>
            Made with alloy 304 stainless steel and extruded aluminum corners, ensuring long-lasting strength, corrosion resistance, and durability.
            <br></br>
            <p1 className={styles.plpara_key}>✔ Effortless Sliding & Space-Saving Design – </p1>
            The foldable pleated mesh system allows for smooth operation, making it ideal for compact spaces without compromising airflow.
            <br></br>
            <p1 className={styles.plpara_key}>✔ Effective Insect Protection – </p1>
            Blocks mosquitoes and pests while allowing fresh air and natural light to flow into your home.
            <br></br>
            <p1 className={styles.plpara_key}>✔ Easy Installation & Low Maintenance – </p1>
            Our expert team ensures quick and precise installation, delivering a perfect fit with minimal upkeep.
          </p>
          <div className={styles.swiperr}>
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
            <br></br>
            <p1 className={styles.plpara_key}>🔑 Key Features :</p1>
            <br></br>
            <p1 className={styles.plpara_key}>✔ Strong & Durable Build - </p1>
            Made from high-quality materials, our grill doors provide superior strength and long-lasting security without compromising style.
            <br></br>
            <p1 className={styles.plpara_key}>✔ Insect Protection & Ventilation - </p1>
            The fine mesh ensures proper airflow while keeping mosquitoes and other pests out, maintaining a healthy indoor environment.
            <br></br>
            As a leading provider of mosquito mesh solutions, we guarantee premium quality products that offer maximum protection and durability for your home. Upgrade to a secure and pest-free space today!

          </p>

          <div className={styles.swiperr}>
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
            <br></br>
            <p1 className={styles.plpara_key}>🔑 Key Features :</p1>
            <br></br>
            <p1 className={styles.plpara_key}>K✔ High-Quality Material - </p1>
            Made from grade 316 austenitic stainless steel with enhanced corrosion resistance and a protective nylon coating, ensuring superior durability and strength.
            <br></br>
            <p1 className={styles.plpara_key}>✔ Unobstructed Views - </p1>
            Designed to maintain a clear, elegant aesthetic, allowing you to enjoy your balcony’s scenic beauty without visual obstruction.
            <br></br>
            <p1 className={styles.plpara_key}>✔ Customizable Installation - </p1>
            Available in 2”, 3”, and 4” cable distances, with flexible vertical or horizontal installation to suit your space and preferences.
            <br></br>
            <p1 className={styles.plpara_key}>✔ Child & Pet Safety - </p1>
            Provides a secure barrier to prevent accidental falls, ensuring a safe environment for your loved ones.
          </p>

          <div className={styles.swiperr}>
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
            <br></br>
            <p1 className={styles.plpara_key}>🔑 Key Features :</p1>
            <br></br>
            <p1 className={styles.plpara_key}>✔ Space-Saving & Sturdy Design - </p1>
            Made from high-quality materials, our cloth hangers provide strong support while optimizing closet space for a clutter-free environment.
            <br></br>
            <p1 className={styles.plpara_key}>✔ Anti-Slip & Gentle on Fabrics - </p1>
            Designed to prevent clothes from slipping or getting damaged, ensuring your garments stay in perfect shape.
            <br></br>
            As a trusted provider of mosquito mesh solutions, we also ensure top-quality home essentials that combine protection, style, and long-lasting durability. Upgrade your home with our premium products today!
            d closet starts with the right hangers. Whether you’re storing delicate silks, bulky coats, or everyday wear, our cloth hangers are designed to meet all your needs. Transform your closet into a tidy, stylish space that makes getting dressed a joy!

          </p>

          <div className={styles.swiperr}>
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
            <br></br>
            <p1 className={styles.plpara_key}>🔑 Key Features :</p1>
            <br></br>
            <p1 className={styles.plpara_key}>✔ Premium-Quality Material - </p1>
            Crafted from robust aluminum or stainless steel for long-lasting durability and resistance to wear and tear.
            <br></br>
            <p1 className={styles.plpara_key}>✔ Smooth & Effortless Operation - </p1>
            Designed with advanced hinge mechanisms for easy opening and closing, ensuring maximum convenience.
            <br></br>
            <p1 className={styles.plpara_key}>✔ Versatile Design Options - </p1>
            Available in multiple styles, finishes, and sizes to perfectly match your space and aesthetic preferences.
            <br></br>
            <p1 className={styles.plpara_key}>✔ Enhanced Security & Ventilation - </p1>
            Provides proper airflow while keeping your home safe, offering a blend of style and protection.

          </p>

          <div className={styles.swiperr}>
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
            <br></br>
            <p1 className={styles.plpara_key}>🔑 Key Features :</p1>
            <br></br>
            <p1 className={styles.plpara_key}>✔ Superior Durability - </p1>
            Made from high-quality aluminum or stainless steel, ensuring long-lasting strength and weather resistance.
            <br></br>
            <p1 className={styles.plpara_key}>✔ Smooth & Easy Operation - </p1>
            Designed with advanced hinge mechanisms for effortless opening and closing, providing convenience and comfort.
            <br></br>
            <p1 className={styles.plpara_key}>✔ Optimal Ventilation & Light Control - </p1>
            Enjoy fresh air and natural light while maintaining security and energy efficiency.
            <br></br>
            <p1 className={styles.plpara_key}>✔ Customizable Designs - </p1>
            Available in various sizes, styles, and finishes to perfectly complement your home’s architecture.

          </p>

          <div className={styles.swiperr}>
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
            <br></br>
            <p1 className={styles.plpara_key}>🔑 Key Features :</p1>
            <br></br>
            <p1 className={styles.plpara_key}>✔ Long-Lasting & Weather-Resistant – </p1>
            Made from premium UPVC material, these doors are waterproof, termite-proof, and resistant to corrosion, fading, and warping.
            <br></br>
            <p1 className={styles.plpara_key}>✔ Energy-Efficient & Soundproof – </p1>
            Designed with thermal insulation properties, UPVC doors help reduce energy costs while minimizing outside noise for a peaceful indoor environment.
            <br></br>
            <p1 className={styles.plpara_key}>✔ Secure & Low Maintenance – </p1>
            Equipped with multi-point locking systems, these doors provide enhanced security with minimal upkeep required.
            <br></br>
            <p1 className={styles.plpara_key}>✔ Customizable Designs – </p1>
            Available in various styles, colors, and finishes, ensuring a perfect match for your home’s aesthetics.

          </p>

          <div className={styles.swiperr}>
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
            <br></br>
            <p1 className={styles.plpara_key}>🔑 Key Features :</p1>
            <br></br>
            <p1 className={styles.plpara_key}>✔ Weather-Resistant & Long-Lasting – </p1>
            Made from premium UPVC material, these windows are waterproof, rust-proof, and resistant to fading, warping, and termites, ensuring long-term durability.
            <br></br>
            <p1 className={styles.plpara_key}>✔ Energy Efficiency & Sound Insulation – </p1>
            UPVC windows provide excellent thermal insulation, reducing energy costs while keeping your indoor space comfortable in all seasons. They also offer effective noise reduction for a peaceful environment.
            <br></br>
            <p1 className={styles.plpara_key}>✔ Low Maintenance & Secure – </p1>
            With multi-point locking systems, these windows enhance security, while their smooth surface requires minimal upkeep compared to traditional window materials.
            <br></br>
            <p1 className={styles.plpara_key}>✔ Customizable Designs & Styles – </p1>
            Available in various sizes, finishes, and styles, ensuring a perfect fit for your home’s architecture while enhancing its aesthetic appeal.

          </p>

          <div className={styles.swiperr}>
            <UPVC_Window></UPVC_Window>
          </div>  
        </div>

        
      </div>
    </>
  );
};

export default ProductContent;