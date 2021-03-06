
import React, { Component } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

const RequirementsWrapper = styled.section`
  ${tw`w-full justify-between items-center flex flex-col text-center py-32`};
  background-color: #020202;

  .container {
    ${tw`w-5/6 md:w-2/5 text-center`};
  }

  h2 {
    ${tw`text-center uppercase font-sans font-bold mb-0 mt-0 text-3xl`};
    color: #9bd675;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  .full-description {
    ${tw`w-full flex flex-col text-center justify-center text-xl leading-normal font-sans text-white`};
  }

  a {
    color: #9bd675;
    text-decoration: none;
  }

  .line {
    max-width: 400px;
    width: 80%;
  }
`;

class Requirements extends Component {
  render() {
    return (
      <RequirementsWrapper id="requirements">
        <div className="container">
          <div className="full-description">
            <h2>
              Requirements
            </h2>
            <div>
              <img className="line" src="https://res.cloudinary.com/ericboggs/image/upload/v1584932032/line_fc5vjt.png" />
              <ul>
                <li>Good attitude</li>
                <li>
                  <a href="https://zoom.us/download">Zoom Client for Meetings</a>
                </li>
                <li>Maybe a beer</li>
              </ul>
            </div>
          </div>
        </div>
      </RequirementsWrapper>
    );
  }
}

export default Requirements;
