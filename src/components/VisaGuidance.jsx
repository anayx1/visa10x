import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Flag1 from "../assets/images/png/flag1.png";
import Flag2 from "../assets/images/png/flag2.png";
import Flag3 from "../assets/images/png/flag3.png";
import Flag4 from "../assets/images/png/flag4.png";
import Flag5 from "../assets/images/png/flag5.png";

const VisaGuidance = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const countries = [
    {
      name: "Australia",
      image: Flag1,
    },
    {
      name: "USA",
      image: Flag2,
    },
    {
      name: "UK",
      image: Flag3,
    },
    {
      name: "Canada",
      image: Flag4,
    },
    {
      name: "Europe",
      image: Flag5,
    },
  ];

  return (
    <section className="visa-guidance" ref={ref} id="about">
      <div className="guidance-container">
        <motion.div
          className="guidance-content"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="guidance-badge"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              visible: { transition: { staggerChildren: 0.3 } }, // lines appear one after another
            }}
          >
            <motion.div
              className="badge-line"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
            >
              Visa{" "}
              <span className="badge-highlight">application guidance,</span>
            </motion.div>

            <motion.div
              className="badge-line"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
            >
              built on <span className="badge-highlight">experience.</span>
            </motion.div>
          </motion.div>

          <p className="guidance-description">
            Technology-led guidance shaped by 20+ years of real visa and
            passport case handling.
          </p>

          <div className="flag-grid">
            {countries.map((country, index) => (
              <motion.div
                key={country.name}
                className="flag-item"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flag-icon">
                  <img src={country.image} alt="" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisaGuidance;
