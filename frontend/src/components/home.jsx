import React from "react";
import Header from "./header";
import Footer from "./footer";
import img498 from "../assets/img498.jpg";
import img499 from "../assets/img499.png";

const Home = () => {
  return (
    <div>
      <Header />
      <section>
        <div className="hero-dekstop">
          <div className="home-coverImg">
            <div className="frame497">
              <p>
                We crush your competitors, goals, and sales records - without
                the B.S.
              </p>
              <button>Get free consultation</button>
            </div>
          </div>
        </div>

        <div className="hero-mobile">
          <div className="home-coverImg"></div>
          <div className="frame497">
            <p>
              We crush your competitors, goals, and sales records - without the
              B.S.
            </p>
            <button>Get free consultation</button>
          </div>
        </div>

        <div className="frame-498">
          <img src={img498} />
          <div className="frame-92">
            <h3>Web & Mobile App Development</h3>
            <p>
              Your web and mobile Apps are pieces of the puzzle to grow your
              business. We use frameworks which tailor content and engagement
              methods to respond to different intents shown by your potential
              customers who interact with your business online.
            </p>
            <button>LEARN MORE</button>
          </div>
        </div>

        <div className="frame-499">
          <div className="frame-92" id="frame-92-detail">
            <h3>Digital Strategy Consulting</h3>
            <p>
              Your digital strategy should complement the overall marketing
              strategy of the company. In online marketing, each component will
              never work in isolation and every business needs a different mix.
              We provide a clear concept and strategic overview to find the most
              efficient model for your business.
            </p>
            <button>LEARN MORE</button>
          </div>
          <img src={img499} id="frame-92-img" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
