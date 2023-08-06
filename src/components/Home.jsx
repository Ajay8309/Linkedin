import React from "react";
import styled from "styled-components";
import Header from "./Header";
const Home = (props) => {
  return (
    <>
      <Header />
      <Container>
        <Section>
          <h5>Hiring in a Hurry-</h5>
          <p>
            Find Talented Pros in record time with upwork and Keep Bussines
            Moving
          </p>
        </Section>
        <Layout>
          <div>left</div>
          <div>Middle</div>
          <div>right</div>
        </Layout>
      </Container>
    </>
  );
};

const Container = styled.div`
  padding-top: 3rem;
  max-width: 100%;
`;
const Section = styled.div`
  min-height: 50px;
  padding: 16px 0;
  box-sizing: content-box;
  text-align: center;
  text-decoration: underline;
  display: flex;
  justify-content: center;

  h5 {
    color: #0a66c2;
    font-size: 14px;

    a {
      font-weight: 700;
    }
  }

  p {
    font-size: 14px;
    color: #434649;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`;

const Layout = styled.div``;
export default Home;
