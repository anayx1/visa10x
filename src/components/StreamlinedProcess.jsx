import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import "./StreamlinedProcess.css";

import StreamLine1 from "../assets/images/png/streamline1.png";
import StreamLine2 from "../assets/images/png/streamline2.png";
import StreamLine3 from "../assets/images/png/streamline3.png";

const StreamlinedProcess = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: "01",
      title: "Guided Intake",
      description:
        "Applicants answer only what is relevant to their visa purpose through a structured flow.",
      icon: StreamLine1,
    },
    {
      number: "02",
      title: "Readiness & Review",
      description:
        "You receive a personalised document checklist, readiness indicators, and expert feedback to fix gaps.",
      icon: StreamLine2,
    },
    {
      number: "03",
      title: "Clear Submission Path",
      description:
        "Once prepared, application reaches a submission-ready state with clear timelines and expectations.",
      icon: StreamLine3,
    },
  ];

  return (
    <section className="streamlined-process" ref={ref}>
      <div className="process-container">
        <motion.div
          className="process-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="process-title">
            A simple,{" "}
            <span className="highlight-gold">streamlined process.</span>
          </h2>
          <div className="process-subtitle-box">
            <p className="process-subtitle">
              A clear easy 3-step process designed to make your visa journey
              efficient and stress-free.
            </p>
          </div>
        </motion.div>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="step-card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
            >
              <div className="step-icon-wrapper">
                <div className="step-icon">
                  <img src={step.icon} alt="Image" />
                </div>
              </div>
              <h3 className="step-number-title">
                <span className="step-number">{step.number}.</span> {step.title}
              </h3>
              <p className="step-description">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="process-footer"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="process-note">
            *Embassy decisions remain independent. Our role is preparation,
            clarity, and accuracy.
          </p>
          <button class="hero-btn">
            <span class="btn-text-wrap">
              <span class="text top">
                <span>S</span>
                <span>t</span>
                <span>a</span>
                <span>r</span>
                <span>t</span>
                <span>&nbsp;</span>
                <span>Y</span>
                <span>o</span>
                <span>u</span>
                <span>r</span>
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
                <span>S</span>
                <span>t</span>
                <span>a</span>
                <span>r</span>
                <span>t</span>
                <span>&nbsp;</span>
                <span>Y</span>
                <span>o</span>
                <span>u</span>
                <span>r</span>
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
      </div>
    </section>
  );
};

export default StreamlinedProcess;
