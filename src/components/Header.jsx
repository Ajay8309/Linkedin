import React from "react";
import { useState } from "react";
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
import userIcon from "../assets/user.png";
const Header = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const navListItems = [
    { icon: NavHome, label: "Home" },
    { icon: MyNetwork, label: "My Network" },
    { icon: navJobs, label: "Jobs" },
    { icon: navMessage, label: "Messaging" },
    { icon: navnNotification, label: "Notifications" },
  ];

  const handleNavItemClick = (index) => {
    setActiveIndex(index);
  };

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
            {navListItems.map((item, index) => (
              <NavList
                key={index}
                className={index === activeIndex ? "active" : ""}
              >
                <a onClick={() => handleNavItemClick(index)}>
                  <img src={item.icon} alt="" />
                  <span className="sp">{item.label}</span>
                </a>
              </NavList>
            ))}

            <User>
              <a>
                <img src={userIcon} alt="" />
                <span>
                  Me
                  <img src={DownIcon} alt="" />
                </span>
              </a>
              <SignOut>
                <a>SignOut</a>
              </SignOut>
            </User>

            <Work>
              <a>
                <img src={navWork} alt="" />
                <span>
                  Work
                  <img src={DownIcon} alt="" />
                </span>
              </a>
            </Work>
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
    border-bottom: 2px solid black;
    transform: scaleX(1);
    transition: transform 0.2s;

    /* .sp:after {
      content: " ";
      position: absolute;
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
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

const SignOut = styled.div`
  position: absolute;
  top: 45px;
  background-color: white;
  border-radius: 5px;
  width: 100px;
  height: 40px;
  font-size: 15px;
  transition-duration: 167ms;
  text-align: center;
  display: none;
`;

const User = styled(NavList)`
  &:hover {
    ${SignOut} {
      /* align-items: center;
      display: flex;
      justify-content: center; */
      display: block;
    }
  }
`;

const Work = styled(User)`
  border-left: 1px solid grey;
`;

export default Header;
