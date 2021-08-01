import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Container from 'common/components/UI/Container';
import GatsbyImage from 'common/components/GatsbyImage';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Input from 'common/components/Input';
import Select from 'common/components/Select';
import Button from 'common/components/Button';

import BannerSection, {
  ContentWrapper,
  BannerContent,
  DomainChecker,
  DomainControl,
  BannerImage,
} from './banner.style';

const options = [
  { label: '.COM', value: 'dot-com' },
  { label: '.NET', value: 'dot-net' },
  { label: '.ORG', value: 'dot-org' },
];

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      illustration: file(
        relativePath: { eq: "image/hostingModern/illustration.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  `);
  return (
    <BannerSection id="home">
      <Container>
        <ContentWrapper>
          <BannerContent>
            <Heading as="h1" content="Built your business with a website" />
            <Text content="Get your tests delivered at let home collect sample from the victory of the managements that supplies best." />
            <DomainChecker>
              <DomainControl>
                <Input
                  inputType="text"
                  placeholder="Your domain name"
                  iconPosition="left"
                  aria-label="domain"
                />
                <Select
                  options={options}
                  defaultValue={options[0]}
                  id="domain"
                  components={{
                    IndicatorSeparator: () => null,
                  }}
                />
              </DomainControl>
              <Button fullWidth title="Start for free" type="submit" />
            </DomainChecker>
          </BannerContent>
          <BannerImage>
            <GatsbyImage
              src={
                (data.illustration !== null) | undefined
                  ? data.illustration.childImageSharp.gatsbyImageData
                  : {}
              }
              alt="Illustration"
            />
          </BannerImage>
        </ContentWrapper>
      </Container>
    </BannerSection>
  );
};

export default Banner;
