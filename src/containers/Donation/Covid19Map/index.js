import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { rgba } from 'polished';
import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';
import Text from 'common/components/Text';
import Image from 'common/components/Image';
import Container from 'common/components/UI/Container';
import GatsbyImage from 'common/components/GatsbyImage';
import SectionHeading from '../SectionHeading';

const Covid19Map = () => {
  const data = useStaticQuery(graphql`
    query {
      map: file(relativePath: { eq: "image/donation/map-illustration.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 957
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      donationJson {
        effectedCountries {
          id
          name
          amount
          flag {
            publicURL
          }
        }
      }
    }
  `);
  const effectedCountries = data.donationJson.effectedCountries;
  return (
    <Section id="covid-map">
      <Container>
        <SectionHeading
          className="heading"
          title="Those states which affected COVID-19"
          desc="We are organizing a program on November 20, 2020 to help the homeless people. Our aim is to provide them a specific place to live."
        />
        <Figure>
          <GatsbyImage
            src={
              (data.map !== null) | undefined
                ? data.map.childImageSharp.gatsbyImageData
                : {}
            }
            alt="Covid 19 Map"
          />
          <figcaption>
            <Text content="Top death report:" />
            <EffectedCountry>
              {effectedCountries?.map((country) => (
                <span key={country.id}>
                  <Image src={country.flag.publicURL} alt={country.name} />
                  {country.name}: <span>{country.amount}</span>
                </span>
              ))}
            </EffectedCountry>
          </figcaption>
        </Figure>
      </Container>
    </Section>
  );
};

export default Covid19Map;

const Section = styled.section`
  padding-top: 70px;
  padding-bottom: 70px;
  @media only screen and (max-width: 768px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .heading {
    max-width: 570px;
  }
`;

const Figure = styled.figure`
  margin: 0;
  text-align: center;
  img {
    margin: 0 auto;
    @media only screen and (max-width: 767px) {
      margin: 0;
    }
  }
  figcaption {
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 767px) {
      display: block;
    }
    @media only screen and (max-width: 480px) {
      display: flex;
      flex-direction: column;
    }
    p {
      margin: 0;
      font-weight: 500;
      font-size: 14px;
      line-height: 2.89;
      margin-right: 15px;
      color: ${rgba('#0f2137', 0.5)};
    }
  }
`;

const EffectedCountry = styled.div`
  margin: 0;
  display: flex;
  @media only screen and (max-width: 767px) {
    display: block;
    text-align: left;
  }
  @media only screen and (max-width: 480px) {
    margin-left: 20px;
    margin-top: 10px;
  }
  p {
    display: flex;
  }
  > span {
    display: flex;
    align-items: center;
    margin-right: 37px;
    color: ${themeGet('colors.textPrimary')};
    @media only screen and (max-width: 767px) {
      margin-bottom: 12px;
    }
    img {
      margin-right: 12px;
    }
    span {
      font-weight: 700;
      margin-left: 5px;
    }
  }
`;
