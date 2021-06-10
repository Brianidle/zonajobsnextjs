import styled from "styled-components";

const SearchBarContent = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: white;
  border-radius: 20px;
  margin: auto 0px;
`;

const JobInput = styled.input`
  background-color: transparent;
  border: 0px;
  min-width: 205px;
  width: 100%;
  height: 32px;
  margin-left: 10px;
`;

const SearchBarSeparator = styled.div`
  color: #aeadae;
  font-size: 30px;
  font-weight: 900;
  position: relative;
  bottom: 3px;
`;

const LocationSearchBar = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  margin-left: 5px;
`;

const LocationBarLabel = styled.label`
  color: #aeadae;
  flex-shrink: 0;
`;

const LocationInput = styled.input`
  background-color: transparent;
  border: 0px;
  height: 32px;
  padding: 0px 8px;
  margin-right: 2px;
  min-width: 180px;
`;

const DropdownButton = styled.button`
  position: relative;
  padding: 0px;
  flex-shrink: 0;
  margin-right: 10px;
  background-color: transparent;
  border: unset;

  :hover {
    cursor: pointer;
  }
`;

const SearchButton = styled.button`
  background-color: #fe633f;
  border: unset;
  border-radius: 30px;
  height: 32px;
  width: 32px;
  flex-shrink: 0;
  padding: 0px;
  margin-right: 10px;

  :hover {
    cursor: pointer;
  }
`;

const SearchBar = () => {
  return (
    <SearchBarContent>
      <JobInput placeholder="Puesto, Empresa, o Palabra Clave" />
      <SearchBarSeparator>|</SearchBarSeparator>
      <LocationSearchBar>
        <LocationBarLabel> En: </LocationBarLabel>
        <LocationInput placeholder="Lugar de Trabajo" />
        <DropdownButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#5a595a"
            viewBox="0 0 16 16"
          >
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
        </DropdownButton>
        <SearchButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="white"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </SearchButton>
      </LocationSearchBar>
    </SearchBarContent>
  );
};

export default SearchBar;
