import { styled } from "styled-components";

import image404 from "../images/404-image.png";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <>
      <ErrorPage>
        <div><img src={image404} alt="404-error " /></div>
        <div>Opps! page not found. <Link to="/" className="Link404"><i className="fi fi-rr-arrow-small-left"></i>Back to home page</Link></div>
      </ErrorPage>
    </>
  );
};

export default Page404;

const ErrorPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  flex-direction: column;
  gap: 30px;
  background-color: #fff;

  div:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000;
    width: 100%;

    img {
      width: 50%;
      @media (max-width: 768px){
        width: 100%;
      }
    }
  }
  div:last-child{
    display: grid;
    place-items: center;
    color: #000 !important;
  font-weight: 600;
  font-size: 20px;

  }
`;