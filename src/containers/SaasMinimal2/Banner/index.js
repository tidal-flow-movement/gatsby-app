import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import Text from 'common/components/Text';
import GatsbyImage from 'common/components/GatsbyImage';
import {
  Section,
  ContentWrapper,
  TextContent,
  Illustration,
  ButtonGroup,
} from './banner.style';

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      illustration: file(
        relativePath: { eq: "image/saasMinimal2/banner/illustration.png" }
      ) {
        childImageSharp {
          gatsbyImageData(
            width: 974
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);
  return (
    <Section id="home">
      <Container>
        <ContentWrapper>
          <TextContent>
            <Heading content="Generate your idea to real business &amp; make profit" />
            <Text content="Moment Pro is the best software platform to collect reviews and user-generated content for your business" />
            <ButtonGroup>
              <Button title="Try it for free" />
              <Text as="span" content="*No Credit card required" />
            </ButtonGroup>
          </TextContent>
        </ContentWrapper>
      </Container>
      <Illustration>
        <GatsbyImage
          src={
            (data.illustration !== null) | undefined
              ? data.illustration.childImageSharp.gatsbyImageData
              : {}
          }
          alt="Illustration"
        />
      </Illustration>
    </Section>
  );
};

export default Banner;
