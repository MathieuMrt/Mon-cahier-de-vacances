import React from "react";

const ImageEng = ({ name, url }) => {
  return (
    <div>
      <img src={url} alt={name} />
    </div>
  );
};

export default ImageEng;
