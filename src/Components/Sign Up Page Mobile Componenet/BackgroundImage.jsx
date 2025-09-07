import React from "react";

const BackgroundImage = ({ backgroundImage, altText = "Background" }) => {
  return (
    <div className="absolute inset-0 flex items-start justify-center pt-12">
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt={altText}
          className="max-w-xs h-auto object-contain"
          style={{ maxHeight: "40vh" }}
        />
      )}
    </div>
  );
};

export default BackgroundImage;