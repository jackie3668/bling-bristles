import React from 'react';
import "./css/About.css"
import star from '../component/assets/star_img.png'

const About = () => {
  return (
    <div className="about">
      <section className="about-section main">
        <div className="wavy-border">
        </div>
        <div className="main-container">
            <div className="about-section-header">
              <img src={star} alt="" />
              <h2>How Bling Bristles Was Started</h2>
              <img src={star} alt="" />
            </div>
          <p>
            Bling Bristles originated in New York City as a digital planner store founded by Jackie during graduate school. Transitioning to a press-on nail shop in 2022, the evolution was fueled by Jackie's passion for nails, affordability, and time-saving options. Obsessed with cute designs and seeking affordable yet stylish alternatives, Jackie ventured into press-on nails, sharing her joy and creativity with others. Bling Bristles, born from Jackie's personal journey, now offers budget-friendly, convenient, and aesthetically pleasing nail solutions to a diverse audience.
          </p>
        </div>
        <div className="wavy-border reverse">
        </div>
      </section>


      <section className="about-section value">
        <div className="wavy-border">
        </div>
        <div className="value-container">
          <div className="about-section-header">
            <img src={star} alt="" />
            <h2>How Bling Bristles Was Started</h2>
            <img src={star} alt="" />
          </div>
        <p>
          At Bling Bristles, we are passionate about providing affordable, trendy, and high-quality press-on nails.
          Our values reflect our commitment to delivering an exceptional customer experience and fostering an inclusive beauty community.
        </p>
        

          <div className="value">
            <h3>Affordable Nails</h3>
            <p>
              We believe that everyone deserves to express their style without breaking the bank.
              Our press-on nails are not only stylish but also affordable, allowing you to change your look whenever you want.
            </p>
          </div>

          <div className="value">
            <h3>Trendy Designs</h3>
            <p>
              Keeping up with the latest trends in nail art is at the core of what we do.
              Our team of talented nail artists creates trendy and fashionable designs that empower you to showcase your unique style.
            </p>
          </div>

          <div className="value">
            <h3>High-Quality Products</h3>
            <p>
              Quality is non-negotiable for us. We are committed to using top-notch materials to ensure our press-on nails are durable and long-lasting.
              Your satisfaction and confidence in our products are our top priorities.
            </p>
          </div>

          <div className="value">
            <h3>Inclusive Beauty Community</h3>
            <p>
              Bling Bristles is more than just a store; it's a community that celebrates diversity and individuality.
              We embrace beauty in all its forms and encourage everyone to express themselves authentically through our products.
            </p>
          </div>
        </div>
        <div className="wavy-border reverse">
        </div>
      </section>

      <section className="about-section team">
        <div className="wavy-border">
        </div>
        <div className="team-container">
          <div className="about-section-header">
            <img src={star} alt="" />
            <h2>Meet The Team</h2>
            <img src={star} alt="" />
          </div>

          <div className="team-member-container">
            <div className="team-member">
              <h3>Jackie S</h3>
              <p className='team-member-title'>Owner, Curator, Marketer</p>
              <p>Jackie started Bling Bristles in 2022, transforming it from a digital planner store.</p>
            </div>

            <div className="team-member">
              <h3>Liya</h3>
              <p className='team-member-title'>Nail Artist, Designer</p>
              <p>Liya, with over 13 years of experience, specializes in bling nails with intricate embellishments.</p>
            </div>

            <div className="team-member">
              <h3>Laurence W</h3>
              <p className='team-member-title'>Assistant Shop Owner, Customer Service, Therapist</p>
              <p>Laurence is the mastermind behind BlingBristles.com, providing support to Jackie and customers.</p>
            </div>

            <div className="team-member">
              <h3>Mimi</h3>
              <p className='team-member-title'>Nail Artist</p>
              <p>Mimi excels in creating ombre nail designs and loves chic and feminine styles.</p>
            </div>

            <div className="team-member">
              <h3>Botox</h3>
              <p className='team-member-title'>Cat, Mental Support</p>
              <p>Botox, the hairless sphynx cat, provides mental support and may or may not inspect your packages.</p>
            </div>

            <div className="team-member">
              <h3>Jess Z</h3>
              <p className='team-member-title'>Dispatcher, Assistant</p>
              <p>Jackie's cousin Jess manages domestic fulfillment and shipment in North America, ensuring careful packaging.</p>
            </div>
          </div>
          
        </div>
        <div className="wavy-border reverse">
        </div>
      </section>
    </div>
  );
};

export default About;
