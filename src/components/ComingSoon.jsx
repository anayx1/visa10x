import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import "./ComingSoon.css";

const ComingSoon = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="coming-soon" ref={ref}>
      <div className="coming-soon-container">
        <motion.div
          className="coming-soon-content"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="coming-soon-image">
            <img src="/src/assets/images/png/comingsoon.png" alt="Coming" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComingSoon;
