import React, {useState} from "react";
import "./index.css";
import {
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineLinkedin,
  AiFillGithub
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BsBarChartLine, BsFacebook } from "react-icons/bs";

const Sidebar = () => {
  return (
    <>
      <header className="nav-bar">
        <div className="logo">
          <h5 className="logo-text">R</h5>
        </div>
        <ul className="nav-links">
          <li className="nav-link">
            <a href="/">
              <AiOutlineHome className="nav-link-icon" />
            </a>
          </li>
          <li className="nav-link">
            <a href="about">
              <CgProfile />
            </a>
          </li>
          <li className="nav-link">
            <a href="skill">
              <BsBarChartLine />
            </a>
          </li>
          <li className="nav-link">
            <a href="contact">
              <AiOutlineMail />
            </a>
          </li>
        </ul>
        <ul className="social-links">
          <li className="social-link">
            <a href="https://www.facebook.com/roshan.lama.39501789">
              <BsFacebook />
            </a>
          </li>
          <li className="social-link">
            <a href="https://www.linkedin.com/in/roshan-lama-0a78071b4/">
              <AiOutlineLinkedin />
            </a>
          </li>
          <li className="social-link">
            <a href="https://github.com/RoshanLama-2020">
              <AiFillGithub />
            </a>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Sidebar;
