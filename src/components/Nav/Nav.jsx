import React, { Component } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { Link } from "gatsby";

const NavWrapper = styled.nav`
  ${tw`w-full md:w-1/3 text-center`};

  a {
    ${tw`no-underline inline-block md:block uppercase text-center md:text-right pr-4 pl-4 md:pr-0`};

    &:first-of-type {
      ${tw`pl-0 pr-0`};
    }

    &:last-of-type {
      ${tw`pr-0 pl-0`};
    }
    color: #ddd;
    font: 700 16px/20px "Roboto";
    letter-spacing: 1px;
  }
`;

class Nav extends Component {
  render() {
    return (
      <NavWrapper>
        <div className="primary-nav">
          <Link
            to="/#about"
            innerRef={el => {
              this.myLink = el;
            }}
          >
            About
          </Link>
          <Link
            to="/#work"
            innerRef={el => {
              this.myLink = el;
            }}
          >
            Work
          </Link>
          <Link
            to="/#writing"
            innerRef={el => {
              this.myLink = el;
            }}
          >
            writing
          </Link>
        </div>
      </NavWrapper>
    );
  }
}

export default Nav;
