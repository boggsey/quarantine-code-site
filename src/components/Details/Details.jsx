import React, { Component } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

const DetailWrapper = styled.section`
  ${tw`w-full flex flex-end flex-row bg-black`};

  .container {
    ${tw`w-5/6 md:w-3/4 flex flex-end flex-row p-8`};
  }

  h2 {
    ${tw`text-center md:text-left uppercase font-sans font-bold mb-0 mt-0 text-3xl`};
    color: #9bd675;
  }

  .full-description {
    ${tw`w-full md:w-1/2 flex flex-col items-start justify-center text-lg leading-normal font-sans text-white text-md`};
  }

  .description-container {
    ${tw`w-full md:w-3/4`}
  }

  ul {
    margin-top: 0;
  }

  .form-container {
    ${tw`w-full md:w-1/2`};
  }

  form {
    ${tw`w-5/6 md:w-full p-5 bg-black`};
  }

  label {
    ${tw`text-white text-md font-sans text-lg`};
  }

  input {
    ${tw`w-full text-lg bg-transparent`};
    padding: 10px 2px;
    border: 0;
    border-bottom: 2px solid #333;

    &::placeholder {
      ${tw`text-lg text-white`};
    }
  }

  select {
    ${tw`w-full text-xl`};
    margin-top: 5px;
    padding: 10px 20px;
    border: 2px solid black;
  }

  button {
    ${tw`text-lg leading-normal font-sans font-bold`};
    background-color: #9bd675;
    color: #1f2c31;
    border: 2px solid #9bd675;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 20px;

    &:hover {
      background: #1f2c31;
      color: #9bd675;
    }
  }
`;

class Details extends Component {
  render() {
    return (
      <DetailWrapper id="details">
        <div className="container">
          <div className="full-description">
            <h2>
              Registration
            </h2>
            <div className="description-container">
              <p>Classes will happen via a Google Hangout. It's free but you do have to register. Currently only accepting up to 15 students.</p>
              <ul>
                <li>Tuesday, March 31st from 7:00pm to 9:00pm EST</li>
                <li>Thursday, April 2nd from 7:00pm to 9:00pm EST</li>
                <li>Tuesday, April 7th from 7:00pm to 9:00pm EST</li>
                <li>Thursday, April 9th from 7:00pm to 9:00pm EST</li>
              </ul>
            </div>
          </div>
          <div className="form-container">
            <form name="contact" method="POST" data-netlify="true">
              <p>
                <label>
                  <input type="text" name="name" placeholder="Your Name" />
                </label>   
              </p>
              <p>
                <label>
                  <input type="email" name="email" placeholder="Your Email" />
                </label>
              </p>
              <p>
                <label>
                  Can you attend all sessions?
                  {' '}
                  <select name="sessions[]">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </label>
              </p>
              <p>
                <button type="submit">Register</button>
              </p>
            </form>
          </div>
        </div>
      </DetailWrapper>
    );
  }
}

export default Details;

