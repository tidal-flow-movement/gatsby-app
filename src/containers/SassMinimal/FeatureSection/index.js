import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'common/components/Image';
import Box from 'common/components/Box';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { FeatureSectionWrapper } from './featureSection.style';
import FeatureCheckImage from 'common/assets/image/sassMinimal/feature-check-icon.png';

const FeatureSection = () => {
  const Data = useStaticQuery(graphql`
    query {
      sassMinimalJson {
        FEATURE_DATA {
          title
          text
        }
      }
    }
  `);
  return (
    <FeatureSectionWrapper id="feature_section">
      <Container>
        <Box className="row">
          {Data.sassMinimalJson.FEATURE_DATA.map((feature, index) => (
            <Box className="featureSingle" key={`feature-one-${index}`}>
              <Box className="featureSingleInner">
                <Image src={FeatureCheckImage} alt="Feature check Image" />
                <Heading as="h3" content={feature.title} />
                <Text as="p" content={feature.text} />
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </FeatureSectionWrapper>
  );
};

export default FeatureSection;
