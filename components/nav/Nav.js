import Image from "next/image";
import Link from "next/link";
import React from "react";
import { StyledNav } from "./Nav.styles";

function Nav() {
  return (
    <StyledNav>
      <Link href="/">
        <Image
          src={"https://ikwueto.s3.amazonaws.com/images/logo.png"}
          alt="logo"
          width={100}
          height={30}
        />
      </Link>

      <div className="items">
        <Link href="/about-us">About Us</Link>
        <Link href="/contact">Contact Us</Link>
      </div>

      <div className="navDrop">
        <Link href="/">Home</Link>
        <Link href="/about-us">About Us</Link>
        <Link href="/practise-areas">Practice Areas</Link>
        <Link href="/people">Our People</Link>
        <Link href="/">News and Insights</Link>
        <Link href="/">Publications</Link>        
        <Link href="/careers">Careers</Link>        
        <Link href="/contact">Contact Us</Link>
      </div>
    </StyledNav>
  );
}

export default Nav;
