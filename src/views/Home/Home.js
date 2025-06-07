import React, { Suspense } from "react";
import { motion } from "framer-motion";
import "./Home.css";
import VisualGallery from "./../VisualGallery/VisualGallery";

// Lazy load images
const LazyImage = React.lazy(() => import("../LazyLoading/LazyImage"));

const services = [
  "Tuition for CBSE & State Board Syllabus (Grades 5 to 10)",
  "Spoken English Classes",
  "Music Classes – Explore the World of Rhythm and Melody",
  "Keyboard & Guitar Basics",
  "Carnatic Vocal Classes – Basic Level",
  "Final Cut Pro Basics – Video Editing for Beginners",
];

const reasons = [
  "Experienced and Passionate Tutors",
  "Customized Learning Plans",
  "Holistic Development Approach",
  "Innovative Teaching Methods",
  "Support for Academics, Arts & Technology",
  "Interactive & Engaging Sessions",
];

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <motion.section
        className="home-hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div class="floating-particles"></div>

        <h1 className="hero-title">Welcome to Truth Academy</h1>
        <p className="hero-subtitle">
          At Truth Academy, we believe education is more than just learning
          facts—it's about discovering yourself, gaining skills for life, and
          experiencing knowledge in its truest sense. Our motto,
          <strong> "Learn Life and Experience Knowledge"</strong>, reflects our
          mission to nurture well-rounded individuals who are equipped to
          succeed in academics and beyond. Whether you're looking for academic
          support, language development, artistic expression, or technical
          skills, Truth Academy is your partner in personal and intellectual
          growth.
        </p>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="home-services"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        <h2 className="section-title">Our Courses & Services</h2>
        <div className="cards-wrapper">
          {services.map((service, index) => (
            <motion.div
              className="service-card"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3>{service}</h3>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        className="home-why-choose"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
      >
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Us?
        </motion.h2>
        <ul className="why-list">
          {reasons.map((reason, index) => (
            <motion.li
              key={index}
              className="why-item"
              initial={{ opacity: 0, x: -30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                type: "spring",
                stiffness: 80,
              }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 8px 20px rgba(0, 123, 255, 0.25)",
              }}
            >
              <span className="dot" />
              {reason}
            </motion.li>
          ))}
        </ul>
      </motion.section>

      {/* Image & Visual Content */}
      {/*<section className="home-visuals">
        <h2 className="section-title">Experience Truth Academy</h2>
        <div className="image-grid">
          <Suspense fallback={<div>Loading image...</div>}>
            <LazyImage
              src="/images/classroom.jpg"
              alt="Classroom Environment"
            />
            <LazyImage src="/images/music.jpg" alt="Music Classes" />
            <LazyImage src="/images/editing.jpg" alt="Video Editing Session" />
          </Suspense>
        </div>
      </section>*/}
      <VisualGallery />
    </div>
  );
};

export default Home;
