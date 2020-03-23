import React, { Component } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

const FooterWrapper = styled.div`
  ${tw`flex flex-col items-center justify-center font-sans text-sm py-5`};
  background: #000;
  border-top: 1px solid black;

  a {
    ${tw`no-underline inline text-white`};
    font-family: "Roboto";

    &:hover {
      text-decoration: underline;
    }
  }

  img {
    width: 100px;
  }

`;

class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <a href="https://etboggs.com"><img src="https://res.cloudinary.com/ericboggs/image/upload/v1584931699/eric_eausfx.png" /></a>
      </FooterWrapper>
    );
  }
}

export default Footer;
