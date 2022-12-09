import React from 'react';

// import components
import Projects from './Projects';

const Portfolio = () => {
  return (
    <section id='portfolio' className='section bg-primary min-h-[1400px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center' data-aos="fade-up"
          data-aos-anchor-placement="top-center" data-aos-duration="2000">
          <h2 className='section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
            My latest work
          </h2>
          <p className='subtitle'>
          These are my most recent work, most of the projects have discovered many technologies. react, nodejs, mongodb
          </p>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
