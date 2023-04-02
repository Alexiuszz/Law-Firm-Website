import Image from "next/image";
import React from "react";
import { StyledFooter } from "./Footer.styles";
import { Text } from "../typography.styles";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFontAwesome,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <StyledFooter>
      <div className="container">
        <div className="logo">
          <Image
            src={"https://ikwueto.s3.amazonaws.com/images/logo.png"}
            alt="logo"
            width={100}
            height={30}
          />
        </div>
        <div className="mainContent">
          <div className="columns">
            <Text size={"14px"} left={true}>
              Developing our Practice towards a geared certainty of
              exceeding your expectations.
            </Text>
            <a href="mailto:info@ikwueto.net">info@ikwueto.net</a>
            <a href="tel:+2349065943242">+234-906-594-3242</a>
          </div>
          <div className="columns">
            <Link href="/">Home</Link>
            <Link href="/about-us">About Us</Link>
            <Link href="/practise-areas">Practice Areas</Link>
            <Link href="/people">Our People</Link>
          </div>
          <div className="columns">
            <Link href="/">News and Insights</Link>
            <Link href="/">Publications</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
          <div className="columns">
            <Link href="/">Nigerian Bar Association</Link>
            <Link href="/">CIArb</Link>
            <Link href="/people">Staff Mail</Link>
          </div>
        </div>
      </div>
      <div className="copywrite">
        <Text weight={300} size={"12px"} left={true}>
          Copyright © 2021 Ikwueto®
          <span>
            We are social:
            <Link href={'/'}>
              <FontAwesomeIcon icon={faTwitter} beatFade />
            </Link>
            <Link href={'/'}>
              <FontAwesomeIcon icon={faFacebook} beatFade />
            </Link>
          </span>
        </Text>
      </div>
    </StyledFooter>
  );
}

export default Footer;
