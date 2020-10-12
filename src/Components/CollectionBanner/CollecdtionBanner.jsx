import React from "react";
import { Image } from "react-bootstrap";
import banner from "../../asserts/summerbanner.jpg";

const CollectionBanner = (props) => {
  return (
    <div>
      <Image src={banner} fluid />
    </div>
  );
};

export default CollectionBanner;
