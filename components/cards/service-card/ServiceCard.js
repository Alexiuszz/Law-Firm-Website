import React from "react";
import { Header } from "../../typography.styles";
import { StyledServiceCard } from "./ServiceCard.styles";

function ServiceCard({ img, text, onClick, link }) {
  return (
    <StyledServiceCard
      onClick={() => onClick(link)}
      role="button"
      tabIndex={0}
      className="card"
    >
      <img src={img} alt={text} />
      <Header>{text}</Header>
    </StyledServiceCard>
  );
}

export default ServiceCard;
