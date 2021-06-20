import FilteringOptionsGroup from "../FilteringOptionsGroup";
import styled from "styled-components";

const NavForFilteringContent = styled.div`
  background-color: white;
  padding: 0px 10px;
  flex-shrink: 0;
  height: 100%;

  @media (max-width: 700px) {
    display: none;
  }
`;

const NavForFiltering = ({ filterGroupName }) => {
  return (
    <NavForFilteringContent>
      <FilteringOptionsGroup filterGroupName={filterGroupName} />
      <FilteringOptionsGroup filterGroupName={filterGroupName} />
      <FilteringOptionsGroup filterGroupName={filterGroupName} />
    </NavForFilteringContent>
  );
};

export default NavForFiltering;
