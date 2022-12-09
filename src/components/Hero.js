import React from 'react';

// import woman image
import WomanImg from '../assets/img/20tkwsksksadfaskd;.png';
import resume from '../assets/img/Maksud Billah  (1).pdf';
import './Hero.css'

const Hero = () => {

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch(`${resume}`).then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = `${resume}`;
            alink.click();
        })
    })
  }
  return (
    <section
      id='home'
      className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full mb-6 mt-7'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start' data-aos="fade-up"
           data-aos-anchor-placement="center-bottom" data-aos-duration="2000">
            <h1 data-aos="fade-right" data-aos-anchor-placement="top-center" className='text-3xl leading-[34px] md:text-5xl md:leading-tight lg:text-5xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              Hi, I Am Maksud Billah 
            </h1>
            <h1 className='text-3xl text-accent leading-[44px] md:text-5xl md:leading-tight lg:text-6xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              I Am a Professional
            </h1>
            <h1 className='text-3xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
                Full Stack Web Developer.
            </h1>
            <button onClick={onButtonClick} className='btn btn-md bg-gradient-to-bl bg-accent transition-all'>
              Download Resume
            </button>
          </div>
          <div className='hidden lg:flex flex-1 justify-end items-end h-full' data-aos="fade-up"
           data-aos-anchor-placement="center-bottom" data-aos-duration="2000">
            <img className=' cover-img' src={WomanImg} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
