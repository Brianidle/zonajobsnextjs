import SearchBar from "../src/components/SearchBar";
import styled from "styled-components";

const SearchSectionImageBackground = styled.div`
  background-image: url(https://imgzj.jobscdn.com/postulantes-assets/skins/zonajobs/postulantes-desktop/img/zj_portada_site.jpg);
  background-size: cover;
  height: 235px;
`;

const SearchSection = styled.div`
  display: flex;
  width: 1170px;
  height: 235px;
  margin: 0px auto;
`;

const HomePage = () => {
  return (
    <SearchSectionImageBackground>
      <SearchSection>
        <SearchBar />
      </SearchSection>
    </SearchSectionImageBackground>
  );
};

export default HomePage;
