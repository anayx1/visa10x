import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import "./SubmissionReady.css";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const SubmissionReady = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const countries = [
    "Schengen Countries",
    "Schengen Countries",
    "Schengen Countries",
    "Schengen Countries",
    "Schengen Countries",
    "Schengen Countries",
    "Schengen Countries",
    "Schengen Countries",
    "Schengen Countries",
  ];

  return (
    <section className="submission-ready" ref={ref}>
      <div className="submission-container">
        <motion.div className="submission-content">
          <motion.div className="submission-box">
            <motion.h2
              variants={{
                visible: { transition: { staggerChildren: 0.3 } }, // lines appear one after another
              }}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="submission-title"
            >
              <motion.span
                variants={textVariants}
                style={{ display: "block" }}
                className="highlight-navy"
              >
                Submission-ready
              </motion.span>
              <motion.span
                variants={textVariants}
                style={{ display: "block" }}
                className="highlight-gold"
              >
                applications <span className="highlight-gold">with</span>
              </motion.span>{" "}
              <motion.span
                variants={textVariants}
                style={{ display: "block" }}
                className="highlight-navy"
              >
                clear next <span className="highlight-gold">steps.</span>
              </motion.span>{" "}
            </motion.h2>

            <p className="submission-description">
              Your application is routed through a judgment-based validation
              layer, with clear status updates and next steps. The outcome: a
              checklist-compliant, submission-ready visa file prepared according
              to embassy standards.
            </p>

            <button class="hero-btn">
              <span class="btn-text-wrap">
                <span class="text top">
                  <span>V</span>
                  <span>i</span>
                  <span>e</span>
                  <span>w</span>
                  <span>&nbsp;</span>
                  <span>R</span>
                  <span>e</span>
                  <span>q</span>
                  <span>u</span>
                  <span>i</span>
                  <span>r</span>
                  <span>e</span>
                  <span>m</span>
                  <span>e</span>
                  <span>n</span>
                  <span>t</span>
                  <span>s</span>
                </span>

                <span class="text bottom">
                  <span>V</span>
                  <span>i</span>
                  <span>e</span>
                  <span>w</span>
                  <span>&nbsp;</span>
                  <span>R</span>
                  <span>e</span>
                  <span>q</span>
                  <span>u</span>
                  <span>i</span>
                  <span>r</span>
                  <span>e</span>
                  <span>m</span>
                  <span>e</span>
                  <span>n</span>
                  <span>t</span>
                  <span>s</span>
                </span>
              </span>
            </button>
          </motion.div>
        </motion.div>

      <div className="submission-list">
  <div className="country-list cube-list">
    {countries.map((country, index) => (
      <div
        key={index}
        className="cube-wrap"
        style={{ "--i": index }}
      >
        <div className="cube-body">
          <div className="cube-face cube-front">{country}</div>
          <div className="cube-face cube-right">Australia</div>
          <div className="cube-face cube-back">United States</div>
          <div className="cube-face cube-left">Canada</div>
        </div>
      </div>
    ))}
  </div>

        </div>  
      </div>
    </section>
  );
};

export default SubmissionReady;
