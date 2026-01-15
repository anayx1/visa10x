import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "../common/CountUp";

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      number: "20",
      suffix: "+",
      title: "Years of Visa & Passport Experience",
      description:
        "Decades of hands-on case handling across multiple countries and visa categories.",
    },
    {
      number: "15",
      suffix: "+",
      title: "Global Immigration Routes",
      description:
        "Coverage across major international destinations, introduced in phased rollouts.",
    },
    {
      number: "300",
      suffix: "+",
      title: "Application Failure Checks",
      description:
        "Common documentation and consistency gaps mapped into system-driven validation flows.",
    },
    {
      number: "100",
      suffix: "%",
      title: "Checklist-Based Preparation",
      description:
        "Every application is prepared against documented embassy checklist standards before submission.",
    },
  ];

  return (
    <section className="stats" ref={ref}>
      <div className="stats-container">
        <motion.div
          className="stats-header"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: { transition: { staggerChildren: 0.3 } }, // each line appears after 0.3s
          }}
        >
          <motion.div
            className="line"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: "easeOut" },
              },
            }}
          >
            Applying for a <span className="highlight-gold">visa</span> should
            not
          </motion.div>

          <motion.div
            className="line"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: "easeOut" },
              },
            }}
          >
            depend on{" "}
            <span className="highlight-gold">guesswork, verbal advice,</span>
          </motion.div>

          <motion.div
            className="line"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: "easeOut" },
              },
            }}
          >
            or <span className="highlight-gold">last-minute corrections.</span>
          </motion.div>
        </motion.div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={`stat-card`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="stat-border">
                <div className="stat-number">
                  <CountUp value={Number(stat.number)} isInView={isInView} />
                  <span className="stat-suffix">{stat.suffix}</span>
                </div>
                <h3 className="stat-title">{stat.title}</h3>
              </div>
              <p className="stat-description">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
