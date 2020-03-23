import React from "react";
import { navigate } from 'gatsby-link'
import styled from "styled-components";
import tw from "tailwind.macro";

const DetailWrapper = styled.section`
  ${tw`w-full flex justify-center flex-row bg-black`};
  overflow: hidden;

  .detail-container {
    ${tw`w-5/6 md:w-full flex justify-between flex-col md:flex-row py-8`};
  }

  h2 {
    ${tw`text-left uppercase font-sans font-bold mb-0 mt-0 text-3xl`};
    color: #9bd675;
  }

  .full-description { 
    ${tw`w-full md:w-1/2 flex flex-col items-end justify-center text-lg leading-normal font-sans text-white text-md`};
  }

  .internal-description {
    ${tw`w-full md:w-2/3 flex justify-center flex-col`};
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
    color: #9bd675;

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

    &:hover {
      background: #1f2c31;
      color: #9bd675;
    }
  }

`;

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)  }=${  encodeURIComponent(data[key])}`)
    .join('&')
}


function Details() {

  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

    return (
      <DetailWrapper id="details">
        <div className="detail-container">
          <div className="full-description">
            <div className="internal-description">
              <h2>
                Registration
              </h2>
              <div className="description-container">
                <p>Classes will happen via a Google Hangout. It's free but you do have to register. Currently only accepting up to 15 students.</p>
              </div>
              <div className="form-container">
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p hidden>
                    <label>
                      Don’t fill this out: 
                      {' '}
                      <input name="bot-field" onChange={handleChange} />
                    </label>
                  </p>
                  <p>
                    <label>
                      <input type="text" name="name" placeholder="Your Name" onChange={handleChange} />
                    </label>   
                  </p>
                  <p>
                    <label>
                      <input type="email" name="email" placeholder="Your Email" onChange={handleChange} />
                    </label>
                  </p>
                  <p>
                    <label>
                      Can you attend all sessions?
                      {' '}
                      <select name="sessions[]" onChange={handleChange}>
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
          
          </div>

          <div className="img-container">
            <img src="https://res.cloudinary.com/ericboggs/image/upload/v1584921909/side-code_mjwhpx.png" />
          </div>
          
        </div>
      </DetailWrapper>
    );
  }


export default Details;

