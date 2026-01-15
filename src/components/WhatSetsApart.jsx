//

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "./WhatSetsApart.css";
import leftArrow from "../assets/images/svg/leftarrow.svg";
import rightArrow from "../assets/images/svg/rightarrow.svg";

import Swiper1 from "../assets/images/png/swiper1.png";
import Swiper2 from "../assets/images/png/swiper2.png";
import Swiper3 from "../assets/images/png/swiper3.png";
import Swiper4 from "../assets/images/png/swiper4.png";
import Swiper5 from "../assets/images/png/swiper5.png";
import Swiper6 from "../assets/images/png/swiper6.png";

const WhatSetsApart = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const features = [
    {
      title: "System-driven, not person-dependent",
      icon: Swiper1,
    },
    {
      title: "Clear checklists instead of verbal advice",
      icon: Swiper2,
    },
    {
      title: "Reduced rework and avoidable mistakes",
      icon: Swiper3,
    },
    {
      title: "Documentation process and accountability",
      icon: Swiper4,
    },
    {
      title: "Confidence through preparation, not promises",
      icon: Swiper5,
    },
    {
      title: "Result driven not volume drive",
      icon: Swiper6,
    },
  ];

  return (
    <section className="what-sets-apart" ref={sectionRef}>
      <div className="sets-apart-container">
        {/* Header */}
        <motion.div
          className="sets-apart-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="sets-apart-title">
            What sets <span className="highlight-gold">tenXvisa apart</span>
          </h2>
          <p className="sets-apart-subtitle">
            Proven expertise, transparent processes, and a personalized approach
            for every applicant.
          </p>
        </motion.div>

        {/* Navigation Buttons */}
        <div className="btn-container">
          <button className="carousel-btn prev swiper-prev">
            <img src={leftArrow} alt="Previous" />
          </button>
          <button className="carousel-btn next swiper-next">
            <img src={rightArrow} alt="Next" />
          </button>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          loop={true}
          spaceBetween={24}
          slidesPerView={1.2} // mobile preview
          navigation={{
            prevEl: ".swiper-prev",
            nextEl: ".swiper-next",
          }}
          breakpoints={{
            640: {
              slidesPerView: 2.2,
            },
            768: {
              slidesPerView: 2.8,
            },
            1024: {
              slidesPerView: 3.5, // ✅ 3.5 slides visible
            },
          }}
          className="sets-apart-swiper"
        >
          {features.map((feature, index) => (
            <SwiperSlide className="feature-card" key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <h3 className="feature-title">{feature.title}</h3>
                <div className="feature-icon">
                  <img src={feature.icon} alt="Image" />
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default WhatSetsApart;
