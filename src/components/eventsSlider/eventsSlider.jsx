import React from "react";
import './eventsSlider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import ImageWithLoader from "../Image/image";


const EventsSlider = () => {
    return (
        <div className="events-slider">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><ImageWithLoader src='https://images.squarespace-cdn.com/content/v1/5d0b4af48825300001f6e9c6/1585695487747-A7RCU5VEZTT5S81JZ3KZ/HERO+BANNERS.jpg?format=1000w' /></SwiperSlide>
                <SwiperSlide><ImageWithLoader src='https://images.squarespace-cdn.com/content/v1/5d0b4af48825300001f6e9c6/1585696890726-E81ZVHCT62OY47JL1OJ3/HERO+BANNERS4.jpg?format=1000w' /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default EventsSlider