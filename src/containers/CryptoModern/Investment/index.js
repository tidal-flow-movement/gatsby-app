import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Container from 'common/components/UI/Container';
import GatsbyImage from 'common/components/GatsbyImage';
import SectionWrapper, { ContentWrapper } from './investment.style';
import dummyImg from 'common/assets/image/cryptoModern/pattern.png';

const InvestmentPortal = () => {
  const Data = useStaticQuery(graphql`
    query {
      illustration: file(relativePath: { eq: "image/cryptoModern/graph.png" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);
  return (
    <SectionWrapper>
      <Container>
        <ContentWrapper>
          <div className="content">
            <Heading content="Total Investment sale from last year transaction" />
            <Text content="Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu" />
          </div>
          <div className="image">
            <GatsbyImage
              src={
                (Data.illustration !== null) | undefined
                  ? Data.illustration.childImageSharp.gatsbyImageData
                  : {}
              }
              alt="Graph Image"
            />
          </div>
        </ContentWrapper>
      </Container>
      <Image className="patternImg" src={dummyImg} alt="pattern Image" />
    </SectionWrapper>
  );
};

export default InvestmentPortal;
