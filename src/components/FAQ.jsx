import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import "./FAQ.css";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How is tenXvisa different from traditional visa agents?",
      answer:
        "tenXvisa uses a structured, platform-led approach instead of verbal advice or person-dependent processes. Applications are prepared using documented checklists, system-driven guidance, and expert review to ensure readiness before submission.",
    },
    {
      question: 'What does "built on experience" actually mean for applicants?',
      answer:
        "Our system is built on 20+ years of real visa and passport case handling experience, which has been translated into structured processes, validation checks, and country-specific checklists.",
    },
    {
      question: "Does experienced review mean guaranteed approval?",
      answer:
        "No. We prepare applications to meet embassy standards and reduce risk, but embassy decisions remain independent. Our role is preparation, not influencing outcomes.",
    },
    {
      question: "Who should use tenXvisa?",
      answer:
        "Anyone seeking a structured, checklist-based approach to visa applications — students, professionals, families, or businesses looking to reduce errors and last-minute rework.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq" ref={ref}>
      <div className="faq-container">
        <motion.div
          className="faq-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            variants={{
              visible: { transition: { staggerChildren: 0.3 } }, // lines appear one after another
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="faq-title"
          >
            <motion.span variants={textVariants} style={{ display: "block" }}>
              Wondering about something?
            </motion.span>
            <motion.span
              variants={textVariants}
              style={{ display: "block" }}
              className="highlight-gold"
            >
              Let's clear things up!
            </motion.span>
          </motion.h2>
          <p className="faq-subtitle">
            We've gathered all the important info right here. Explore our FAQs
            and find the answers you need.
          </p>
        </motion.div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`faq-item ${openIndex === index ? "open" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <span className="faq-icon-cross">✕</span>
                ) : (
                  <span className="faq-icon">+</span>
                )}
              </button>
              <motion.div
                className="faq-answer"
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <p>{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
