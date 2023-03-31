import Link from "next/link";
import React, { useEffect, useState } from "react";
import BackgroundSlider from "../../backgroundSlider/BackgroundSlider";
import { Button } from "../../buttons/Button";
import { Header, Text } from "../../typography.styles";

import { HomeHero } from "./HomeCarousel.styles";
const imageUrls = [
  "https://ikwueto.s3.amazonaws.com/images/Hero1.png",
  "https://ikwueto.s3.amazonaws.com/images/Hero2.png",
  "https://ikwueto.s3.amazonaws.com/images/Hero3.png",
];
function HomeCarousel() {
  const [currImg, setCurrImg] = useState(0);
  const [prevImg, setPrevImg] = useState(0);

  useEffect(() => {
    var interval;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setCurrImg((prevState) => {
          setPrevImg(prevState);
          return prevState === imageUrls.length - 1
            ? 0
            : prevState + 1;
        });
      }, 6000);
    }, 4000);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <BackgroundSlider
      imageUrls={imageUrls}
      currImg={currImg}
      prevImg={prevImg}
    >
      <HomeHero>
        <Header>Firmly Rooted, Thinking Ahead.</Header>
        <Text>
          Striving to attain an optimum client satisfaction with the
          aid of the due process of law.
        </Text>
        <Button>
          <Link href={"/about-us"}>Learn More About Us</Link>
        </Button>
        <div className="slideButton">
          {imageUrls.map((item, i) => (
            <Button
              key={i}
              className={i === currImg && "fill"}
              onClick={() =>
                setCurrImg((prevState) => {
                  setPrevImg(i - 1 < 0 ? 0 : i - 1);
                  return i;
                })
              }
            />
          ))}
        </div>
      </HomeHero>
    </BackgroundSlider>
  );
}

export default HomeCarousel;
