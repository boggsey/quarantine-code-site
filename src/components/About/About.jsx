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
              Learn HTML/CSS in the age of social distancing
            </h2>
            <div className="full-description">
              <p>I'm teaching a casual Intro to HTML/CSS class via Google Hangouts. It's a great class for beginners - no previous coding experience required! If you're interested in learning how to build a website I'll guide you through the basics of HTML and CSS, give you some readily-applicable skills, and answer any questions you may have along the way. I'm a Senior Software Engineer for P&G and have taught 150+ students over the years. Mostly doing this because I need people in my life during the quarantine.</p>
            </div>
          </div>
        </div>
      </AboutWrapper>
    );
  }
}

export default About;
