import SearchBar from "../src/components/SearchBar";
import styled from "styled-components";

import NavForFiltering from "../src/components/NavForFiltering";
import JobAds from "../src/components/JobAds";

const SearchSectionImageBackground = styled.div`
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
  color: #585992;
`;

const JobSectionContent = styled.div`
  display: flex;
  flex-direction: row;
`;

const FeaturedJobsTitle = styled.p`
  font-size: 26px;
  margin-bottom: 15px;
  margin-top: 0px;
`;

const JobAdsSection = styled.div`
  height: 800px;
  margin-left: 15px;
`;

const HomePage = () => {
  const jobAdExample = {
    publishDay: "2021-05-13T20:06:15.172+00:00",
    srcImage:
      "https://imgzj.jobscdn.com/portal/img/empresas/1/static/logoMainPic_243558_bum_vc7d6ba60.jpg",
    jobTitle: "JEFE DE EQUIPO COMERCIAL-ALARMAS",
    companyNmae: "Prosegur SA",
    state: "Buenos Aires",
    city: "Capital Federal",
    jobDescription:
      "Prosegur es un referente global del sector de la seguridad privada. A través de sus cinco líneas de negocio —Prosegur Seguridad, Prosegur Cash, Prosegur Alarmas, Cipher y Prosegur AVOS— proporciona a empresas, hogares y comercios, una seguridad de confianza basada en las soluciones más avanzadas del mercado. Con ...",
  };

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
        <JobSectionContent>
          <NavForFiltering filterGroupName="Dia de entrega" />
          <JobAdsSection>
            <FeaturedJobsTitle>
              Empleos destacados en <strong>Argentina</strong>
            </FeaturedJobsTitle>
            <JobAds
              jobs={[
                jobAdExample,
                jobAdExample,
                jobAdExample,
                jobAdExample,
                jobAdExample,
              ]}
            />
          </JobAdsSection>
        </JobSectionContent>
      </JobSection>
    </>
  );
};

export default HomePage;
