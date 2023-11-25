import React from "react";
import { styled } from "styled-components";
import pattern1 from "../images/pattern-1.jpg";
import pattern2 from "../images/pattern-2.jpg";
import pattern3 from "../images/pattern-3.jpg";
import pattern4 from "../images/pattern-4.jpg";
import pattern5 from "../images/pattern-5.jpg";
import pattern6 from "../images/pattern-6.jpg";
import pattern7 from "../images/pattern-7.jpg";
import pattern8 from "../images/pattern-8.jpg";
import pattern9 from "../images/pattern-9.jpg";
import { BiExpandAlt } from "react-icons/bi";

export default function InstaPost() {
  const images = [
    {
      image: ` ${pattern1}`,
    },
    {
      image: ` ${pattern2}`,
    },
    {
      image: ` ${pattern3}`,
    },
    {
      image: ` ${pattern4}`,
    },
    {
      image: ` ${pattern5}`,
    },
    {
      image: ` ${pattern6}`,
    },
    {
      image: ` ${pattern7}`,
    },
    {
      image: ` ${pattern8}`,
    },
    {
      image: ` ${pattern9}`,
    },
  ];
  return (
    <>
      <ImageGrid>
        {images.map((index) => (
          <div key="index">
            <img src={index.image} alt="" />
            <span title="view">
              <BiExpandAlt color="#fff" />
            </span>
          </div>
        ))}
      </ImageGrid>
    </>
  );
}

const ImageGrid = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  div {
    position: relative;

    &:hover span {
      display: block;
    }

    img {
      width: 350px;
      height: 350px;
      object-fit: cover;
      border-radius: 5px;
      transition: 0.3s;
    }
    span {
      display: none;
      color: #000;
      position: absolute;
      bottom: 20px;
      right: 20px;
      background: #00000041;
      padding: 5px;
      border-radius: 50%;
      border: 1px solid #b3b3b3d7;
      backdrop-filter: blur(10px);
      padding: 10px 10px 7px 10px;
      cursor: pointer;
    }
  }
`;
