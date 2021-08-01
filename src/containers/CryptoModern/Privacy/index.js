import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import GatsbyImage from 'common/components/GatsbyImage';
import SectionWrapper, { ContentWrapper } from './privacy.style';

const PrivacyPortal = () => {
  const Data = useStaticQuery(graphql`
    query {
      illustration: file(
        relativePath: { eq: "image/cryptoModern/illustration1.png" }
      ) {
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
            <Heading content="Privacy Preserving  Anonymous Funds  Protocol" />
            <Text content="Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu" />
          </div>
          <div className="image">
            <Fade up>
              <GatsbyImage
                src={
                  (Data.illustration !== null) | undefined
                    ? Data.illustration.childImageSharp.gatsbyImageData
                    : {}
                }
                alt="Privacy Illustration"
              />
            </Fade>
          </div>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default PrivacyPortal;
