import React, { Component } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { Link } from "gatsby";

const HeaderWrapper = styled.header`
  ${tw`w-full absolute md:fixed z-50 text-center flex justify-center md:justify-start`};

  .logo {
    ${tw`flex justify-center text-center text-xl font-sans`};
    padding: 20px;

    a {
      ${tw`no-underline`};
      color: #9bd675;
    }

    img {
      width: 200px;
    }
  }
`;

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <div className="logo">
          <Link
            to="/"
            innerRef={el => {
              this.myLink = el;
            }}
          >
            <img src="https://res.cloudinary.com/ericboggs/image/upload/v1584933407/logo-drop_gk9knd.png" />
          </Link>
        </div>
      </HeaderWrapper>
    );
  }
}

export default Header;
