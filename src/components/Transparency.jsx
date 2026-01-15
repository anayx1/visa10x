import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import "./Transparency.css";

import Circle1 from "../assets/images/svg/circle1.svg";
import Circle2 from "../assets/images/svg/circle2.svg";
import Circle3 from "../assets/images/png/circle3.png";
import Circle4 from "../assets/images/svg/circle4.svg";
import Circle5 from "../assets/images/svg/circle5.svg";
import Circle6 from "../assets/images/svg/circle6.svg";
import Circle7 from "../assets/images/svg/circle7.svg";
import Circle8 from "../assets/images/svg/circle8.svg";
import Circle9 from "../assets/images/svg/circle9.svg";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Transparency = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const countries = [
    { flag: Circle1 },
    { flag: Circle2 },
    { flag: Circle3 },
    { flag: Circle4 },
    { flag: Circle5 },
    { flag: Circle6 },
    { flag: Circle7 },
    { flag: Circle8 },
    { flag: Circle9 },
  ];

  return (
    <section className="transparency" ref={ref}>
      <div className="transparency-container">
        <motion.div className="transparency-content">
          <div className="transparency-box">
            <motion.h2
              variants={{
                visible: { transition: { staggerChildren: 0.3 } }, // lines appear one after another
              }}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="transparency-title"
            >
              <motion.span
                variants={textVariants}
                style={{ display: "block" }}
                className="title-white"
              >
                Transparency
              </motion.span>
              <motion.span variants={textVariants} style={{ display: "block" }}>
                <span className="title-gold">&</span>
                <span className="title-white">Boundaries</span>
              </motion.span>
            </motion.h2>

            <p className="transparency-description">
              TenXvisa operates with clear, defined boundaries. Our role is to
              prepare applications with accuracy, structure, and checklist
              compliance — not to influence outcomes or make promises beyond our
              control.
            </p>

            <p className="transparency-note">
              *Prepared applications reduce risk. They do not eliminate it.
            </p>
          </div>
        </motion.div>

        <div className="animation-container">
          <div className="animation">
            <div className="big-circle">
              {countries.map((country, index) => (
                <div
                  key={index}
                  className={`flag-image icon-block icon-${index + 1}`}
                >
                  <img src={country.flag} alt="Flag" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transparency;
