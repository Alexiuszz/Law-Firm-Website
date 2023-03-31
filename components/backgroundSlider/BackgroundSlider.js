import React from "react";
import useImagePreloader from "../hooks/usePreloadImage";
import { ImagePlaceHolder } from "../imagePlaceHolder/ImagePlaceHolder.styled";

import { StyledSlide, StyledSlider } from "./BackgroundSlider.styles";

function BackgroundSlider({
  children,
  currImg,
  imageUrls,
  multi = true,
}) {
  const [images, isImageLoaded] = useImagePreloader(imageUrls);
  return (
    <StyledSlider>
      {children}
      {imageUrls.map((url, i) =>
        isImageLoaded(url) ? (
          <StyledSlide
            image={images[i].src}
            key={i}
            className={
              multi
                ? currImg === i
                  ? "currImg multi"
                  : "multi"
                : currImg === i
                ? "currImg"
                : ""
            }
          />
        ) : (
          <ImagePlaceHolder
            key={i}
            className={multi && i === 0 ? "multi" : ""}
          />
        )
      )}
    </StyledSlider>
  );
}

export default BackgroundSlider;
