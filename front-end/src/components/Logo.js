import React from "react";
import imgThierry from "../assets/images/photo-thierry.jpg";

const Logo = () => {
  return (
    <div>
      <img
        className="img_Logo_container"
        src={imgThierry}
        alt={`image grosse piece ${imgThierry} `}
      />
    </div>
  );
};

export default Logo;
