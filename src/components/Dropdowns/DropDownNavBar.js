import styled from "styled-components";

import CompanyButton from "../NavBar/NavButtonButtons/CompanyButton";
import ExecutivePositions from "../NavBar/NavButtonButtons/ExecutivPositionsButton";
import LogInNSignInButton from "../NavBar/NavButtonButtons/LogInNSignInButton";
import NewsBlogButton from "../NavBar/NavButtonButtons/NewsBlogButton";
import PublishForFreeButton from "../NavBar/NavButtonButtons/PublishForFreeButton";

import classes from "./DropDownNavBar.module.css";

const DropDownContent = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #dbdbdb;
`;

const DropDownNavBar = () => {
  return (
    <DropDownContent>
      <ExecutivePositions className={classes.dropDownButton} />
      <NewsBlogButton className={classes.dropDownButton} />
      <CompanyButton className={classes.dropDownButton} />
      <PublishForFreeButton className={classes.dropDownButton} />
      <LogInNSignInButton className={classes.dropDownButton} />
    </DropDownContent>
  );
};

export default DropDownNavBar;
