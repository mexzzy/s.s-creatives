import { styled } from "styled-components";

const Page404 = () => {
  return (
    <>
      <ErrorPage>
        <div className="errorPage">
          <div>Opps! page not found.</div>
        </div>
      </ErrorPage>
    </>
  );
};

export default Page404;

const ErrorPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fff;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    padding: 10px;
    border-radius: 5px;
    background-color: #ffffff2f;
    font-size: 20px;
  }
`;
