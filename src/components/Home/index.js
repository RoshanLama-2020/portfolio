import React, { useEffect, useState } from "react";
import "./index.css";
import ReactTypingEffect from "react-typing-effect";



const Home = () => {
    
  return (
    <div id="hero" className="section hero_section">
      <header className="hero_section-center">
        <h1 className="hero_section-heading">
          Hi, I'm Roshan web developer.
        </h1>
        <h4 className="hero_section-subhead">
          Figma / HTML / CSS / Javascript / React
        </h4>
        <button className="hero_section-button">
          <a href="contact">Contact Me</a>{" "}
        </button>
      </header>
      <div className="hero_section-side">
        <ReactTypingEffect
          text={["Eat.", "Code.", "Sleep."]}
          cursorRenderer={(cursor) => <h1>{cursor}</h1>}
          displayTextRenderer={(text, i) => {
            return (
              <h1>
                {text.split("").map((char, i) => {
                  const key = `${i}`;
                  return (
                    <span key={key} style={{ color: "#188731" }}>
                      {char}
                    </span>
                  );
                })}
              </h1>
            );
          }}
        />
      </div>
    </div>
  );
};

export default Home;
