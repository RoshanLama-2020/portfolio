import React, { useRef } from "react";
import "./index.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { VscCallIncoming } from "react-icons/vsc";
import { AiOutlineMail } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdSubject } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import emailjs from "@emailjs/browser";

const Contact = () => {
   const form = useRef();

   const sendEmail = (e) => {
     e.preventDefault();

     emailjs
       .sendForm(
         "service_kxmj981",
         "template_7g1783o",
         form.current,
         "k0iicYbCfP2vFFFml"
       )
       .then(
         (result) => {
           console.log(result.text);
         },
         (error) => {
           console.log(error.text);
         }
       );
   };
  return (
    <section id="contact" className="section contact_section">
      <div className="contact_cta">
        <article className="contact_details">
          <div className="contact-subhead">
            <h4>My Contact</h4>
          </div>
          <div className="contact_desc">
            <h2 className="contact_head">
              Have any work? <br /> Please drop a message
            </h2>
            <div>
              <h4 className="contact_minihead">
                Get in touch and let me know how can i help.
              </h4>
              <div className="contact_details">
                <HiOutlineLocationMarker className="contact_details-icon" />

                <div className="contact_detail">
                  <h4 className="contact_detail-heading">Address</h4>
                  <a
                    href="https://goo.gl/maps/2U56cRkkcqKMKvFU9"
                    className="contact_detail-para"
                  >
                    Madhyapur Thimi, Bhaktapur
                  </a>
                </div>
              </div>
              <div className="contact_details">
                <VscCallIncoming className="contact_details-icon" />

                <div className="contact_detail">
                  <h4 className="contact_detail-heading">Phone</h4>
                  <a href="tel:+9779818677927" className="contact_detail-para">
                    +977 9818677927
                  </a>
                </div>
              </div>
              <div className="contact_details">
                <AiOutlineMail className="contact_details-icon" />

                <div className="contact_detail">
                  <h4 className="contact_detail-heading">Email</h4>
                  <a
                    href="mailto: lama.roshanap@gmail.com"
                    className="contact_detail-para"
                  >
                    lama.roshanap@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
        <form ref={form} onSubmit={sendEmail} className="contact_form">
          <div className="form_label">
            <label htmlFor="">
              {" "}
              <h4>Name</h4>
            </label>
            <div className="form_input">
              <CgProfile className="form_input-icon" />
              <input
                type="text"
                name="name"
                className="form_input-text"
                placeholder="e.g. Roshan Lama"
              />
            </div>
          </div>
          <div className="form_label">
            <label htmlFor="">
              {" "}
              <h4>Email</h4>
            </label>
            <div className="form_input">
              <AiOutlineMail className="form_input-icon" />
              <input
                type="email"
                name="email"
                className="form_input-text"
                placeholder="e.g. lama.roshanap@gmail.com"
              />
            </div>
          </div>
          <div className="form_label">
            <label htmlFor="">
              {" "}
              <h4>Subject</h4>
            </label>
            <div className="form_input">
              <MdSubject className="form_input-icon" />
              <input
                type="text"
                name="subject"
                className="form_input-text"
                placeholder="e.g. enter your subject here"
              />
            </div>
          </div>
          <div className="form_label">
            <label htmlFor="">
              {" "}
              <h4>Message</h4>
            </label>
            <div className="form_input">
              <AiOutlineMessage className="form_input-icon" />
              <textarea
                name="message"
                id=""
                className="form_input-textarea"
                placeholder="enter your message here ..."
              ></textarea>
            </div>
          </div>
          <button className="form_button">
            <input type="submit" value="Send" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
