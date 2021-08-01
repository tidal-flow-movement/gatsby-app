import React from 'react';
import { Icon } from 'react-icons-kit';
import { ic_chevron_right } from 'react-icons-kit/md/ic_chevron_right';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import Link from 'common/components/Link';
import Text from 'common/components/Text';
import { useStaticQuery, graphql } from 'gatsby';
import GatsbyImage from 'common/components/GatsbyImage';

import {
  Section,
  ContentWrapper,
  Illustration,
  TextContent,
} from './trackAudience.style';

const TrackAudience = () => {
  const data = useStaticQuery(graphql`
    query {
      audience: file(
        relativePath: { eq: "image/saasMinimal2/track-audience.png" }
      ) {
        childImageSharp {
          gatsbyImageData(
            width: 703
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
                (data.audience !== null) | undefined
                  ? data.audience.childImageSharp.gatsbyImageData
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
              content="Track your audience and bounce rate with unique customers"
            />
            <Text
              className="desc"
              content="Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents. We’re driven beyond just finishing the projects. We want to find smart business solutions with ideas."
            />
            <Link className="link" href="#">
              Learn More <Icon size={20} icon={ic_chevron_right} />
            </Link>
          </TextContent>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default TrackAudience;
