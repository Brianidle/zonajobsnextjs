import styled from "styled-components";
import moment from "moment";
import parse from "html-react-parser";
import Head from "next/head";

import JobFeature from "../../src/components/JobFeature";

import { getAllJobAds, getJobAd } from "../../src/apiHelper/JobAd";

const paddingRightNLef = "20px";

const JobDetailContent = styled.div`
  width: 100%;
  max-width: 920px;
  margin: 60px auto;
  background: linear-gradient(64deg, #f97072, #ffa164);
`;

const JobTitleNCompanyNameDiv = styled.div`
  padding: 30px ${paddingRightNLef};
  position: relative;
`;

const JobTitle = styled.p`
  font-size: 18px;
  margin: 0px;
`;

const CompanyName = styled.p`
  font-size: 16px;
  margin: 10px 0px;
`;

const LogoCompany = styled.img`
  display: block;
  width: 100%;
  max-width: 16%;
  min-width: 110px;
  height: auto;
  position: absolute;
  right: ${paddingRightNLef};
  top: 65px;
  padding: 5px;
  background-color: white;
  border: 1px solid #fe633f;

  @media (max-width: 556px){
    top:100px;
  }
`;

const JobDescriptionDiv = styled.div`
  background-color: white;
  padding: 20px ${paddingRightNLef};
  font-size: 15px;
`;

const JobDescription = styled.div`
  border-top: 2px solid #979797;
  padding-top: 20px;
  margin-top: 20px;
`;

const JobDetailPage = ({ job }) => {
  return (
    <>
      <Head>
        <title>{job.title}</title>
      </Head>
      <JobDetailContent>
        <JobTitleNCompanyNameDiv>
          <JobTitle>{job.title}</JobTitle>
          <CompanyName>{job.companyName}</CompanyName>
          <LogoCompany src={job.urlCompanyLogo} />
        </JobTitleNCompanyNameDiv>
        <JobDescriptionDiv>
          <div>
            <JobFeature
              featureName="LUGAR DE TRABAJO"
              featureValue={job.city + ", " + job.state}
            ></JobFeature>
            <JobFeature
              featureName="PUBLICADO"
              featureValue={
                "Publicado el " + moment(job.createdAt, "YYYYMMDD").format("LL")
              }
            ></JobFeature>
            <JobFeature
              featureName="SUELDO"
              featureValue={jobSalary(job.salary)}
            ></JobFeature>
            <JobFeature
              featureName="TIPO DE PUESTO"
              featureValue={job.jobType}
            ></JobFeature>
            <JobFeature featureName="ÁREA" featureValue={job.area}></JobFeature>
            <JobFeature
              featureName="MODALIDAD DE TRABAJO"
              featureValue={job.modality}
            ></JobFeature>
          </div>
          <JobDescription>{parse(job.description)}</JobDescription>
        </JobDescriptionDiv>
      </JobDetailContent>
    </>
  );
};

const jobSalary = (salary) => {
  return salary ? salary : "No especificado";
};

export async function getStaticPaths() {
  let jobAds = await getAllJobAds();

  const paths = jobAds.map((jobAd) => ({
    params: { idJob: jobAd._id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  let job = await getJobAd(params.idJob);

  return { props: { job } };
}

export default JobDetailPage;
