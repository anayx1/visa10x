import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import "./StructuredGuidance.css";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const StructuredGuidance = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="structured-guidance" ref={ref}>
      <div className="structured-container">
        <motion.div className="structured-image">
          <div className="structured-image-wrapper">
            <img
              src="/src/assets/images/png/structured-guidance-man.png"
              alt="Structured Guidance Consultant"
              className="structured-guidance-img"
            />
          </div>
        </motion.div>

        <motion.div className="structured-content">
          <motion.h2
            className="structured-title"
            variants={{
              visible: { transition: { staggerChildren: 0.3 } }, // lines appear one after another
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.span variants={textVariants} style={{ display: "block" }}>
              Structured <span className="highlight-gold">guidance</span>
            </motion.span>

            <motion.span variants={textVariants} style={{ display: "block" }}>
              that eliminates
            </motion.span>

            <motion.span variants={textVariants} style={{ display: "block" }}>
              <span className="highlight-gold">guesswork.</span>
            </motion.span>
          </motion.h2>

          <p className="structured-description">
            TenXvisa does not rely on memory, assumptions, or verbal advice. It
            turns your visa intent into a structured, guided application flow,
            generating country- and category-specific document checklists while
            flagging gaps, inconsistencies, and missing inputs.
          </p>

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
        </motion.div>
      </div>
    </section>
  );
};

export default StructuredGuidance;
