import React, { useEffect, useState } from 'react';

// import components
import TestiSlider from './TestiSlider';

const Testimonials = () => {

  return (
    <section id='testimonials' className='section bg-secondary'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center' data-aos="fade-up"
          data-aos-anchor-placement="top-center" data-aos-duration="2000">
          <h2 className='section-title before:content-testimonials relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-64 before:hidden before:lg:block'>
            What other people say
          </h2>
          <p className='subtitle'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam
            labore nisium illum cupiditate reiciendis a numquam
          </p>
        </div>
        <TestiSlider />
      </div>
    </section>
  );
};

export default Testimonials;
