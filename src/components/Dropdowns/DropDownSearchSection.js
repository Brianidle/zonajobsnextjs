import styled from "styled-components";

const DropDownOption = styled.li`
  line-height: 25px;
  background-color: white;
  text-align: start;
  text-indent: 5px;
  color: #757575;
  font-size: 13px;
  border-top: 1px solid #dbdbdb;

  :hover {
    background-color: #fe633f;
    color: white;
  }
`;

const DropDownContent = styled.ul`
  width: 215px;
  height: 220px;
  overflow: scroll;
  overflow-x: hidden;
  padding: 0px;
  margin: 0px;
`;

const DropDownSearchSection = ({ className }) => {
  return (
    <DropDownContent className={className}>
      <DropDownOption>Todo el país</DropDownOption>
      <DropDownOption>Otra ubicación</DropDownOption>
      <DropDownOption>Buenos Aires</DropDownOption>
      <DropDownOption>Capital Federal</DropDownOption>
      <DropDownOption>Catamarca</DropDownOption>
      <DropDownOption>Chaco</DropDownOption>
      <DropDownOption>Chubut</DropDownOption>
      <DropDownOption>Corrientes</DropDownOption>
      <DropDownOption>Córdoba</DropDownOption>
      <DropDownOption>Entre Ríos</DropDownOption>
      <DropDownOption>Formosa</DropDownOption>
      <DropDownOption>Jujuy</DropDownOption>
      <DropDownOption>La Pampa</DropDownOption>
      <DropDownOption>La Rioja</DropDownOption>
      <DropDownOption>Mendoza</DropDownOption>
      <DropDownOption>Misiones</DropDownOption>
      <DropDownOption>Neuquén</DropDownOption>
      <DropDownOption>Río Negro</DropDownOption>
      <DropDownOption>Salta</DropDownOption>
      <DropDownOption>San Juan</DropDownOption>
      <DropDownOption>San Luis</DropDownOption>
      <DropDownOption>Santa Cruz</DropDownOption>
      <DropDownOption>Santa Fe</DropDownOption>
    </DropDownContent>
  );
};

export default DropDownSearchSection;
