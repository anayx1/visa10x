import Hero1 from "../assets/images/jpg/hero1.jpg";
import Hero2 from "../assets/images/jpg/hero2.jpg";
import Hero3 from "../assets/images/jpg/hero3.jpg";
import Hero4 from "../assets/images/jpg/hero4.jpg";

const HeroSection = () => {
  return (
    <section className="hero-container">
      <div className="hero-main-box">
        <div className="hero-content-main-box">
          <div className="hero-content-box">
            <h1 className="hero-content-first">
              TenXvisa — Visa Application Guidance,
            </h1>
            <h1 className="hero-content-first">Re-engineered.</h1>
          </div>

          <div className="hero-lower-box">
            <p className="apply-text">Apply for a visa in 3 easy steps!</p>
            <button className="hero-btn" sx={{ width: "200px" }}>

              <button class="hero-btn">
                <span class="btn-text-wrap">
                  <span class="text top">
                    <span>S</span>
                    <span>e</span>
                    <span>e</span>
                    <span>&nbsp;</span>
                    <span>H</span>
                    <span>o</span>
                    <span>w</span>
                    <span>&nbsp;</span>
                    <span>I</span>
                    <span>t</span>
                    <span>&nbsp;</span>
                    <span>W</span>
                    <span>o</span>
                    <span>r</span>
                    <span>k</span>
                    <span>s</span>
                  </span>

                  <span class="text bottom">
                    <span>S</span>
                    <span>e</span>
                    <span>e</span>
                    <span>&nbsp;</span>
                    <span>H</span>
                    <span>o</span>
                    <span>w</span>
                    <span>&nbsp;</span>
                    <span>I</span>
                    <span>t</span>
                    <span>&nbsp;</span>
                    <span>W</span>
                    <span>o</span>
                    <span>r</span>
                    <span>k</span>
                    <span>s</span>
                  </span>
                </span>
              </button>
            </button>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-avatars">
            <div className="avatar">
              <img src={Hero1} alt="" />
            </div>
            <div className="avatar">
              <img src={Hero2} alt="" />
            </div>
            <div className="avatar">
              <img src={Hero3} alt="" />
            </div>
            <div className="avatar">
              <img src={Hero4} alt="" />
            </div>
          </div>
          <div className="stat-text">
            <p className="stat-number-text">
              30k applications handled globally
            </p>
            <div className="stat-rating">
              <span>⭐⭐⭐⭐⭐</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
