import FilteringOptionsGroup from "../FilteringOptionsGroup";
import styled from "styled-components";

const NavForFilteringContent = styled.div`
  background-color: white;
  float: left;
  padding: 0px 10px;
`;

const NavForFiltering = ({ filterGroupName }) => {
  return (
    <NavForFilteringContent>
      <FilteringOptionsGroup filterGroupName={filterGroupName} />
      <FilteringOptionsGroup filterGroupName={filterGroupName} />
      <FilteringOptionsGroup filterGroupName={filterGroupName} />
    </NavForFilteringContent>
    //Crear un componente que renderize una fila como esta
    //con la opcion de mostrar o no un numero entre parentesis a la derecha
    //Buenos Aires  (1915)
  );
};

export default NavForFiltering;
