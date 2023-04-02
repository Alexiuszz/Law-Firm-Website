import Link from "next/link";
import React from "react";
import BackgroundSlider from "../../../components/backgroundSlider/BackgroundSlider";
import { Button } from "../../../components/buttons/Button";
import { Header } from "../../../components/typography.styles";
import { StyledSubHero } from "./SubHero.styles";

function SubHero() {
  return (
    <StyledSubHero>
      <BackgroundSlider
        imageUrls={[
          "https://ikwueto.s3.amazonaws.com/images/subHero.png",
        ]}
        currImg={0}
        width="100vw"
        height="400px"
        bgMask={true}
      >
        <div className="heroContent">
          <Header>
            “Striving to attain optimum client satisfaction with the
            aid of the due process of law”
          </Header>
          <Button>
            <Link href={"/about-us"}>See What Drives Us</Link>
          </Button>
        </div>
      </BackgroundSlider>
    </StyledSubHero>
  );
}

export default SubHero;
