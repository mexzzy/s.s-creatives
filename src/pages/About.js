import React from "react";
import { styled } from "styled-components";
import designW from "../images/word-design.png";
import img1 from "../images/image-1.png";
import img2 from "../images/image-2.jpg";
import img3 from "../images/image-3.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";

export default function About() {
  return (
    <>
      <AboutPage>
        <Title>About</Title>
        <Paragraph>
          <div>
            <span>
              <span>S.S Graphics </span>
              is a brand that aims at transforming your ideas into visually
              captivating designs, combining talent, innovation, and a passion
              for aesthetics to deliver remarkable results. With designs done
              for 30+ brands and years of experience in the design field, we are
              capable of elevating brands sales, activity,and outlook with our
              eye-catching designs. So what are you waiting for? Let's get
              designing!
            </span>
          </div>
          <img src={designW} alt="logo" />
        </Paragraph>
        <BrandColor>
          <SubTitle>brand color</SubTitle>
          <ColorBoardCombine>
            <ColorBlock>
              <Color>
                <i class="fi fi-rr-fill"></i>
              </Color>
              <ColorContainer>
                <div>
                  <div>
                    <i class="fi fi-rr-eye-dropper"></i>
                  </div>
                  <span>#389FE1</span>
                </div>
                <div>
                  <div>
                    <i class="fi fi-rr-eye-dropper"></i>
                  </div>
                  <span>#003DA7</span>
                </div>
                <div>
                  <div>
                    <i class="fi fi-rr-eye-dropper"></i>
                  </div>
                  <span>#031357</span>
                </div>
              </ColorContainer>
            </ColorBlock>
            <ColorDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              unde, minus magnam laboriosam similique eaque assumenda. Quam
              cupiditate quisquam ab error quidem tenetur facere accusamus
              numquam atque! Neque quia et animi enim? Deserunt nemo architecto
              deleniti labore reiciendis distinctio dolore, autem enim harum
              consectetur fuga, odio, cupiditate excepturi ducimus adipisci sint
              sapiente rem eum sequi illum! Eos fugit quos fuga molestiae
              accusantium nam placeat, atque voluptatum illum beatae dolorem
              earum?
            </ColorDescription>
          </ColorBoardCombine>
        </BrandColor>
        <LogoDescription>
          <SubTitle>logo description</SubTitle>
          <LogoContainer>
            <div>
              <LogoParagraph>
                Lorem ipsum dolor ad dolores eaque a minima libero distinctio
                omnis, voluptatibus dolore maxime! Sequi assumenda nemo cumque
                voluptates facere soluta ad pariatur aliquid eius. Unde, porro
                debitis suscipit numquam, veniam non cumque totam repellat
                minima deleniti explicabo! Temporibus, placeat laborum
                perspiciatis et ipsam, consequuntur id reprehenderit, officiis
                eligendi optio laudantium! Porro impedit itaque odit vitae
              </LogoParagraph>
              <SloganAndCoreValue>
                <SubTitle>slogan and core values</SubTitle>
                <TabContainer>
                  <Slogan>
                    <span>slogan: </span>Lorem ipsum dolor sit amet.
                  </Slogan>
                  <Core>
                    <span>core values: </span>Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Asperiores blanditiis
                    excepturi nostrum velit reprehenderit officiis eos adipisci
                    architecto aliquam quam.
                  </Core>
                </TabContainer>
              </SloganAndCoreValue>
            </div>
            <LogoCarousel>
              <Carousel>
                <div>
                  <img src={img1} alt="graphics-1" />
                </div>
                <div>
                  <img src={img2} alt="graphics-1" />
                </div>
                <div>
                  <img src={img3} alt="graphics-1" />
                </div>
              </Carousel>
            </LogoCarousel>
          </LogoContainer>
        </LogoDescription>
        <Services>
          <SubTitle>services</SubTitle>
          <ServicesContainer>
            <ServiceList>
              <div>
                <Number>1</Number>
                <div>
                  <span>Brand Collateral Design </span>
                  <span>
                    Developing marketing collateral materials like business
                    cards, letterheads, envelopes, and brand-specific templates.
                  </span>
                </div>
              </div>
              <div>
                <Number>2</Number>
                <div>
                  <span>Infographic Design </span>
                  <span>
                    Creating visually appealing and informative infographics to
                    present complex data or information in a more accessible
                    format.
                  </span>
                </div>
              </div>
              <div>
                <Number>3</Number>
                <div>
                  <span>Packaging Design </span>
                  <span>
                    Designing product packaging that is visually appealing,
                    functional, and aligned with the brand identity.
                  </span>
                </div>
              </div>
              <div>
                <Number>4</Number>
                <div>
                  <span>Logo Design</span>
                  <span>
                    Creating unique and memorable logos that represent a brand's
                    identity.
                  </span>
                </div>
              </div>
              <div>
                <Number>5</Number>
                <div>
                  <span>Identity Design </span>
                  <span>
                    Developing a cohesive visual identity for a brand, including
                    the design of logos, color schemes, typography, and brand
                    guidelines.
                  </span>
                </div>
              </div>
            </ServiceList>
            <ServiceList>
              <div>
                <Number>6</Number>
                <div>
                  <span>Print Design </span>
                  <span>
                    Designing materials for print, such as business cards,
                    brochures, flyers, posters, packaging, and signage.
                  </span>
                </div>
              </div>
              <div>
                <Number>7</Number>
                <div>
                  <span>Illustration </span>
                  <span>
                    Creating custom illustrations, whether for print or digital
                    media, including editorial illustrations, character design,
                    icons, and vector graphics.
                  </span>
                </div>
              </div>
              <div>
                <Number>8</Number>
                <div>
                  <span>Motion Graphics </span>
                  <span>
                    Designing animated graphics, videos, and visual effects for
                    use in presentations, advertisements, explainer videos, and
                    more.
                  </span>
                </div>
              </div>
              <div>
                <Number>9</Number>
                <div>
                  <span>Digital Graphics </span>
                  <span>
                    Creating graphics for digital platforms, including social
                    media posts, banners, infographics, and digital
                    advertisements.
                  </span>
                </div>
              </div>
              <div>
                <Number>10</Number>
                <div>
                  <span>Image Editing </span>
                  <span>
                    Enhancing and retouching images, adjusting colors, removing
                    backgrounds, and optimizing images for various platforms.
                  </span>
                </div>
              </div>
            </ServiceList>
          </ServicesContainer>
        </Services>
      </AboutPage>
    </>
  );
}
// STYLED COMPONENT

const AboutPage = styled.div`
  height: 100%;
  width: auto;
  padding: 10px 4%;
  color: #000 !important;
  background: #fff;
`;
const Title = styled.h1`
  /* text-align: center; */
  font-size: 30px;
  font-weight: bold;
  color: #000 !important;
`;
// PARAGRAPH
const Paragraph = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #4454697c;

  div {
    width: 75%;
    @media (max-width: 768px) {
      width: 100%;
    }
    span {
      color: #000;

      span {
        color: rgb(7, 7, 80);
        font-size: 18px;
        font-weight: 600;
      }
    }
  }

  img {
    width: 150px;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
// BRAND COLOR
const BrandColor = styled.div`
  margin: 10px 0;
`;
const SubTitle = styled.div`
  text-transform: capitalize;
  font-size: 20px;
  font-weight: 600;
  color: rgb(7, 7, 80) !important;
  background-color: rgba(14, 14, 68, 0.2);
  width: fit-content;
  padding: 10px;
  border-radius: 5px;
`;
const ColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  div:nth-child(1) {
    border: 1px solid rgba(189, 195, 252, 0.5);
    padding: 5px;
    border-radius: 5px;
    display: flex;
    gap: 10px;
    box-shadow: 1px 1px 7px 1px rgba(29, 29, 31, 0.092);

    div {
      height: 50px;
      width: 50px;
      background-color: #389fe1;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    span {
      color: #000;
      place-items: center;
      display: flex;
    }
  }
  div:nth-child(2) {
    border: 1px solid rgba(189, 195, 252, 0.5);
    padding: 5px;
    border-radius: 5px;
    display: flex;
    gap: 10px;
    align-items: center;
    box-shadow: 1px 1px 7px 1px rgba(29, 29, 31, 0.092);

    div {
      height: 50px;
      width: 50px;
      background-color: #000f92;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    span {
      color: #000;
      text-align: center;
    }
  }
  div:nth-child(3) {
    border: 1px solid rgba(189, 195, 252, 0.5);
    padding: 5px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 10px;
    box-shadow: 1px 1px 7px 1px rgba(29, 29, 31, 0.092);

    div {
      height: 50px;
      width: 50px;
      background-color: rgb(0, 7, 68);
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    span {
      color: #000;
      text-align: center;
    }
  }
`;
const ColorBlock = styled.div`
  display: flex;
  gap: 10px;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Color = styled.div`
  background-image: linear-gradient(
    to left top,
    rgb(0, 7, 68),
    #000f92,
    #389fe1
  );
  width: 100%;
  height: auto;
  padding: 10px;
  border-radius: 5px;
`;
const ColorBoardCombine = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px 0;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const ColorDescription = styled.div`
  color: #000;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
// LOGO DESCRIPTION
const LogoDescription = styled.div`
  margin: 10px 0;
`;
const LogoContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px 0;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  div {
    display: flex;
    gap: 10px;
    flex-direction: column;
  }
`;
const LogoParagraph = styled.div`
  width: 70%;
  color: #000;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const LogoCarousel = styled.div`
  width: 80%;
  color: red;
  @media (max-width: 768px) {
    width: 100%;
    display: grid;
    place-items: center;
  }
`;
const SloganAndCoreValue = styled.div`
  div {
    color: #000;
  }
`;
const TabContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  flex-direction: column;
`;
const Slogan = styled.div`
  color: #000;

  span {
    color: rgb(7, 7, 80);
    font-size: 18px;
    font-weight: 600;
  }
`;
const Core = styled.div`
  color: #000;

  span {
    color: rgb(7, 7, 80);
    font-size: 18px;
    font-weight: 600;
  }
`;
const Services = styled.div``;
const ServicesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const ServiceList = styled.div`
  color: #000 !important;
  display: flex;
  gap: 20px;
  flex-direction: column;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
  div {
    color: #000;
    display: flex;
    gap: 5px;
    align-items: flex-start;

    div {
      display: flex;
      align-items: flex-start;

      span:first-child {
        color: rgb(7, 7, 80);
        font-weight: 600;
        flex: 1;
      }
      span:last-child{
        color: #000;
        flex: 2;
      }
    }
  }
`;
const Number = styled.div`
  background: rgb(0, 7, 68, 0.863); 
  color: #fff !important;
  padding: 10px 15px;
  border-radius: 20px;
  width: fit-content;
  scale: 0.8;
`;
