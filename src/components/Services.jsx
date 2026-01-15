import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import "./Services.css";
import Service1 from "../assets/images/jpg/service1.jpg";
import Service2 from "../assets/images/jpg/service2.jpg";
import Service3 from "../assets/images/jpg/service3.jpg";
import Service4 from "../assets/images/jpg/service4.jpg";
import Service5 from "../assets/images/jpg/service5.jpg";
import Service6 from "../assets/images/jpg/service6.jpg";
import Service7 from "../assets/images/jpg/service7.jpg";
import TabIcon from "../assets/images/png/tabicon.png";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedService, setSelectedService] = useState("study");

  const services = [
    { id: "study", name: "Study Visa", icon: "1" },
    { id: "work", name: "Work Visa", icon: "1" },
    { id: "tourist", name: "Tourist Visa", icon: "1" },
    { id: "business", name: "Business Visa", icon: "1" },
    { id: "family", name: "Family / Spouse Visa", icon: "1" },
    { id: "medical", name: "Medical Visa", icon: "1" },
    { id: "trade", name: "Trade Fair Visa", icon: "1" },
  ];

  const serviceDetails = {
    study: {
      title: "Study Visa",
      description:
        "Structured preparation and expert review for student visa applications across major international destinations.",
      features: [
        "Guided intake based on study purpose and destination",
        "Country- and category-specific document checklist",
        "Validation of financial, academic, and intent documentation",
        "Expert review before submission-ready status",
      ],
      image: Service1,
    },
    // Adding defaults for other services to prevent crashes if selected
    work: {
      title: "Work Visa",
      description: "Comprehensive support for work permit applications.",
      features: [
        "Employer coordination",
        "Documentation review",
        "Visa interview prep",
      ],
      image: Service2,
    },
    tourist: {
      title: "Tourist Visa",
      description: "Hassle-free tourist visa processing for your holidays.",
      features: [
        "Itinerary planning",
        "Financial proof guidance",
        "Application filing",
      ],
      image: Service3,
    },
    business: {
      title: "Business Visa",
      description: "Efficient processing for your business travel needs.",
      features: [
        "Invitation letter review",
        "Company profile documentation",
        "Fast-track guiding",
      ],
      image: Service4,
    },
    family: {
      title: "Family Visa",
      description: "Reunite with your loved ones with ease.",
      features: [
        "Relationship proof",
        "Sponsorship guidance",
        "Dependent applications",
      ],
      image: Service5,
    },
    medical: {
      title: "Medical Visa",
      description: "Urgent assistance for medical treatment visas.",
      features: [
        "Hospital letter coordination",
        "Medical clearance",
        "Priority handling",
      ],
      image: Service6,
    },
    trade: {
      title: "Trade Fair Visa",
      description: "Visa support for attending international trade fairs.",
      features: [
        "Exhibitor validation",
        "Conference registration proof",
        "Business meeting itinerary",
      ],
      image: Service7,
    },
  };

  // Fallback if detail missing
  const currentDetail =
    serviceDetails[selectedService] || serviceDetails["study"];

  return (
    <section className="services" ref={ref} id="services">
      <div className="services-container">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="services-title">
            Our core{" "}
            <span className="highlight-gold">visa consultation services</span>
          </h2>
          <p className="services-subtitle">
            Comprehensive and tailored visa guidance for individuals, families,
            and professionals.
          </p>
        </motion.div>

        <div className="tab-service-box">
          <motion.div
            className="service-tabs"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {services.map((service, index) => (
              <motion.button
                key={index}
                className={`service-tab ${
                  selectedService === service.id ? "active" : ""
                }`}
                onClick={() => setSelectedService(service.id)}
              >
                <div className="tab-icon-box">
                  <div className="tab-icon">
                    <img src={TabIcon} alt="Icon" />
                  </div>
                </div>
                <span className="tab-name">{service.name}</span>
              </motion.button>
            ))}
          </motion.div>

          <div className="services-content">
            <motion.div className="service-details" key={selectedService}>
              <div className="details-image">
                <img src={currentDetail.image} alt="Image" />
              </div>

              <div className="details-content">
                <h3 className="details-title">{currentDetail.title}</h3>
                <p className="details-description">
                  {currentDetail.description}
                </p>

                <ul className="details-features">
                  {currentDetail.features.map((feature, index) => (
                    <motion.li key={index}>
                      <span className="feature-bullet">●</span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                <button class="hero-btn">
                  <span class="btn-text-wrap">
                    <span class="text top">
                      <span>C</span>
                      <span>h</span>
                      <span>e</span>
                      <span>c</span>
                      <span>k</span>
                      <span>&nbsp;</span>
                      <span>E</span>
                      <span>l</span>
                      <span>i</span>
                      <span>g</span>
                      <span>i</span>
                      <span>b</span>
                      <span>i</span>
                      <span>l</span>
                      <span>i</span>
                      <span>t</span>
                      <span>y</span>
                    </span>

                    <span class="text bottom">
                      <span>C</span>
                      <span>h</span>
                      <span>e</span>
                      <span>c</span>
                      <span>k</span>
                      <span>&nbsp;</span>
                      <span>E</span>
                      <span>l</span>
                      <span>i</span>
                      <span>g</span>
                      <span>i</span>
                      <span>b</span>
                      <span>i</span>
                      <span>l</span>
                      <span>i</span>
                      <span>t</span>
                      <span>y</span>
                    </span>
                  </span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
