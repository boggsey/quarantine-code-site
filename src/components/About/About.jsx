import React, { Component } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

const AboutWrapper = styled.section`
  ${tw`w-full justify-between items-center flex flex-row min-h-screen bg-cover pt-32 md:pt-0`};
  background: url("https://res.cloudinary.com/ericboggs/image/upload/v1584909755/mask_qa3ylr.jpg");
  background-size: cover;
  background-position: center;

  .container {
    ${tw`w-5/6 md:w-2/5`};
  }

  h2 {
    ${tw`text-center md:text-left uppercase leading-tight font-sans font-bold mb-0 mt-0 text-3xl md:text-5xl text-white`};
    color: #9bd675;
  }

  .full-description {
    ${tw`w-full flex flex-col items-start justify-center text-xl leading-normal font-sans text-white`};
  }
`;

class About extends Component {
  render() {
    return (
      <AboutWrapper id="about">
        <div className="container">
          <div className="full-description">
            <h2>
              Learn code in the age of social distancing
            </h2>
            <div className="full-description">
              <p>Are you considering switching careers into web development? Maybe going to a coding bootcamp? If so, join me (a Senior Software Engineer) for a free, casual Zoom chat to discuss what it takes to become a developer and what life after bootcamp might look like. Check below to sign up and read more about our discussion topics.</p>
            </div>
          </div>
        </div>
      </AboutWrapper>
    );
  }
}

export default About;
