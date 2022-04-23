import React from "react";
import Navigation from "../parts/Navigation";

const About = () => {
  return (
    <section className="about-section">
      <div>
        <Navigation />
        <h2 className="about-heading">About.</h2>
      </div>
      <div className="about-content">
        <p>
          Be able to dress better with the clothes you have, avoid a frumpy look
          and learn how to mix and match your wardrobe! Click and mix the
          outfits and create a wardrobe at home that anyone crave for! This app
          helps you to select different outfits and accessories from the latest
          and trendy collections of New Yorker.
        </p>

        <p>
          Mix, match and build a functional wardrobe, creative ways to get more
          wear out of their clothes, and feel more confident in their style!
        </p>
      </div>
    </section>
  );
};

export default About;
