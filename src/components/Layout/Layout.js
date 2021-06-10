import NavBar from "../NavBar";

import styled from "styled-components";

const NavContainer = styled.div`
  height: 58px;
  width: 1170px;
  margin: 0px auto;

  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 600;

  @media (max-width: 1250px) {
    width: 95%;
  }
`;

const Header = styled.header`
  z-index: 2;
  position: fixed;
  top: 0px;
  width: 100%;
  background-color: white;
`;

const Main = styled.main`
  padding-top: 58px;
`;

const Layout = (props) => {
  return (
    <>
      <Header>
        <NavContainer>
          <NavBar />
        </NavContainer>
      </Header>
      <Main>{props.children}</Main>
    </>
  );
};

export default Layout;
