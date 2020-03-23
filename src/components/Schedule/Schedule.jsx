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
    ${tw`text-center md:text-left uppercase leading-tight font-sans font-bold mb-0 mt-0 text-2xl text-white`};
    color: #9bd675;
  }

  .full-description {
    ${tw`w-full flex flex-row flex-wrap items-stretch justify-between text-xl leading-normal font-sans text-white`};
  }

  .card {
    ${tw`w-48p md:w-1/5 bg-white text-black p-2 md:p-5 text-center font-sans bg-white relative`};
    margin-bottom: 20px;

    .session-number {
      ${tw`font-semibold font-sans text-2xl`};
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
          <div className="full-description">

            <div className="card">
              <h3 className="session-number">Class 1</h3>
              <p className="session-name">Intro to HTML</p>
              <p className="session-date">Tuesday, March 31st from 7:00pm to 9:00pm EST</p>
            </div>

            <div className="card">
              <h3 className="session-number">Class 2</h3>
              <p className="session-name">Intro to CSS</p>
              <p className="session-date">Thursday, April 2nd from 7:00pm to 9:00pm EST</p>
            </div>

            <div className="card">
              <h3 className="session-number">Class 3</h3>
              <p className="session-name">Semantic HTML</p>
              <p className="session-date">Tuesday, April 7th from 7:00pm to 9:00pm EST</p>
            </div>

            <div className="card">
              <h3 className="session-number">Class 4</h3>
              <p className="session-name">CSS Layout</p>
              <p className="session-date">Thursday, April 9th from 7:00pm to 9:00pm EST</p>
            </div>
          </div>
        </div>
      </ScheduleWrapper>
    );
  }
}

export default Schedule;
