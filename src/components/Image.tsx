import React from "react";

interface Props {
  src: string;
  alt: string;
}

const Image = ({ src, alt }: Props) => {
  return <img src={src} alt={alt} />;
};

export default Image;
