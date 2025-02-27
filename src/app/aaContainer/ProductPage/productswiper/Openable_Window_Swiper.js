'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import './Swiperpro.css';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
import ProductSwiperCard from '../../../../../components/product/ProductSwiperCard'
import { delay } from "framer-motion";

const Openable_Window_Swiper = () => {
  return (
    <Swiper 
        // install Swiper modules
        breakpoints={{
          0: {
            // width: 400,
            slidesPerView: 1,
            centeredSlides: true
          },
          400: {
            // width: 400,
            slidesPerView: 1,
          },
          639: {
            // width: 639,
            slidesPerView: 2,
          },
          865: {
            // width: 865,
            slidesPerView: 3,
          },
          1000: {
            // width: 1000,
            slidesPerView: 3,
          },
          1500: {
            // width: 1500,
            slidesPerView: 4,
          },
          1700: {
            // width: 1700,
            slidesPerView: 3,
          },
        }}
        scrollbar={{ draggable: true }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={0}
          style={{ overflow: "hidden"}}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={3}
          watchOverflow={"none"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 30,
            modifier: 1,
            watchOverflow: "visible",
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="swiper_container"
        >
      
        <SwiperSlide style={{paddingBottom:'1rem'}}>
            <ProductSwiperCard 
                title="Blinds"
                Images="./product_images/Openable Windows/Openable Windows1.jpg"
                // link="WeightLossPrograms"
            />
        </SwiperSlide>

        <SwiperSlide>
            <ProductSwiperCard 
                title="Cloth Hanger"
                Images="./product_images/Openable Windows/Openable Windows2.webp"
                // link="WeightLossPrograms"
            />
        </SwiperSlide>

        <SwiperSlide>
            <ProductSwiperCard 
                title="Grill Door Mesh"
                Images="./product_images/Openable Windows/Openable Windows3.jpg"
                // link="WeightLossPrograms"
            />
        </SwiperSlide>

        <SwiperSlide>
            <ProductSwiperCard 
                title="Invisible Grill"
                Images="./product_images/Openable Windows/Openable Windows4.webp"
                // link="WeightLossPrograms"
            />
        </SwiperSlide>

        <SwiperSlide>
            <ProductSwiperCard 
                title="Openable Door"
                Images="./product_images/Openable Windows/Openable Windows5.webp"
                // link="WeightLossPrograms"
            />
        </SwiperSlide>

        <SwiperSlide>
            <ProductSwiperCard 
                title="Openable Window"
                Images="./product_images/Openable Windows/Openable Windows6.webp"
                // link="WeightLossPrograms"
            />
        </SwiperSlide>

        <SwiperSlide>
            <ProductSwiperCard 
                title="Pleated Sliding Door"
                Images="./product_images/Openable Windows/Openable Windows7.jpg"
                // link="WeightLossPrograms"
            />
        </SwiperSlide>

        <SwiperSlide>
            <ProductSwiperCard 
                title="Pleated Sliding Window"
                Images="./product_images/Openable Windows/Openable Windows8.jpg"
                // link="WeightLossPrograms"
            />
        </SwiperSlide>

        <SwiperSlide>
            <ProductSwiperCard 
                title="Velcro Mosquito Net"
                Images="./product_images/Openable Windows/Openable Windows9.webp"
                // link="WeightLossPrograms"
            />
        </SwiperSlide>  

        <SwiperSlide>
            <ProductSwiperCard 
                title="Velcro Mosquito Net"
                Images="./product_images/Openable Windows/Openable Windows10.webp"
                // link="WeightLossPrograms"
            />
        </SwiperSlide>  
    </Swiper>
  )
}

export default Openable_Window_Swiper