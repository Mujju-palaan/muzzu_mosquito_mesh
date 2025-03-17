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
import UPVC_Doors from '../../../Data/product/UPVC_Door.json'

const UPVC_Door = () => {
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
            delay: 1200,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
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
      
      {/* ------------ UPVC_Doors ---------------- */}
      {
        UPVC_Doors.map( data => {
          return(
            <SwiperSlide key={data.id}>
              <ProductSwiperCard 
                // key={data.id}
                Images={data.Image}
              />
            </SwiperSlide>
          )
        })
      }
      {/* ------------ UPVC_Doors ---------------- */}
        
    </Swiper>
  )
}

export default UPVC_Door