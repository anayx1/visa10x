import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import passportVideo from "../assets/images/videos/passport.mp4";
import "./PassportGuidance.css";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const PassportGuidance = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    "Passport renewal preparation",
    "Lost or damaged passport documentation guidance",
    "Passport validity, expiry, and compliance readiness",
  ];

  return (
    <section className="passport-guidance" ref={ref} id="passport">
      <div className="passport-container">
        <motion.div className="passport-content">
          <motion.div className="passport-box">
            <motion.h2
              variants={{
                visible: { transition: { staggerChildren: 0.3 } }, // lines appear one after another
              }}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="passport-title"
            >
              <motion.span
                variants={textVariants}
                style={{ display: "block" }}
                className="title-navy"
              >
                Passport
              </motion.span>
              <motion.span
                variants={textVariants}
                style={{ display: "block" }}
                className="title-gold"
              >
                application guidance.
              </motion.span>
            </motion.h2>

            <p className="passport-description">
              TenXvisa provides a guided approach to passport application
              preparation, helping individuals understand documentation
              requirements, identify gaps, and prepare submission-ready files.
              The platform focuses on accuracy, checklist compliance, and
              readiness — reducing confusion and last-minute rework.
            </p>

            <div className="services-list">
              <h3 className="services-heading">
                <span className="bullet-icon">●</span> Services Covered:
              </h3>
              <ol className="services-ordered">
                {services.map((service, index) => (
                  <motion.li key={index}>{service}</motion.li>
                ))}
              </ol>
            </div>

            <button class="hero-btn min-width">
              <span class="btn-text-wrap">
                <span class="text top">
                  <span>P</span>
                  <span>r</span>
                  <span>e</span>
                  <span>p</span>
                  <span>a</span>
                  <span>r</span>
                  <span>e</span>
                  <span>&nbsp;</span>
                  <span>P</span>
                  <span>a</span>
                  <span>s</span>
                  <span>s</span>
                  <span>p</span>
                  <span>o</span>
                  <span>r</span>
                  <span>t</span>
                  <span>&nbsp;</span>
                  <span>A</span>
                  <span>p</span>
                  <span>p</span>
                  <span>l</span>
                  <span>i</span>
                  <span>c</span>
                  <span>a</span>
                  <span>t</span>
                  <span>i</span>
                  <span>o</span>
                  <span>n</span>
                </span>

                <span class="text bottom">
                  <span>P</span>
                  <span>r</span>
                  <span>e</span>
                  <span>p</span>
                  <span>a</span>
                  <span>r</span>
                  <span>e</span>
                  <span>&nbsp;</span>
                  <span>P</span>
                  <span>a</span>
                  <span>s</span>
                  <span>s</span>
                  <span>p</span>
                  <span>o</span>
                  <span>r</span>
                  <span>t</span>
                  <span>&nbsp;</span>
                  <span>A</span>
                  <span>p</span>
                  <span>p</span>
                  <span>l</span>
                  <span>i</span>
                  <span>c</span>
                  <span>a</span>
                  <span>t</span>
                  <span>i</span>
                  <span>o</span>
                  <span>n</span>
                </span>
              </span>
            </button>
          </motion.div>
        </motion.div>

        <motion.div className="passport-image">
          <div className="passport-visual">
            <video
              src={passportVideo}
              autoPlay
              loop
              muted
              playsInline
              className="passport-video"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PassportGuidance;
