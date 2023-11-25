import React, { useState } from "react";
import { styled } from "styled-components";
// sub pages
import Flyer from "../components/Flyer";
import InstagramPost from "../components/InstaPost";
import Logo from "../components/Logo";
import BusinessCard from "../components/BusinessCard";
import Carousel from "../components/Carousel";
import Brochures from "../components/Brochures";
import Branding from "../components/Branding";

export default function Works() {
  const [instagram, setInstagram] = useState(true);
  const [logo, setLogo] = useState(false);
  const [flyer, setFlyer] = useState(false);
  const [branding, setBranding] = useState(false);
  const [brochures, setBrochures] = useState(false);
  const [business, setBusiness] = useState(false);
  const [carousel, setCarousel] = useState(false);

  const [active, setActive] = useState("/instagram");

  const activeHandle = (activeSelect) => {
    setActive(activeSelect);
  };

  const instagramHandle = () => {
    setInstagram(true);
    setLogo(false);
    setFlyer(false);
    setBranding(false);
    setBrochures(false);
    setBusiness(false);
    setCarousel(false);
    activeHandle("/instagram");
  };
  const logoHandle = () => {
    setInstagram(false);
    setLogo(true);
    setFlyer(false);
    setBranding(false);
    setBrochures(false);
    setBusiness(false);
    setCarousel(false);
    activeHandle("/logo");
  };
  const flyerHandle = () => {
    setInstagram(false);
    setLogo(false);
    setFlyer(true);
    setBranding(false);
    setBrochures(false);
    setBusiness(false);
    setCarousel(false);
    activeHandle("/flyer");
  };
  //
  const brandingHandle = () => {
    setInstagram(false);
    setLogo(false);
    setFlyer(false);
    setBranding(true);
    setBrochures(false);
    setBusiness(false);
    setCarousel(false);
    activeHandle("/branding");
  };
  const brochuresHandle = () => {
    setInstagram(false);
    setLogo(false);
    setFlyer(false);
    setBranding(false);
    setBrochures(true);
    setBusiness(false);
    setCarousel(false);
    activeHandle("/brochures");
  };
  const businessHandle = () => {
    setInstagram(false);
    setLogo(false);
    setFlyer(false);
    setBranding(false);
    setBrochures(false);
    setBusiness(true);
    setCarousel(false);
    activeHandle("/business");
  };
  const carouselHandle = () => {
    setInstagram(false);
    setLogo(false);
    setFlyer(false);
    setBranding(false);
    setBrochures(false);
    setBusiness(false);
    setCarousel(true);
    activeHandle("/carousel");
  };
  return (
    <>
      <WorkPage>
        <div className="WorkPageBackground">
          <Title>Works</Title>
        </div>
        <WorkIntroText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia magni
          optio ipsa qui animi libero eveniet est? Rerum, tempore?
        </WorkIntroText>
        <WorkNav>
          <div
            className={`workNav ${
              active === "/instagram" ? "workNavActive" : ""
            }`}
            onClick={instagramHandle}
          >
            <span>Social Media designs </span>
          </div>
          <div
            className={`workNav ${active === "/logo" ? "workNavActive" : ""}`}
            onClick={logoHandle}
          >
            <span>logos</span>
          </div>
          <div
            className={`workNav ${active === "/flyer" ? "workNavActive" : ""}`}
            onClick={flyerHandle}
          >
            <span>flyers</span>
          </div>
          <div
            className={`workNav ${
              active === "/branding" ? "workNavActive" : ""
            }`}
            onClick={brandingHandle}
          >
            <span>branding</span>
          </div>
          <div
            className={`workNav ${
              active === "/brochures" ? "workNavActive" : ""
            }`}
            onClick={brochuresHandle}
          >
            <span>brochures</span>
          </div>
          <div
            className={`workNav ${
              active === "/business" ? "workNavActive" : ""
            }`}
            onClick={businessHandle}
          >
            <span>business</span>
            <span>card</span>
          </div>
          <div
            className={`workNav ${
              active === "/carousel" ? "workNavActive" : ""
            }`}
            onClick={carouselHandle}
          >
            <span>carousel</span>
          </div>
        </WorkNav>
        <WorkDisplay>
          {instagram && (
            <div>
              <InstagramPost />
            </div>
          )}
          {logo && (
            <div>
              <Logo />
            </div>
          )}
          {flyer && (
            <div>
              <Flyer />
            </div>
          )}
          {business && (
            <div>
              <BusinessCard />
            </div>
          )}
          {branding && (
            <div>
              <Branding />
            </div>
          )}
          {carousel && (
            <div>
              <Carousel />
            </div>
          )}
          {brochures && (
            <div>
              <Brochures />
            </div>
          )}
        </WorkDisplay>
      </WorkPage>
    </>
  );
}
const WorkPage = styled.div`
  background-image: linear-gradient(#fff 10%, rgb(255, 220, 248));
  padding: 10px 4%;
  color: #000;
`;
const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: #353535;
`;
const WorkNav = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    width: 100%;
    overflow-x: scroll;
  }

  div {
    box-shadow: 1px 1px 5px 1px #00000020;
    span {
      color: #000;
    }
  }
  @media (max-width: 768px) {
    font-size: 12px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;
const WorkDisplay = styled.div`
  padding: 10px;
  border-radius: 10px;
  margin-top: 10px;
  background-color: #fff;
  height: 70vh;
  border: 1px solid #8888887d;
  overflow-y: scroll;
  div {
    color: #000;
  }
`;
const WorkIntroText = styled.div`
  padding: 10px 0;
  color: #000;
`;
