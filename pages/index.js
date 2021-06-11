import SearchBar from "../src/components/SearchBar";
import styled from "styled-components";

const SearchSectionImageBackground = styled.div`
  font-family: Montserrat, Arial, sans-serif;
  background-image: url(https://imgzj.jobscdn.com/postulantes-assets/skins/zonajobs/postulantes-desktop/img/zj_portada_site.jpg);
  background-size: cover;
  height: 235px;
`;

const SearchSectionMessage = styled.div`
  font-size: 22px;
  color: #fff;
  font-weight: 300;
  padding-bottom: 10px;
`;

const SearchSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1170px;
  height: 235px;
  margin: 0px auto;
`;

const HomePage = () => {
  return (
    <SearchSectionImageBackground>
      <SearchSection>
        <SearchSectionMessage>Empleá tu pasión</SearchSectionMessage>
        <SearchBar />
      </SearchSection>
    </SearchSectionImageBackground>
  );
};

export default HomePage;
