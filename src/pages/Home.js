import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import profile from "../images/PROFILE-PIC.png";
import {
  BiArrowToBottom,
  BiLogoInstagram,
  BiLogoTelegram,
  BiLogoWhatsapp,
  BiSolidQuoteAltLeft,
  BiSolidQuoteAltRight,
} from "react-icons/bi";

export default function Home() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <HomePage>
        <FollowCursor style={{ left: cursorPosition.x, top: cursorPosition.y }}>
          <div></div>
          <div></div>
          <div></div>
        </FollowCursor>
        <HomeMainContainer>
          <HomeProfileContainer>
            <HomeProfile>
              <img src={profile} alt="profile" />
              <span>samuel shadrach</span>
            </HomeProfile>
            <HomeContact>
              <a
                href="https://instagram.com/s.s_graphiks"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BiLogoInstagram size="20" />
                <span>Instagram</span>
              </a>
              <a
                href="https://wa.me/+2348169349195"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BiLogoWhatsapp size="20" />
                <span>WhatsApp</span>
              </a>
              <a
                href="https://t.me/shedy101"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BiLogoTelegram size="20" />
                <span>Telegram</span>
              </a>
            </HomeContact>
          </HomeProfileContainer>

          <HomeQuotes>
            <div>
              <BiSolidQuoteAltLeft />
              <span>Design is not just an art, its a lifestyle.</span>
              <BiSolidQuoteAltRight />
            </div>
            <div>
              <span>-S.S Graphics</span>
            </div>
          </HomeQuotes>
        </HomeMainContainer>
        <Scroll>
          <span>scroll down</span>
          <BiArrowToBottom />
        </Scroll>
      </HomePage>
    </>
  );
}

const FollowCursor = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: transform 0.1s ease-out;
  filter: blur(20px);
  &:hover {
    transform: scale(1.5);
  }
  div:nth-child(1) {
    width: 100px;
    height: 100px;
    background-color: #003da78d;
    position: absolute;
    border-radius: 50%;
    top: 40px;
  }
  div:nth-child(2) {
    width: 100px;
    height: 100px;
    background-color: #03125783;
    border-radius: 50%;
    position: absolute;
    top: 20px;
    left: 20px;
  }
  div:nth-child(3) {
    width: 100px;
    height: 100px;
    background-color: #38a0e157;
    border-radius: 50%;
    position: absolute;
    top: 20px;
  }
`;
const HomePage = styled.div`
  height: 85vh;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;
const HomeMainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2% 3%;
  width: 100%;
  /* border: 1px solid red; */

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
    rgba(95, 19, 0, 0.2),
    rgba(14, 14, 68, 0.6)
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
    color: #fff;
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
    color: #fff;

    &:hover {
      background: #8fa8cc41;
    }
  }
`;
const HomeQuotes = styled.div`
  width: auto;
  background-image: linear-gradient(
    258deg,
    rgba(95, 19, 0, 0.2),
    rgba(14, 14, 68, 0.6)
  );
  backdrop-filter: blur(7px);
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  padding: 10px 20px;
  border: 1px solid rgba(119, 130, 230, 0.068);
  gap: 10px;

  div:nth-child(1) {
    text-align: center;
    gap: 5px;
    display: flex;
    color: #fff;
    font-size: 16px;
  }
  div:nth-child(2) {
    display: flex;
    justify-content: flex-end;
    span {
      font-size: 14px;
      font-weight: 600;
      color: #ffffff9f;
    }
  }
`;
const Scroll = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 14px;
  color: #ffffff9f;

  @media (max-width: 768px) {
    display: none;
  }
`;
