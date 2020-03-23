import React, { Component } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

const DetailWrapper = styled.section`
  ${tw`w-full flex justify-center md:justify-end flex-row bg-black`};
  overflow: hidden;

  .detail-container {
    ${tw`w-5/6 md:w-4/5 flex justify-between flex-col md:flex-row py-8`};
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
    ${tw`w-full md:w-3/4`};
  }

  form {
    ${tw`w-full md:w-5/6 md:w-full bg-black`};
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
    padding: 5px 20px;
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
        <div className="detail-container">
          <div className="full-description">
            <h2>
              Registration
            </h2>
            <div className="description-container">
              <p>Classes will happen via a Google Hangout. It's free but you do have to register. Currently only accepting up to 15 students.</p>
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

          <div className="img-container">
            <img src="https://res.cloudinary.com/ericboggs/image/upload/v1584921909/side-code_mjwhpx.png" />
          </div>
          
        </div>
      </DetailWrapper>
    );
  }
}

export default Details;
