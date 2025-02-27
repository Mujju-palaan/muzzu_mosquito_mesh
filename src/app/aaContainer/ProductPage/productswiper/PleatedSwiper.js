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

const PleatedSwiper = () => {
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
                Images="./blinds1.webp"
                // link="WeightLossPrograms"
            />
        </SwiperSlide>

        <SwiperSlide>
            <ProductSwiperCard 
                title="Cloth Hanger"
                Images="./cloth_hanger1.webp"
                // link="WeightLossPrograms"
            />
        </SwiperSlide>

        <SwiperSlide>
            <ProductSwiperCard 
                title="Grill Door Mesh"
                Images="./grill_door_mesh1.webp"
                // link="WeightLossPrograms"
            />
        </SwiperSlide>

        <SwiperSlide>
            <ProductSwiperCard 
                title="Invisible Grill"
                Images="./invisible_grill3.jpg"
                // link="WeightLossPrograms"
            />
        </SwiperSlide>

        <SwiperSlide>
            <ProductSwiperCard 
                title="Openable Door"
                Images="./openable_door1.webp"
                // link="WeightLossPrograms"
            />
        </SwiperSlide>

        <SwiperSlide>
            <ProductSwiperCard 
                title="Openable Window"
                Images="./openable_window5.webp"
                // link="WeightLossPrograms"
            />
        </SwiperSlide>

        <SwiperSlide>
            <ProductSwiperCard 
                title="Pleated Sliding Door"
                Images="./pleated_sliding_doors1.jpg"
                // link="WeightLossPrograms"
            />
        </SwiperSlide>

        <SwiperSlide>
            <ProductSwiperCard 
                title="Pleated Sliding Window"
                Images="./pleated_sliding_window2.jpg"
                // link="WeightLossPrograms"
            />
        </SwiperSlide>

        <SwiperSlide>
            <ProductSwiperCard 
                title="Velcro Mosquito Net"
                Images="./velcro_mosquito_net2.jpeg"
                // link="WeightLossPrograms"
            />
        </SwiperSlide>  
    </Swiper>
  )
}

export default PleatedSwiper