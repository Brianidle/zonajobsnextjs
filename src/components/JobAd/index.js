import styled from "styled-components";

import moment from "moment";

const PublishedAgoSpan = styled.p`
  text-transform: uppercase;
  float: right;
  font-size: 12px;
  margin-top: 8px;
  margin-bottom: 5px;
  margin-right: 15px;
`;

const JobDescriptionContent = styled.div`
  border-top: 1px solid rgba(186, 187, 202, 0.5);
  margin: 0px 15px;
  padding: 15px 0px;
  clear: both;
`;

const JobCompanyLogoImage = styled.img`
  width: 90px;
  height: 57px;
  float: right;
`;

const JobTitle = styled.div`
  display: block;
  margin: 0px;
  margin-bottom: 10px;
  color: #3a3a3a;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CompanyName = styled.div`
  display: block;
  margin-bottom: 5px;
  font-size: 13px;
  font-weight: 600;
  color: #3a3a3a;
`;

const JobLocation = styled.div`
  margin: 0px;
  margin-bottom: 10px;
  font-size: 12px;

  :before {
    content: "\\26CA";
    padding-right: 5px;
  }
`;

const JobDescription = styled.p`
  overflow: hidden;
  margin: 0px;
  margin-bottom: 10px;
  max-height: 50px;
  font-size: 14px;
`;

const JobAdContent = styled.a`
  box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  background-color: #fff;
  color: gray;
  border: 1px solid rgba(144, 144, 144, 0.5);
  min-width: 0px;
`;

const JobAd = ({ job }) => {
  return (
    <JobAdContent href={"/empleos/" + job._id}>
      {}
      <PublishedAgoSpan>
        publicado el {moment(job.createdAt, "YYYYMMDD").format("LL")}
      </PublishedAgoSpan>
      <JobDescriptionContent>
        {job.urlCompanyLogo && <JobCompanyLogoImage src={job.urlCompanyLogo} />}
        <JobTitle>{job.title}</JobTitle>
        <CompanyName>{job.companyName}</CompanyName>
        <JobLocation>
          <label>{job.city}</label>, <label>{job.state}</label>
        </JobLocation>
        <JobDescription>{removeTags(job.description) + " ..."}</JobDescription>
      </JobDescriptionContent>
    </JobAdContent>
  );
};

const removeTags = (htmlString) => {
  return htmlString.replace(/(<([^>]+)>)/gi, "");
};

export default JobAd;
