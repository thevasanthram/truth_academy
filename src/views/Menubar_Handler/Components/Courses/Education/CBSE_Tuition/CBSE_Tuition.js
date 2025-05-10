import React from "react";
import { motion } from "framer-motion";
import LazyImage from "../../../../../LazyLoading/LazyImage";
import "./CBSE_Tuition.css";
import CBSE_Tuition_Image from "./../../../../../../images/CBSE_Tuition_Image.jpg";

const StateBoardTuition = () => {
  return (
    <section className="cbse-tuition-container" id="state-tuition">
      <motion.div
        className="cbse-tuition-inner"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="cbse-tuition-content">
          <h2 className="cbse-heading">CBSE Tuition (Grades 5 to 10)</h2>
          <p className="cbse-description">
            At <strong>Truth Academy</strong>, we offer high-quality tuition for
            students from Grades 5 to 10, focused on the{" "}
            <strong>CBSE syllabus</strong>. Our expert educators strengthen core
            concepts in{" "}
            <strong>Mathematics, Science, English, and Social Studies</strong>,
            promoting regular practice, conceptual clarity, and exam readiness.
          </p>
          <p className="cbse-description">
            We maintain <strong>small batch sizes</strong> and a{" "}
            <strong>personalized teaching approach</strong> tailored to
            different learning styles. Our goal is to build not just academic
            success, but also{" "}
            <strong>confidence, discipline, and a love for learning</strong>.
          </p>
        </div>

        <div className="cbse-image-wrapper">
          <LazyImage
            src={CBSE_Tuition_Image}
            alt="State Board Tuition at Truth Academy"
            className="cbse-tuition-image"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default StateBoardTuition;
