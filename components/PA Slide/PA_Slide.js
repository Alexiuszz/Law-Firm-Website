import { useRouter } from "next/router";
import React from "react";
import ReactDOM from "react-dom";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { LeftArrow, RightArrow } from "../buttons/Arrows/Arrows";
import ServiceCard from "../cards/service-card/ServiceCard";
import useDrag from "../hooks/useDrag";
import { Header, Text } from "../typography.styles";
import { Slider } from "./PA_Slide.styles";

const services = [
  {
    img: "./images/services/litigation.png",
    text: "Litigation",
    link: "/practise-areas",
  },
  {
    img: "./images/services/natural-resources.png",
    text: "Energy & Natural Resources Law",
    link: "/practise-areas",
  },
  {
    img: "./images/services/guarantee-certificate.png",
    text: "Corporate Services & Compliance",
    link: "/practise-areas",
  },
  {
    img: "./images/services/intermediary.png",
    text: "Arbitration & ADR",
    link: "/practise-areas",
  },
  {
    img: "./images/services/financial-advisor.png",
    text: "Banking and Finance",
    link: "/practise-areas",
  },
  {
    img: "./images/services/legal-document.png",
    text: "Legal Documentation",
    link: "/practise-areas",
  },
  {
    img: "./images/services/hammer.png",
    text: "Tax Law and Advisory",
    link: "/practise-areas",
  },
  {
    img: "./images/services/innovation.png",
    text: "Intellectual Property",
    link: "/practise-areas",
  },
  {
    img: "./images/services/profits.png",
    text: "Foreign Investment Advisory Services",
    link: "/practise-areas",
  },
];
function onWheel(apiObj, ev) {
  const isThouchpad =
    Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}
const Arrows = (texts) => (
  <div className="PA-container">
    {texts}
    <div className="arrowsContainer">
      <LeftArrow /> <RightArrow />
    </div>
  </div>
);
function Slide({texts}) {
  const router = useRouter();
  const { dragStart, dragStop, dragMove, dragging } = useDrag();
  const handleDrag =
    ({ scrollContainer }) =>
    (ev) =>
      dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });
  const handleItemClick = (link) => () => {
    if (dragging) {
      return false;
    }
    router.push(link);
  };
  return (
    <Slider onMouseLeave={dragStop}>
      <ScrollMenu
        Header={Arrows(texts)}
        onWheel={onWheel}
        onMouseDown={() => dragStart}
        onMouseUp={() => dragStop}
        onMouseMove={handleDrag}
      >
        {services.map((service, i) => (
          <ServiceCard
            key={i}
            img={service.img}
            text={service.text}
            onClick={handleItemClick(service.link)}
          />
        ))}
      </ScrollMenu>
    </Slider>
  );
}

export default Slide;
