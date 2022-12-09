import React from "react";
import { Link } from "react-scroll";

// import img
import Image from "../assets/img/my-cover.jpg";

const About = () => {
  return (
    <section className="section bg-secondary" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            src={Image}
            alt=""
          />
          <div
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-duration="2000"
          >
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Maksud Billah
              </h2>
              <p className="mb-4 text-accent">
                Front-end Web Developer & Designer
              </p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                ☛ I am Maksud Billah I am a full-stack web developer Expertise 
                /
                Skill Sets --------------------- ☛ Html Css Expert ☛ Javascript
                Expert ☛ Bootstrap coded responsive PSD to HTML/Bootstrap ☛
                Custom Javascript designed ☛ react js ☛ tailwind CSS ☛ Es6 ☛
                React Router Dom ☛ HTML, CSS. BOOTSTRAP, JAVASCRIPT, Debug
                Fixing. ☛ Node Mailer/Mailchimp/ Mailgun/ Get Response Email
                Platform Expert ☛ firebase Authentication ☛Context API, dev tool
                ☛Google Analytics ☛Node js ☛Express js ☛MongoDB database
                integration ☛JWT ☛Payment integration (Stripe, Paypal)
              </p>
            </div>
            <Link to="/Contact">
              <button className="btn btn-md bg-gradient-to-bl bg-accent transition-all">
                Contact me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
