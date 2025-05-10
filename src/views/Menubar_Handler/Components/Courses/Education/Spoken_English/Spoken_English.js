import React from "react";
import "./Spoken_English.css";
import LazyImage from "./../../../../../LazyLoading/LazyImage"; // reuse your existing LazyImage
import Spoken_English_Image from "./../../../../../../images/Spoken_English_Image.gif";

const SpokenEnglish = () => {
  return (
    <section className="spoken-english-container" id="spoken-english">
      <div className="spoken-english-inner">
        <div className="spoken-english-content">
          <h2 className="spoken-heading">
            Unlock Global Opportunities with{" "}
            <span className="highlight">Spoken English</span>
          </h2>
          <p className="spoken-description">
            English is more than a language - it's a gateway to global
            opportunities. Our Spoken English program is designed to help
            learners of all ages speak fluently, confidently, and effectively.
            Whether you're a student, a professional, or someone looking to
            improve communication skills, this course helps you:
          </p>
          <ul className="spoken-list">
            <li>Enhance vocabulary and grammar</li>
            <li>Improve pronunciation and fluency</li>
            <li>Practice real-life conversational skills</li>
            <li>Gain confidence in public speaking and presentations</li>
          </ul>
          <p className="spoken-description">
            With interactive sessions, role-playing, and real-world simulations,
            we ensure learning English is both fun and functional.
          </p>
        </div>
        <div className="spoken-image-wrapper">
          <LazyImage
            src={Spoken_English_Image}
            alt="Spoken English class session"
            className="spoken-english-image"
          />
        </div>
      </div>
    </section>
  );
};

export default SpokenEnglish;
