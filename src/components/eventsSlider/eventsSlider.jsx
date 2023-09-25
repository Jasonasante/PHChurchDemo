import React from "react";
import './eventsSlider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import ImageWithLoader from "../Image/image";
import Evangelism from "../../assets/street-preachers.png"

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
        <SwiperSlide><ImageWithLoader nme="" src={Evangelism} /></SwiperSlide>
        <SwiperSlide><ImageWithLoader nme="" src='https://www.teambath.com/wp-content/uploads/2022/12/Tri-tournament-2022-graphic-landscape-V2.jpg' /></SwiperSlide>
        <SwiperSlide><ImageWithLoader nme="" src='https://images.unsplash.com/photo-1486704155675-e4c07f8ad160?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJpZW5kcyUyMHRhbGtpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default EventsSlider