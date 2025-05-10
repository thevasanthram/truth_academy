import React from "react";

const LazyImage = ({ src, alt, classname }) => {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={classname}
      style={{ width: "100%", borderRadius: "14px" }}
    />
  );
};

export default LazyImage;
