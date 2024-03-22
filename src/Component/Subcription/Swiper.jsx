import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Navigation} from 'swiper/modules'
// Import  styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
export default () => {
  return (
    <Swiper
    modules={[Navigation, Autoplay]}
      spaceBetween={0}
      navigation
      autoplay
      slidesPerView={1}
      loop={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src="./images/books-pic/1.png" alt="" data-aos="zoom-in" /></SwiperSlide>
      <SwiperSlide><img src="./images/books-pic/2.png" alt="" data-aos="zoom-in" /></SwiperSlide>
      <SwiperSlide><img src="./images/books-pic/3.png" alt="" data-aos="zoom-in" /></SwiperSlide>
      <SwiperSlide><img src="./images/books-pic/4.png" alt="" data-aos="zoom-in" /></SwiperSlide>
      ...
    </Swiper>
  );
};