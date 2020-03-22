import React, { Component } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

const FooterWrapper = styled.div`
  ${tw`flex flex-col items-center justify-center text-white font-sans text-sm`};
  min-height: 20vh;
  background: #000;

  a {
    ${tw`no-underline inline text-white`};
    font-family: "Roboto";

    &:hover {
      text-decoration: underline;
    }
  }

`;

class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        Brought to you by ya boy
        <a href="https://etboggs.com">Eric Boggs</a>
      </FooterWrapper>
    );
  }
}

export default Footer;
