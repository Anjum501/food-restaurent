import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import img1 from '../../../assets/home/slide1.jpg';
import img2 from '../../../assets/home/slide2.jpg';
import img3 from '../../../assets/home/slide3.jpg';
import img4 from '../../../assets/home/slide4.jpg';
import img5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';



const Catagory = () => {
    return (
       <section>
       <SectionTitle subheading={"from 11 am to 9 pm"}
       heading={"Order online"}
     
       >
       
       </SectionTitle>
        
         <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-11 "
      >
        <SwiperSlide><img src={img1}  /></SwiperSlide>
        <SwiperSlide><img src={img2}  /></SwiperSlide>
        <SwiperSlide><img src={img3}  /></SwiperSlide>
        <SwiperSlide><img src={img4}  /></SwiperSlide>
        <SwiperSlide><img src={img5}  /></SwiperSlide>
    
      </Swiper>
       </section>
    );
};

export default Catagory;