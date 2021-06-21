import { useState } from "react";
import styled from "styled-components";

import CompanyButton from "./NavButtonButtons/CompanyButton";
import ExecutivePositionsButton from "./NavButtonButtons/ExecutivPositionsButton";
import LogInNSignInButton from "./NavButtonButtons/LogInNSignInButton";
import NewsBlogButton from "./NavButtonButtons/NewsBlogButton";
import PublishForFreeButton from "./NavButtonButtons/PublishForFreeButton";

import DropDownNavBar from "../Dropdowns/DropDownNavBar";

import classes from "./navBar.module.css";

const NavigationBar = styled.nav`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const PageLogoButton = styled.a`
  flex-shrink: 0;
`;

const PageLogo = styled.img`
  width: 90px;
`;

const NavButtons = styled.div`
  display: inline-flex;
  flex-direction: row;
  margin-left: auto;
  align-items: center;
`;

const OptionButtonsContainer = styled.div`
  margin-right: 15px;

  @media (max-width: 1010px) {
    display: none;
  }
`;

const SpecialButtonsContainer = styled.div`
  @media (max-width: 545px) {
    display: none;
  }
`;

const NavBarSeparator = styled.div`
  display: none;
  width: 10px;

  @media (max-width: 1010px) {
    display: block;
  }
`;

const DropDownContainer = styled.div`
  position: absolute;
  background-color: white;
  top: 50px;
  right: 30px;
`;

const DropdownButton = styled.button`
  display: none;
  height: 40px;
  width: 40px;
  flex-shrink: 0;
  background-color: transparent;
  border: unset;
  padding: 0px;

  :hover {
    cursor: pointer;
  }

  @media (max-width: 1010px) {
    display: block;
  }
`;

const NavBar = () => {
  const [dropdownOpened, setDropdownOpened] = useState(false);

  return (
    <NavigationBar>
      <PageLogoButton href="/">
        <PageLogo src="https://imgzj.jobscdn.com/postulantes-assets/skins/zonajobs/commons/img/logo-zonajobs.svg" />
      </PageLogoButton>
      <NavButtons>
        <OptionButtonsContainer>
          <ExecutivePositionsButton
            className={classes.navBarButton + " " + classes.navBarOptionButton}
          />
          <NewsBlogButton
            className={classes.navBarButton + " " + classes.navBarOptionButton}
          />
          <CompanyButton
            className={classes.navBarButton + " " + classes.navBarOptionButton}
          />
        </OptionButtonsContainer>
        <SpecialButtonsContainer>
          <PublishForFreeButton
            className={classes.navBarButton + " " + classes.navBarPublishButton}
          ></PublishForFreeButton>
          <LogInNSignInButton
            className={classes.navBarButton + " " + classes.navBarLogInButton}
          ></LogInNSignInButton>
        </SpecialButtonsContainer>
      </NavButtons>
      <NavBarSeparator />
      <DropdownButton onClick={() => setDropdownOpened(!dropdownOpened)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="#000000"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </DropdownButton>
      {dropdownOpened && (
        <DropDownContainer>
          <DropDownNavBar />
        </DropDownContainer>
      )}
    </NavigationBar>
  );
};

export default NavBar;
