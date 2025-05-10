import React from "react";
import { motion } from "framer-motion";
import LazyImage from "./../../../../../LazyLoading/LazyImage";
import "./State_Board_Tuition.css";
import State_Board_Tuition_Image from "./../../../../../../images/State_Board_Tuition_Image.png";

const StateBoardTuition = () => {
  return (
    <section className="state-tuition-container" id="state-tuition">
      <motion.div
        className="state-tuition-wrapper"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <div className="state-tuition-image">
          <LazyImage
            src={State_Board_Tuition_Image}
            alt="State Board Tuition at Truth Academy"
          />
        </div>

        <div className="state-tuition-text">
          <h1 className="state-tuition-heading">
            State Board Tuition (Grades 5 to 10)
          </h1>
          <p className="state-tuition-description">
            At <strong>Truth Academy</strong>, we deliver top-tier tuition for
            Grades 5 to 10 aligned with the{" "}
            <strong>State Board syllabus</strong>. Our experienced mentors
            emphasize building a strong academic foundation in{" "}
            <strong>Maths, Science, English, and Social Studies</strong>,
            ensuring consistent performance through personalized attention.
          </p>
          <p className="state-tuition-description">
            With <strong>custom teaching methods</strong> and{" "}
            <strong>adaptive strategies</strong>, we help students from diverse
            educational backgrounds grasp key topics effectively. Our goal is
            not only to improve academic outcomes, but also to instill{" "}
            <strong>
              confidence, discipline, and lifelong learning habits
            </strong>
            .
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default StateBoardTuition;
