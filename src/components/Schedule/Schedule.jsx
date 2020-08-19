import React, { Component } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";


const ScheduleWrapper = styled.section`
  ${tw`w-full justify-center items-center flex flex-row px-2 py-8 md:p-32`};
  background-color: #9bd675;
  background-image: url(https://res.cloudinary.com/ericboggs/image/upload/v1584926618/tp_xrzjkl.png);
  background-position: top center;

  .schedule-container {
    ${tw`w-full md:w-3/4`};
  }

  h2 {
    ${tw`text-center uppercase leading-tight font-sans font-bold pb-2 mt-0 text-3xl`};
    color: #000;
  }

  .full-description {
    ${tw`w-full flex flex-row flex-wrap items-stretch justify-between text-xl leading-normal font-sans text-white`};
  }

  .card {
    ${tw`w-48p  p-2 md:p-5 text-center font-sans relative`};
    margin-bottom: 20px;
    width: 24%;
    background-color: #222222;
    color: #acbfae;

    .session-number {
      ${tw`font-semibold font-sans text-2xl`};
      color: #9bd675;
    }

    .session-name {
      ${tw`font-semibold font-sans text-lg`};
    }

    .session-date {
      ${tw`font-sans text-base`};
    }

    &:hover {
      top: -5px;
    }
  }
`;

class Schedule extends Component {
  render() {
    return (
      <ScheduleWrapper id="schedule">
        <div className="schedule-container">
          <h2>Discussion Topics</h2>
          
          <div className="full-description">

            <div className="card">
              <h3 className="session-number">1</h3>
              <p className="session-name">What does it mean to be a web developer?</p>
            </div>

            <div className="card">
              <h3 className="session-number">2</h3>
              <p className="session-name">Common misconceptions</p>
            </div>

            <div className="card">
              <h3 className="session-number">3</h3>
              <p className="session-name">What type of person do I need to be?</p>
            </div>

            <div className="card">
              <h3 className="session-number">4</h3>
              <p className="session-name">How much time do I need to spend learning?</p>
            </div>

            <div className="card">
              <h3 className="session-number">5</h3>
              <p className="session-name">What should I learn?</p>
            </div>

            <div className="card">
              <h3 className="session-number">6</h3>
              <p className="session-name">What type of work can I get?</p>
            </div>

            <div className="card">
              <h3 className="session-number">7</h3>
              <p className="session-name">What would my salary look like?</p>
            </div>

            <div className="card">
              <h3 className="session-number">8</h3>
              <p className="session-name">Common Paths</p>
            </div>
          </div>
        </div>
      </ScheduleWrapper>
    );
  }
}

export default Schedule;
