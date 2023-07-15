import React, { Component } from "react";
import { styled } from "styled-components";
import profile from "../images/PROFILE-PIC.png";
import arrow from "../images/blue-arrow-md.png";
import string from "../images/blue-string.png";
import star2 from "../images/second-blue-star.png";
import star from "../images/blue-star.png";
import designW from "../images/word-design.png";
import About from "./About";

export default class Home extends Component {
  render() {

    return (
      <>
        <HomePage>
          <img className="extra arrow" src={arrow} alt="arrow" />
          <img className="extra string" src={string} alt="arrow" />
          <img className="extra star2" src={star2} alt="star" />
          <img className="extra star" src={star} alt="star" />
          <img className="extra designW" src={designW} alt="design" />
          <HomeHeroText>
            {/* <PlayBubble1></PlayBubble1> */}
            <div>
              <span>Eye-catching</span>
              <span>Designs</span>
            </div>
            {/* <PlayBubble2></PlayBubble2> */}
          </HomeHeroText>
          <HomeMainContainer>
            <HomeProfileContainer>
              <HomeProfile>
                <img src={profile} alt="profile" />
                <span>samuel shadrach</span>
              </HomeProfile>
              <HomeContact>
                <a href="https://instagram.com/s.s_graphiks" target="_blank" rel="noopener noreferrer">
                  <span>
                    <i className="fi fi-brands-instagram"></i>
                  </span>
                  <span>Instagram</span>
                </a>
                <a href="https://wa.me/+2348169349195" target="_blank" rel="noopener noreferrer">
                  <span>
                    <i className="fi fi-brands-whatsapp"></i>
                  </span>
                  <span>WhatsApp</span>
                </a>
                <a href="https://t.me/shedy101" target="_blank" rel="noopener noreferrer">
                  <span>
                    <i className="fi fi-brands-telegram"></i>
                  </span>
                  <span>Telegram</span>
                </a>
              </HomeContact>
            </HomeProfileContainer>

            <HomeQuotes>
              <div>
                <RightQuote>
                  <i className="fi fi-bs-quote-right"></i>
                </RightQuote>
                <QuoteContact>
                  Design is not just an art, its a lifestyle.
                </QuoteContact>
                <LeftQuote>
                  <i className="fi fi-bs-quote-right"></i>
                </LeftQuote>
                <br />
                <Shadrach>-S.S Graphics</Shadrach>
              </div>
            </HomeQuotes>
          </HomeMainContainer>
          <Scroll>
            <div>
              <span>scroll down</span>
              <span>
                <i className="fi fi-tr-arrow-small-down"></i>
              </span>
            </div>
          </Scroll>
        </HomePage>
        <About />
      </>
    );
  }
}

const HomePage = styled.div`
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(
    to left top,
    rgb(0, 7, 68),
    #000f92,
    #389fe1
  );
  padding-bottom: 10px;
`;

const HomeHeroText = styled.div`
  font-size: 8rem;
  font-weight: 800;
  align-items: center;
  display: flex;
  justify-content: center;
  height: 50vh;
  margin-top: 20px;
  z-index: 1;
  @media (max-width: 768px) {
    font-size: 4.5rem;
    font-weight: 650;
    margin-top: 5px;
    margin-bottom: 20px;
  }

  div {
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;

    span {
      text-shadow: -10px 10px 0px rgba(219, 219, 219, 0.150);
      font-family: "Bebas Neue", sans-serif;
      z-index: 1;
      letter-spacing: 5px;

      @media (max-width: 768px) {
        text-shadow: -7px 7px 0px rgba(219, 219, 219, 0.150);
      letter-spacing: 2px;

      }
    }
    
  }
`;
// const PlayBubble1 = styled.div`
//   /* backdrop-filter: blur(3px); */
//   height: 700px;
//   width: 700px;
//   border: 1px solid rgba(219, 219, 219, 0.432);
//   position: absolute;
//  border-radius: 49% 51% 55% 45% / 30% 55% 45% 70%;
//   animation: 10s bubble1 linear infinite;
//   /* @media (max-width: 768px) {
//     height: 70px;
//     width: 70px;
//   } */

//   @keyframes bubble1 {
//     0% {
//       left: 0%;
//       top: 0%;
//       transform:rotate(0)
//     }
//     50% {
//       left: 0%;
//       top: 0%;
//     }
//     100% {
//       left: 0%;
//       top: 0%;
//       transform:rotate(360deg)

//     }
//   }
// `;
// const PlayBubble2 = styled.div`
//   /* backdrop-filter: blur(3px); */
//   height: 500px;
//   width: 500px;
//   border: 1px solid rgba(219, 219, 219, 0.432);
//   position: absolute;
//   bottom: 20%;
//   border-radius: 65% 35% 67% 33% / 47% 73% 27% 53% ;
//   animation: 10s bubble2 linear infinite;
//   /* @media (max-width: 768px) {
//     height: 70px;
//     width: 70px;
//   } */

//   @keyframes bubble2 {
//     0% {
//       right: 0%;
//       bottom: -30%;
//       transform:rotate(0deg)

//     }
//     50% {
//       right: 0%;
//       bottom: -30%;
//     }
//     100% {
//       right: 0%;
//       bottom: -30%;
//       transform:rotate(360deg)

//     }

//   }
// `;
const HomeMainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2% 3%;
  z-index: 1;
  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    gap: 20px;
  }
`;
const HomeProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  z-index: 1;
`;
const HomeProfile = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(119, 130, 230, 0.068);
  gap: 20px;
  padding: 20px 10px;
  background-image: linear-gradient(
    258deg,
    rgb(95, 33, 17, 0.342),
    rgba(14, 14, 68, 0.142)
  );
  align-items: center;
  border-radius: 5px;
  z-index: 1;
  backdrop-filter: blur(5px);
  width: fit-content;

  img {
    width: 70px;
  }
  span {
    text-transform: capitalize;
    text-align: center;
  }
`;
const HomeContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  z-index: 2;
  border-left: 1px solid #ffffff32;
  padding: 0px 20px;

  a {
    display: flex;
    gap: 10px;
    align-items: center;
    transition: 0.5s ease;
    padding: 5px;
    border-radius: 5px;
  }
  a:hover {
    background: #8fa8cc41;
  }
  span:first-child {
    border-radius: 5px;
    font-size: 20px;
    padding: 5px 10px;
    background-image: linear-gradient(
      258deg,
      rgb(95, 33, 17, 0.342),
      rgba(14, 14, 68, 0.142)
    );
    display: grid;
    place-items: center;
    backdrop-filter: blur(5px);
    border: 1px solid rgba(119, 130, 230, 0.068);

    i {
      color: rgb(189, 195, 252);
    }
  }
`;
const HomeQuotes = styled.div`
  z-index: 2;
  @media (max-width: 768px) {
    width: auto;
    height: 15vh;
    background-image: linear-gradient(
      258deg,
      rgba(95, 19, 0, 0.2),
      rgba(14, 14, 68, 0.6)
    );
    backdrop-filter: blur(5px);
    display: flex;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    border: 1px solid rgba(119, 130, 230, 0.068);
  }
`;
const QuoteContact = styled.div`
  text-align: center;
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
const RightQuote = styled.div`
  transform: rotateZ(180deg);
  font-size: 20px;
  float: left;
  margin-top: -10px;
`;
const LeftQuote = styled.div`
  transform: rotateX(190deg);
  float: right;
  font-size: 20px;
`;
const Shadrach = styled.div`
  text-align: right;
  margin-top: 10px;
  font-size: 14px;
  color: rgba(219, 219, 219, 0.432);
`;
const Scroll = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
  div {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    span:first-child {
      color: rgba(153, 157, 189, 0.842);
    }
  }
`;
