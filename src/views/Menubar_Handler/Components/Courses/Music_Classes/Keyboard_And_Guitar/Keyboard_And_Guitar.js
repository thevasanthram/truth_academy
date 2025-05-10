import React from "react";
import "./Keyboard_And_Guitar.css";
import LazyImage from "./../../../../../LazyLoading/LazyImage";
import Keyboard_And_Guitar_Image from "./../../../../../../images/Keyboard_And_Guitar_Image.webp";

const KeyboardGuitar = () => {
  return (
    <section className="music-class-container" id="keyboard-guitar-classes">
      <div className="floating-notes"></div>

      <div className="music-class-inner">
        <div className="music-content">
          <h2 className="music-heading">
            Explore the Magic of{" "}
            <span className="highlight">Keyboard & Guitar</span>
          </h2>

          <p className="music-summary">
            At Truth Academy, we make music a soulful experience. Our
            beginner-friendly classes in keyboard and guitar help students of
            all ages learn techniques, read music, play melodies, and build
            confidence to perform!
          </p>

          <ul className="music-points">
            <li>Learn instrument layout & basic techniques</li>
            <li>Read music notation & chords</li>
            <li>Play melodies and rhythm patterns</li>
            <li>Improve finger strength & coordination</li>
          </ul>

          <p className="music-footer">
            Our passionate instructors blend fun with structured learning to
            awaken your musical creativity.
          </p>
        </div>

        <div className="music-image-wrapper">
          <LazyImage
            src={Keyboard_And_Guitar_Image}
            alt="Keyboard and Guitar Classes"
            className="music-class-image"
          />
        </div>
      </div>
    </section>
  );
};

export default KeyboardGuitar;
