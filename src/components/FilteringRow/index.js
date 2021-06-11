import styled from "styled-components";

import { css } from "styled-components";

const fontSize = css`
  font-size: 14px;
`;

const FilterName = styled.a`
  ${fontSize}
  display: inline-block;
  color: #585992;
  width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const NumberOfMatches = styled.span`
  ${fontSize}
  color: #8c8c8c;
  float: right;
`;

const FilteringRow = ({ filterName, numberOfMatches }) => {
  return (
    <li>
      <FilterName>{filterName}</FilterName>
      {numberOfMatches && (
        <NumberOfMatches>({numberOfMatches})</NumberOfMatches>
      )}
    </li>
  );
};

export default FilteringRow;
