import React, { Component } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

const ThankYouWrapper = styled.section`
  ${tw`w-full justify-between items-center flex flex-row min-h-screen bg-cover pt-32 md:pt-0`};
  background: url("https://res.cloudinary.com/ericboggs/image/upload/v1584909755/mask_qa3ylr.jpg");
  background-size: cover;
  background-position: center;

  .container {
    ${tw`w-5/6 md:w-2/5 text-center`};
  }

  h2 {
    ${tw`text-center md:text-left uppercase leading-tight font-sans font-bold mb-0 mt-0 text-3xl md:text-5xl text-white`};
    color: #9bd675;
  }

  .full-description {
    ${tw`w-full flex flex-col items-center justify-center text-center text-xl leading-normal font-sans text-white`};
  
    img {
      max-width: 400px;
      width: 80%;
    }
  }
`;

class ThankYou extends Component {
  render() {
    return (
      <ThankYouWrapper id="thanks">
        <div className="container">
          <div className="full-description">
            <img src="https://res.cloudinary.com/ericboggs/image/upload/v1584939781/sick_qqxsxe.png" />
            <div>
              <p>I'll send a calendar invite to your email soon!</p>
              <p>You can find the discussion topics below.</p>
            </div>
          </div>
        </div>
      </ThankYouWrapper>
    );
  }
}

export default ThankYou;
