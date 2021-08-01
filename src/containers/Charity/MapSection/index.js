import React from 'react';
import Heading from 'common/components/Heading';
import { useStaticQuery, graphql } from 'gatsby';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import GatsbyImage from 'common/components/GatsbyImage';
import SectionWrapper, {
  SectionHeader,
  ImageWrapper,
} from './mapSection.style';

const MapSection = () => {
  const data = useStaticQuery(graphql`
    query {
      map: file(relativePath: { eq: "image/charity/map.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 847
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);
  return (
    <SectionWrapper>
      <Container width="1200px">
        <SectionHeader>
          <Heading content="How Generous Is Your State" />
          <Text content="Data from January 1 through November 30, 2018" />
        </SectionHeader>
        <ImageWrapper>
          <GatsbyImage
            src={
              (data.map !== null) | undefined
                ? data.map.childImageSharp.gatsbyImageData
                : {}
            }
            alt="Charity Landing"
          />
        </ImageWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default MapSection;
