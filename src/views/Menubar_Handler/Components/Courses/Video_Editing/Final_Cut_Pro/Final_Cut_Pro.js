import React from "react";
import "./Final_Cut_Pro.css";
import LazyImage from "./../../../../../LazyLoading/LazyImage";
import Final_Cut_Pro_Image from "./../../../../../../images/Final_Cut_Pro_Image.jpg";

const FinalCutPro = () => {
  return (
    <section className="fcp-section" id="final-cut-pro-classes">
      <div className="fcp-overlay-effect"></div>

      <div className="fcp-container">
        <div className="fcp-content">
          <h2 className="fcp-heading">
            Master the Art of <span>Video Editing</span> with Final Cut Pro
          </h2>

          <p className="fcp-intro">
            Step into the world of digital creativity with our Final Cut Pro
            Basics course — ideal for aspiring video editors, YouTubers, and
            content creators who want to make stories come alive on screen.
          </p>

          <ul className="fcp-points">
            <li>🎬 Get familiar with FCP's interface & tools</li>
            <li>📂 Import, organize & manage media efficiently</li>
            <li>✂️ Master basic video & audio editing techniques</li>
            <li>✨ Add transitions, effects, titles & overlays</li>
            <li>🚀 Export high-quality content for web & social</li>
          </ul>

          <p className="fcp-conclusion">
            By the end of this course, you’ll be confidently creating stunning
            videos with industry-grade finesse.
          </p>
        </div>

        <div className="fcp-image-wrapper">
          <LazyImage
            src={Final_Cut_Pro_Image}
            alt="Final Cut Pro Class"
            className="fcp-image"
          />
          <div className="fcp-glow-frame"></div>
        </div>
      </div>
    </section>
  );
};

export default FinalCutPro;
