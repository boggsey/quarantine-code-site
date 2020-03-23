import React, { Component } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";


const ErrorWrapper = styled.section`
  ${tw`w-full justify-center items-center min-h-screen flex flex-row px-2 py-8 md:p-32`};
  background-color: black;
  background-image: url(https://res.cloudinary.com/ericboggs/image/upload/v1584926618/tp_xrzjkl.png);

  .error-container {
    ${tw`w-full md:w-3/4 text-center`};
  }

  h2 {
    ${tw`text-center uppercase leading-tight font-sans font-bold mb-0 mt-0 text-6xl text-white`};
    color: #9bd675;
  }

  .full-description {
    ${tw`w-full flex flex-row flex-wrap items-stretch justify-center text-3xl leading-normal font-sans text-white`};
  }
`;

class ErrorPage extends Component {
  render() {
    return (
      <ErrorWrapper id="error">
        <div className="error-container">
          <h2>404</h2>
          <div className="full-description">
            <p>I've done something terribly wrong</p>
          </div>
        </div>
      </ErrorWrapper>
    );
  }
}

export default ErrorPage;
