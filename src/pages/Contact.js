import React, { Component } from "react";
import {
  BiEnvelope,
  BiLogoInstagram,
  BiLogoTelegram,
  BiLogoWhatsapp,
  BiMap,
  BiPhone,
} from "react-icons/bi";
import { styled } from "styled-components";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <ContactPage>
          <div className="ContactPageBackground">
            <Title>Contact</Title>
          </div>
          <ContactContainer>
            <ContactForm>
              <span>get in touch</span>
              <form>
                <input type="text" placeholder="full name" required />
                <input type="email" placeholder="email" required />
                <textarea
                  name=""
                  id=""
                  placeholder="message"
                  cols="50"
                  rows="5"
                ></textarea>
                <div>
                  <button>send</button>
                </div>
              </form>
            </ContactForm>
            <ContactList>
              <div className="contactIllustration">
                <SocialList>
                  <div>
                    <span>
                      <BiPhone />
                    </span>
                    <span>(+234) 8169349195</span>
                  </div>
                  <div>
                    <span>
                      <BiEnvelope />
                    </span>
                    <span>samuelshadrach92@gmail.com</span>
                  </div>
                  <div>
                    <span>
                      <BiMap />
                    </span>
                    <span>Ikeja Lagos, Nigeria.</span>
                  </div>
                </SocialList>
                <SocialHolder>
                  <a
                    href="https://instagram.com/s.s_graphiks"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>
                      <BiLogoInstagram size="20" color="#fff" />
                    </span>
                  </a>

                  <a
                    href="https://wa.me/+2348169349195"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>
                      <BiLogoWhatsapp size="20" color="#fff" />
                    </span>
                  </a>

                  <a
                    href="https://t.me/shedy101"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>
                      <BiLogoTelegram size="20" color="#fff" />
                    </span>
                  </a>
                </SocialHolder>
              </div>
            </ContactList>
          </ContactContainer>
        </ContactPage>
      </div>
    );
  }
}

const ContactPage = styled.div`
  background-image: linear-gradient(rgb(236, 236, 255), #fff);
  padding: 2% 4%;
  color: #000;
`;
const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: #353535;
`;
const ContactContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const ContactForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 50%;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
  span {
    font-size: 17px;
    color: rgb(7, 7, 80);
    text-transform: capitalize;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    input {
      width: 80%;
      outline: none;
      padding: 10px;
      color: #000;
      border-radius: 5px;
      border: 1px solid rgb(7, 7, 80, 0.4);
      @media (max-width: 768px) {
        width: 90%;
      }
    }
    textarea {
      resize: none;
      outline: none;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid rgb(7, 7, 80, 0.4);
      color: #000;
      width: 80%;
      @media (max-width: 768px) {
        width: 90%;
      }
    }
    div {
      text-align: center;
      place-items: center;
      display: grid;
      button {
        width: fit-content;
        background-color: rgb(7, 7, 80);
        outline: none;
        padding: 10px 30px;
        text-transform: capitalize;
        border-radius: 5px;
        border: 1px solid rgb(7, 7, 80);
        cursor: pointer;
        color: #fff;
        box-shadow: 1px 2px 10px 2px rgba(0, 0, 0, 0.685);
      }
    }
  }
`;
const ContactList = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const SocialList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  div {
    display: flex;
    align-items: center;
    gap: 10px;
    span {
      color: #fff;
    }
    span:nth-child(1) {
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

const SocialHolder = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  color: black;
  margin-top: 20px;

  a {
    color: black;
    display: flex;
    align-items: center;
    gap: 10px;

    span {
      padding: 10px 10px 5px 10px;
      border-radius: 5px;
      background-color: rgb(7, 7, 80);
    }
  }
`;
