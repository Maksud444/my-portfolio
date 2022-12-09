import React from 'react';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// import brands data
import { brands } from '../data';

const Brands = () => {
  return (
    <div className='bg-primary p-24'>
    <Swiper
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination]}
      className='mySwiper'
    >
      {brands.map((item, index) => {
        const {img,title} = item;
        return (
          <SwiperSlide key={index}>
            <div
              className='flex flex-col lg:flex-row gap-12 lg:gap-32'
              data-aos="fade-up"
              data-aos-anchor-placement="top-center" data-aos-duration="2000">
              <div
                className='w-48 h-48 lg:w-[328px] lg:h-[328px]'
              >
                <img className='rounded-2xl' src={img} alt='' />
              </div>
              
              <div
                className='flex flex-col max-w-3xl'
              >
                <h5 className='font-body text-3xl mt-5 text-center mb-8 italic font-normal'>
                  {title}
                </h5>
                <div>
                  <p className='text-lg text-accent'></p>
                  <p></p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  </div>
  );
};

export default Brands;
