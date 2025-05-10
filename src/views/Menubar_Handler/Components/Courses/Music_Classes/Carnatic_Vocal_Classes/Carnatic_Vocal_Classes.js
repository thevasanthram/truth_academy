import React from "react";
import "./Carnatic_Vocal_Classes.css";
import LazyImage from "./../../../../../LazyLoading/LazyImage";
import Carnatic_Vocal_Image from "./../../../../../../images/Carnatic_Vocal_Image.png";

const CarnaticVocal = () => {
  return (
    <section className="carnatic-container" id="carnatic-vocal-classes">
      <div className="carnatic-bg-waves"></div>

      <div className="carnatic-inner">
        <div className="carnatic-content">
          <h2 className="carnatic-heading">
            Embrace the Art of <span className="highlight">Carnatic Vocal</span>
          </h2>

          <p className="carnatic-summary">
            Dive into the divine tradition of South Indian classical music with
            our beginner-friendly Carnatic Vocal program. Perfect for all ages,
            our structured lessons help nurture your voice and instill a deep
            appreciation for tradition.
          </p>

          <ul className="carnatic-points">
            <li>Introduction to Shruti & Tala</li>
            <li>Basic lessons: Sarali, Janta, Alankaram</li>
            <li>Understanding Ragas & Bhava</li>
            <li>Devotional songs & light compositions</li>
          </ul>

          <p className="carnatic-footer">
            Learn from passionate gurus who blend devotion, discipline, and
            voice culture to inspire every student.
          </p>
        </div>

        <div className="carnatic-image-wrapper">
          <LazyImage
            src={Carnatic_Vocal_Image}
            alt="Carnatic Vocal Class"
            className="carnatic-image"
          />
        </div>
      </div>
    </section>
  );
};

export default CarnaticVocal;
