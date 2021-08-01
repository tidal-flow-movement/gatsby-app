import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Icon } from 'react-icons-kit';
import { ic_chevron_right } from 'react-icons-kit/md/ic_chevron_right';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import Link from 'common/components/Link';
import Text from 'common/components/Text';
import GatsbyImage from 'common/components/GatsbyImage';

import {
  Section,
  ContentWrapper,
  Illustration,
  TextContent,
} from './advancedAnalytics.style';

const AdvancedAnalytics = () => {
  const data = useStaticQuery(graphql`
    query {
      analytics: file(
        relativePath: { eq: "image/saasMinimal2/analytics.png" }
      ) {
        childImageSharp {
          gatsbyImageData(
            width: 716
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);
  return (
    <Section>
      <Container>
        <ContentWrapper>
          <Illustration>
            <GatsbyImage
              src={
                (data.analytics !== null) | undefined
                  ? data.analytics.childImageSharp.gatsbyImageData
                  : {}
              }
              alt="Illustration"
            />
          </Illustration>
          <TextContent>
            <Text
              as="span"
              className="slogan"
              content="Audience source monitoring"
            />
            <Heading
              className="title"
              content="Advanced analytics tools to keep you in control &amp; customizable"
            />
            <Text
              className="desc"
              content="Pick one of our stock themes, or create your custom theme with the most advanced theme editor on any online survey building tool."
            />
            <Link className="link" href="#">
              Explore details <Icon size={20} icon={ic_chevron_right} />
            </Link>
          </TextContent>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default AdvancedAnalytics;
