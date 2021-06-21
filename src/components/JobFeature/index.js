import styled from "styled-components";

const JobFeatureContainer = styled.div`
  display: inline-block;
  width: 100%;
  max-width: 250px;
`;

const FeatureName = styled.p`
  font-size: 12px;
  color: #8c8c8c;
  font-weight: 400;
  text-transform: uppercase;
  text-align: left;
  line-height: normal;
`;

const FeatureValue = styled.p`
  margin: 0px;
  font-size: 13px;
  font-weight: 400;
`;

const JobFeature = ({ featureName, featureValue }) => {
  return (
    <JobFeatureContainer>
      <FeatureName>{featureName}</FeatureName>
      <FeatureValue>{featureValue}</FeatureValue>
    </JobFeatureContainer>
  );
};

export default JobFeature;
