import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Container from 'common/components/UI/Container';
import GatsbyImage from 'common/components/GatsbyImage';
import SectionHeading from '../SectionHeading';

const ThankYou = () => {
  const images = useStaticQuery(graphql`
    query {
      illustration: file(relativePath: { eq: "image/donation/thankyou.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 999
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);
  return (
    <Section id="thank-you">
      <Container>
        <SectionHeading
          title="Say Thank you to our real heroes "
          desc="Healthcare Worker Exposure Response &amp; Outcomes, or HERO, calls on all nurses, doctors, pharmacists, EMS personnel and other employees in health care settings to sign up for the registry and share their stories."
        />
        <GatsbyImage
          src={
            (images.illustration !== null) | undefined
              ? images.illustration.childImageSharp.gatsbyImageData
              : {}
          }
          alt="thank you docs"
        />
      </Container>
    </Section>
  );
};

export default ThankYou;

const Section = styled.section`
  padding-top: 70px;
  padding-bottom: 100px;
  @media only screen and (max-width: 768px) {
    padding-top: 50px;
    padding-bottom: 70px;
  }
`;
