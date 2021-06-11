import styled from "styled-components";

import FilteringRow from "../FilteringRow";

const FilterGroupName = styled.span`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
`;

const FilteringRowList = styled.ul`
  padding: 0px;
`;

const FilteringOptionsGroupContent = styled.div`
  width: 210px;
  border-top: 2px solid #dbdbdb;
  padding-top: 10px;

  :first-child {
    border-top: unset;
  }
`;

const FilteringOptionsGroup = ({ filterGroupName }) => {
  return (
    <FilteringOptionsGroupContent>
      <FilterGroupName>{filterGroupName}</FilterGroupName>
      <FilteringRowList>
        <FilteringRow filterName="Ayer" numberOfMatches="5" />
        <FilteringRow filterName="Hoy" numberOfMatches="10" />
        <FilteringRow filterName="Mañana" numberOfMatches="15" />
        <FilteringRow filterName="La otra semana" numberOfMatches="20" />
        <FilteringRow filterName="El otro mes" />
        <FilteringRow filterName="El otro año" />
      </FilteringRowList>
    </FilteringOptionsGroupContent>
  );
};

export default FilteringOptionsGroup;
