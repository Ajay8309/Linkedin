import React from "react";
import styled from "styled-components";
import NavLogo from "../assets/LinkedinLogo.png";
import LoginHero from "../assets/login-hero.svg";
import GoogleLogo from "../assets/google.svg";
import { connect } from "react-redux";
import { SignUpAPI } from "../action";

const Login = (props) => {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src={NavLogo} className="nav_logo" alt="" />
        </a>
        <div className="rightNav">
          <Join>Join</Join>
          <SignIn>Sign In</SignIn>
        </div>
      </Nav>

      <Section>
        <Hero>
          <h1>Welcome to your professional community</h1>
          <img src={LoginHero} alt="" />
        </Hero>

        <Form>
          <Google onClick={() => props.SignIn()}>
            <img src={GoogleLogo} alt="" />
            Sign In with Google
          </Google>
        </Form>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  padding: 0px;
`;

const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0px 16px;
  align-items: center;
  position: relative;
  justify-content: space-between;
  display: flex;
  flex-wrap: nowrap;
  .nav_logo {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }

  .rightNav {
    display: flex;
    align-items: center;
  }
`;

const Join = styled.div`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
    cursor: pointer;
  }
`;

const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600px;
  line-height: 40px;
  padding: 8px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);

  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
    cursor: pointer;
  }
`;

const Section = styled.section`
  display: flex;
  align-content: start;
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;

  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

const Hero = styled.div`
  width: 100%;
  color: #2977c9;
  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    line-height: 70px;
    @media (max-width: 768px) {
      font-size: 20px;
      width: 100%;
      line-height: 2;
      text-align: center;
    }
  }

  img {
    /* z-index: -1; */
    width: 700px;
    height: 670px;
    position: absolute;
    bottom: -2px;
    right: -150px;

    @media (max-width: 768px) {
      top: 230px;
      width: initial;
      position: initial;
      height: initial;
    }
  }
`;

const Form = styled.form`
  margin-top: 100px;
  width: 408px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;
const Google = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  /* align-content: center; */
  background-color: #fff;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
  z-index: 0;
  vertical-align: middle;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  /* margin-left: 8%; */
  /* margin-right: 50%; */
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin-left: 8%;
  }
`;

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  SignIn: dispatch(SignUpAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
// export default Login;
