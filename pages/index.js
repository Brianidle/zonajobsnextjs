import SearchBar from "../src/components/SearchBar";
import styled from "styled-components";

import NavForFiltering from "../src/components/NavForFiltering";

const SearchSectionImageBackground = styled.div`
  font-family: Montserrat, Arial, sans-serif;
  background-image: url(https://imgzj.jobscdn.com/postulantes-assets/skins/zonajobs/postulantes-desktop/img/zj_portada_site.jpg);
  background-size: cover;
  height: 235px;
  margin-bottom: 15px;
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

const JobSection = styled.div`
  font-family: Montserrat, Arial, sans-serif;
  width: 1170px;
  margin: 0px auto;
  background-color: #f5f5f5;
`;

const JobSectionHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  padding: 15px 15px;
  margin-bottom: 15px;
`;

const CountryLabel = styled.label`
  font-size: 14px;
  color: #000;
`;

const AllCountryAdsLabel = styled.label`
  float: right;
  margin-left: auto;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
`;

const HomePage = () => {
  return (
    <>
      <SearchSectionImageBackground>
        <SearchSection>
          <SearchSectionMessage>Empleá tu pasión</SearchSectionMessage>
          <SearchBar />
        </SearchSection>
      </SearchSectionImageBackground>
      <JobSection>
        <JobSectionHeader>
          <CountryLabel>Argentina</CountryLabel>
          <AllCountryAdsLabel>VER AVISOS DE TODO ARGENTINA</AllCountryAdsLabel>
        </JobSectionHeader>
        <NavForFiltering filterGroupName="Dia de entrega"/>
      </JobSection>
    </>
  );
};

export default HomePage;
