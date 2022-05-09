import React from "react";
import './index.css'

const About = () => {
  return (
    <section id="about" className="section about_section">
      <div className="about_cta">
        <article className="about_details">
          <div className="about-subhead">
            <h4>Frontend Developer </h4>
          </div>
          <div className="about_desc">
            <h2 className="about_head">About Me</h2>
            <p className="about_para">
              I am a self taught programmer who want to build a career as Front
              End Developer with opportunities for career growth. Possess the
              understanding of HTML, SASS, ES6, React, UI design. i am looking
              forward to contribute knowledge and skills that offers a genuine
              opportunity for career progression.
            </p>
          </div>
        </article>
        <div className="about_photo">
          <img src="./img/profile.jpg" alt="" className="about-img" />
        </div>
      </div>
    </section>
  );
};

export default About;
