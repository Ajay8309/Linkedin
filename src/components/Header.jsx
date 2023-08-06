import React from "react";
import styled from "styled-components";
import HomeLogo from "../assets/home-logo.svg";
import searchIcon from "../assets/search-icon.svg";
import NavHome from "../assets/nav-home.svg";
import MyNetwork from "../assets/nav-network.svg";
import navJobs from "../assets/nav-jobs.svg";
import navMessage from "../assets/nav-messaging.svg";
import navnNotification from "../assets/nav-notifications.svg";
import navWork from "../assets/nav-work.svg";
import DownIcon from "../assets/down-icon.svg";

const Header = (props) => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/Home">
            <img src={HomeLogo} alt="" />
          </a>
        </Logo>

        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <SearchIcon>
            <img src={searchIcon} alt="" />
          </SearchIcon>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList className="active">
              <a>
                <img src={NavHome} alt="" />
                <span>Home</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src={MyNetwork} alt="" />
                <span>My Network</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src={navJobs} alt="" />
                <span>Jobs</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src={navMessage} alt="" />
                <span>Messaging</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src={navnNotification} alt="" />
                <span>Notifications</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src={navWork} alt="" />
                <span>Work</span>
              </a>
              <img src={DownIcon} className="downArrow" alt="" />
            </NavList>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 5px 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
  /* justify-content: space-between; */
`;

const Logo = styled.a``;

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  max-width: 280px;
  margin-left: 1rem;

  div input {
    border: none;
    box-shadow: none;
    color: rgba(0, 0, 0, 0.9);
    background-color: #eef3f8;
    border-radius: 2px;
    width: 218px;
    padding: 0 8px 0 40px;
    line-height: 1.75;
    font-size: 14px;
    height: 34px;
    border-color: #dce6f1;
    vertical-align: text-top;
  }
`;
const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  transition: backgroun-color 0.15s;
  align-items: center;
`;

const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    /* display: none; */
    /* padding: 0 0; */
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style: none;

  .active {
    border-bottom: 4px solid black;
    /* span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s;
    } */
  }
`;
const NavList = styled.li`
  display: flex;
  align-items: center;

  .downArrow {
    margin-left: -1.5rem;
    margin-bottom: 1rem;
  }

  a {
    display: flex;
    align-items: center;
    background: transparent;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 42px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    cursor: pointer;

    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }

    @media (max-width: 768px) {
      min-width: 70px;
    }

    span:hover {
      color: rgba(0, 0, 0, 0.9);
    }
  }
`;

export default Header;
