import React from 'react';
import { Icon } from 'react-icons-kit';
import { useStaticQuery, graphql } from 'gatsby';
import { chevronRight } from 'react-icons-kit/feather/chevronRight';

import Container from 'common/components/UI/ContainerTwo';
import GatsbyImage from 'common/components/GatsbyImage';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Link from 'common/components/Link';

import SectionWrapper, {
  Section,
  Content,
  Illustration,
} from './customer.style';

const Customer = () => {
  const Data = useStaticQuery(graphql`
    query {
      illustration: file(
        relativePath: { eq: "image/agencyModern/customer.png" }
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
        <Section>
          <Illustration>
            <GatsbyImage
              src={
                (Data.illustration !== null) | undefined
                  ? Data.illustration.childImageSharp.gatsbyImageData
                  : {}
              }
              alt="Illustration"
            />
          </Illustration>
          <Content>
            <Heading
              as="h2"
              content="We have more than thousand of worldwide happy customer"
            />
            <Text content="Coworking offers beautifully crafted workspaces where people can create, connect, and grow their businesses at prime locations in multiple cities." />
            <Link className="explore" href="#">
              Explore more <Icon icon={chevronRight} />
            </Link>
          </Content>
        </Section>
      </Container>
    </SectionWrapper>
  );
};

export default Customer;
