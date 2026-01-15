import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import "./Contact.css";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="contact" ref={ref} id="contact">
      <div className="contact-container">
        <motion.div
          className="contact-header"
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
            className="contact-title"
          >
            <motion.span variants={textVariants} style={{ display: "block" }}>
              Let's plan your
            </motion.span>
            <motion.span
              variants={textVariants}
              style={{ display: "block" }}
              className="highlight-gold"
            >
              <span className="highlight-navy">visa </span>
              together!
            </motion.span>
          </motion.h2>
          <div className="contact-info-box">
            <p className="contact-question">
              Have a question about visas, or which type fits you best?
            </p>
            <p className="contact-question">
              Reach out — we'll help you find your next step forward.
            </p>
          </div>
        </motion.div>

        <div className="contact-content">
          <motion.div className="contact-methods">
            <div className="contact-card">
              <div className="contact-icon">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 8L10.89 13.26C11.23 13.47 11.61 13.59 12 13.59C12.39 13.59 12.77 13.47 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="contact-card-footer">
                <div className="contact-card-content">
                  <h3 className="contact-card-title">Email</h3>
                  <p className="contact-card-text">
                    For queries, reach us by email
                  </p>
                </div>
                <button className="contact-card-btn">→</button>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.5953 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5864 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18 2C19.5913 3.59131 20.5 5.69585 20.5 7.9C20.5 10.1041 19.5913 12.2087 18 13.8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.5"
                  />
                  <path
                    d="M15.5 4.5C16.2956 5.29565 16.75 6.36739 16.75 7.48C16.75 8.59261 16.2956 9.66435 15.5 10.46"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.5"
                  />
                </svg>
              </div>
              <div className="contact-card-footer">
                <div className="contact-card-content">
                  <h3 className="contact-card-title">Call us</h3>
                  <p className="contact-card-text">
                    Mon - Fri, 8:00 - 17:00 (IST)
                  </p>
                </div>
                <button className="contact-card-btn">→</button>
              </div>
            </div>
          </motion.div>

          <motion.div className="contact-form-wrapper">
            <h3 className="form-title">Send a Message</h3>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="fullname">Full name</label>
                <input
                  type="text"
                  id="fullname"
                  placeholder="Enter your full name"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  placeholder="Tell us your visa type, destination, or what you need help with..."
                  className="form-textarea"
                  rows="4"
                ></textarea>
              </div>

              <motion.button
                className="btn-submit"
              >
                Send Message
                <span className="btn-arrow">→</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
