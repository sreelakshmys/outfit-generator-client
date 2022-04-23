import React from "react";
import Navigation from "../parts/Navigation";
import { Icon } from "@iconify/react";

const Contact = () => {
  return (
    <section className="contact-section">
      <div>
        <Navigation />
        <h2 className="contact-heading">Contact.</h2>
      </div>
      <div className="contact-content">
        <p>Stay connected with the team!</p>
        <p>
          <a
            href="http://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              className="socials"
              icon="ant-design:facebook-filled"
              color="black"
            />
          </a>
          <a
            href="http://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              className="socials"
              icon="brandico:twitter-bird"
              color="black"
            />
          </a>
          <a
            href="http://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              className="socials"
              icon="fa6-brands:instagram-square"
              color="black"
            />
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
