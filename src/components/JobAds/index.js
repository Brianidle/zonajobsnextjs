import styled from "styled-components";
import JobAd from "../JobAd";

const JobAdsContent = styled.div`
  display: grid;
  grid-template-columns: calc(50% - 5px) calc(50% - 5px);
  grid-column-gap: 10px;
  grid-row-gap: 10px;

  @media (max-width: 1100px) {
    grid-template-columns: 100%;
  }
`;

const JobAds = ({ jobs }) => {
  return (
    <JobAdsContent>
      {jobs.map((job) => (
        <JobAd job={job} key={job._id} />
      ))}
    </JobAdsContent>
  );
};

export default JobAds;
