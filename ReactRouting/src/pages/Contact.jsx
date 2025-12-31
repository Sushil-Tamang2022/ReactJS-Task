import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact-container">
      <div className="main">
        <h1>Contact Us</h1>
        <div className="contact-con">
          <div className="inputf">
            <input placeholder="Name" type="text"/>
          </div>
          <div id="s" className="inputf">
            <input placeholder="Email" type="email"/>
          </div>
        </div>
        <div className="tc">
          <textarea placeholder="Messaage" className="ta"></textarea>
        </div>
        <div>
          <button className="btn">Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
