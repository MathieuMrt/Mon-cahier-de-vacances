import React from "react";

const ImageEng = ({ name, url }) => {
  return (
    <div className="Eng-image">
      <img src={url} alt={name} />
    </div>
  );
};

export default ImageEng;
