import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Icon } from 'react-icons-kit';
import { chevronRight } from 'react-icons-kit/feather/chevronRight';

import Container from 'common/components/UI/ContainerTwo';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import GatsbyImage from 'common/components/GatsbyImage';
import Link from 'common/components/Link';
import Section, { SectionHeading, ContentWrapper } from './ourCustomer.style';

const OurCustomer = () => {
  const data = useStaticQuery(graphql`
    query {
      illustration: file(
        relativePath: { eq: "image/agencyDigital/ourCustomer.png" }
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
    <Section id="our-customer">
      <Container>
        <ContentWrapper>
          <SectionHeading>
            <Heading content="Company who also worked us" />
            <Text content="Every email, web page, and social media post makes an impression on your customers. With our software you can be confident it's impression." />
            <Link href="#">
              Explore Details <Icon icon={chevronRight} />
            </Link>
          </SectionHeading>
          <GatsbyImage
            src={
              (data.illustration !== null) | undefined
                ? data.illustration.childImageSharp.gatsbyImageData
                : {}
            }
            alt="Company who also worked us"
          />
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default OurCustomer;
