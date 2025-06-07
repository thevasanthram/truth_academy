import { motion } from "framer-motion";
import { Suspense } from "react";
import "./VisualGallery.css";

import truth_academy1 from "./../../images/environment/truth_academy1.jpeg";
import truth_academy2 from "./../../images/environment/truth_academy2.jpeg";
import truth_academy3 from "./../../images/environment/truth_academy3.jpeg";
import truth_academy4 from "./../../images/environment/truth_academy4.jpeg";
import truth_academy5 from "./../../images/environment/truth_academy5.jpeg";

import course1 from "./../../images/poster/poster1.jpeg";
import course2 from "./../../images/poster/poster2.jpeg";
import course3 from "./../../images/poster/poster3.jpeg";
import course4 from "./../../images/poster/poster4.jpeg";

import demoVideo from "./../../images/poster/poster-video.mp4"; // make sure this path is correct

const imageData = [
  { src: truth_academy1, alt: "Classroom Environment" },
  { src: truth_academy2, alt: "Music Classes" },
  { src: truth_academy3, alt: "Video Editing Session" },
  { src: truth_academy4, alt: "Recording Studio" },
  { src: truth_academy5, alt: "Collaborative Projects" },
];

const courseData = [
  // {
  //   src: course2,
  //   alt: "Course Poster 2",
  //   orientation: "landscape",
  //   type: "image",
  // },
  {
    src: demoVideo,
    alt: "Course Introduction Video",
    orientation: "portrait",
    type: "video",
  },
  {
    src: course1,
    alt: "Course Poster 1",
    orientation: "portrait",
    type: "image",
  },
  {
    src: course3,
    alt: "Course Poster 3",
    orientation: "portrait",
    type: "image",
  },
  {
    src: course4,
    alt: "Course Poster 4",
    orientation: "portrait",
    type: "image",
  },
];

const LazyImage = ({ src, alt, section, orientation }) => (
  <motion.img
    src={src}
    alt={alt}
    loading="lazy"
    className={`gallery-image ${section}_section_image ${orientation}`}
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
  />
);

const VideoPoster = ({ src, alt, orientation }) => (
  <motion.div
    className={`gallery-video-wrapper ${orientation}`}
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.02 }}
  >
    <video
      src={src}
      controls
      className="gallery-video"
      aria-label={alt}
      preload="metadata"
    />
  </motion.div>
);

const VisualGallery = () => {
  return (
    <>
      <section className="home-visuals" aria-labelledby="visuals-title">
        <h2 className="section-title" id="visuals-title">
          Experience Truth Academy
        </h2>
        <div className="image-grid">
          <Suspense fallback={<div>Loading images...</div>}>
            {imageData.map((img, index) => (
              <LazyImage
                key={index}
                src={img.src}
                alt={img.alt}
                section="experience_environment"
                orientation="landscape"
              />
            ))}
          </Suspense>
        </div>
      </section>

      <section className="course-highlights" aria-labelledby="course-title">
        <h2 className="section-title" id="course-title">
          Course Highlights
        </h2>
        <div className="poster-grid">
          <Suspense fallback={<div>Loading posters...</div>}>
            {courseData.map((item, index) =>
              item.type === "video" ? (
                <VideoPoster
                  key={`poster-${index}`}
                  src={item.src}
                  alt={item.alt}
                  orientation={item.orientation}
                />
              ) : (
                <LazyImage
                  key={`poster-${index}`}
                  src={item.src}
                  alt={item.alt}
                  section="course_highlights"
                  orientation={item.orientation}
                />
              )
            )}
          </Suspense>
        </div>
      </section>
    </>
  );
};

export default VisualGallery;
