import Navigation from "../parts/Navigation";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section className="landing-page">
        <Navigation />
        <h2 className="hero-text">Where fashion gets easy.</h2>
      </section>
      <section className="description">
        <div className="description-headings">
          <h2 className="description-subheading">STYLE YOUR OUTFIT</h2>
          <h2 className="description-heading">Mix 'n match</h2>
        </div>

        <p>
          Be able to dress better with the clothes you have, avoid a frumpy look
          and learn how to mix and match your wardrobe! Check out our outfit
          generator and create a wardrobe at home that anyone would crave for!
        </p>
      </section>
      <section className="create-button-section">
        <h2>Not Sure Where To Start?</h2>
        <Link to="/surpriseme">
          <button className="create-outfit-button">GET STYLES INSPO!</button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
