import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'common/components/Image';
import Box from 'common/components/Box';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import Fade from 'react-reveal/Fade';
import GatsbyImage from 'common/components/GatsbyImage';

import { FeatureTwoWrapper } from './featureTwo.style';

const FeatureTwoSection = () => {
  const Data = useStaticQuery(graphql`
    query {
      illustration: file(
        relativePath: { eq: "image/sassMinimal/feature-2-moc.png" }
      ) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      sassMinimalJson {
        FEATURE_TWO_DATA {
          title
          content
          image {
            publicURL
          }
        }
      }
    }
  `);
  return (
    <FeatureTwoWrapper>
      <Container>
        <Box className="row">
          <Box className="column">
            <Box className="blockTitle">
              <Text as="p" content="Analytics features" />
              <Heading
                as="h2"
                content="Advanced analytics tools to keep you in control"
              />
            </Box>
            <Box className="featureTwoContent">
              {Data.sassMinimalJson.FEATURE_TWO_DATA.map((feature, index) => (
                <Box className="featureTwoBox" key={`feature-two-${index}`}>
                  <Image
                    src={feature.image.publicURL}
                    alt="feature box image"
                  />
                  <Heading as="h3" content={feature.title} />
                  <Text as="p" content={feature.content} />
                </Box>
              ))}
            </Box>
          </Box>
          <Box className="column">
            <Fade right>
              <GatsbyImage
                src={
                  (Data.illustration !== null) | undefined
                    ? Data.illustration.childImageSharp.gatsbyImageData
                    : {}
                }
                alt="feature two moc"
              />
            </Fade>
          </Box>
        </Box>
      </Container>
    </FeatureTwoWrapper>
  );
};

export default FeatureTwoSection;
