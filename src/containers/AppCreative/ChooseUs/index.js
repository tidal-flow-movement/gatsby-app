import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import GatsbyImage from 'common/components/GatsbyImage';
import FeatureBlock from 'common/components/FeatureBlock';
import SectionWrapper, { ThumbWrapper, TextWrapper } from './chooseUs.style';

const ChooseUs = () => {
  const data = useStaticQuery(graphql`
    query {
      appCreativeJson {
        chooseUs {
          title
          thumb {
            childImageSharp {
              gatsbyImageData(
                width: 630
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          features {
            id
            title
            description
          }
        }
      }
    }
  `);

  const { thumb, title, features } = data.appCreativeJson.chooseUs;
  return (
    <SectionWrapper>
      <Container>
        <ThumbWrapper>
          <GatsbyImage
            src={
              (thumb !== null) | undefined
                ? thumb.childImageSharp.gatsbyImageData
                : {}
            }
            alt="App Screenshot"
          />
        </ThumbWrapper>
        <TextWrapper>
          <Heading content={title} />
          {features.map((item) => (
            <FeatureBlock
              key={`app-feature--key${item.id}`}
              iconPosition="left"
              icon={<Text as="span" content={'0' + item.id} />}
              title={<Heading as="h3" content={item.title} />}
              description={<Text content={item.description} />}
            />
          ))}
        </TextWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default ChooseUs;
