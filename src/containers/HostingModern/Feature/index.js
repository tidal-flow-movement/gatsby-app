import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Icon } from 'react-icons-kit';
import { thinRight } from 'react-icons-kit/entypo/thinRight';
import Container from 'common/components/UI/Container';
import GatsbyImage from 'common/components/GatsbyImage';
import Text from 'common/components/Text';

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@reach/accordion';
import '@reach/accordion/styles.css';
import SectionHeading from '../SectionHeading';
import FeatureWrapper, { FeatureContent, Content, Ipad } from './feature.style';

const Feature = () => {
  const data = useStaticQuery(graphql`
    query {
      iPad: file(relativePath: { eq: "image/hostingModern/ipad.png" }) {
        childImageSharp {
          gatsbyImageData(width: 1018, placeholder: BLURRED)
        }
      }
      hostingModernJson {
        accordions {
          id
          expanded
          title
          desc
        }
      }
    }
  `);
  return (
    <FeatureWrapper id="features">
      <Ipad>
        <GatsbyImage
          src={
            (data.iPad !== null) | undefined
              ? data.iPad.childImageSharp.gatsbyImageData
              : {}
          }
          alt="iPad"
        />
      </Ipad>
      <Container>
        <FeatureContent>
          <SectionHeading
            mb="20px"
            slogan="Website content builder"
            title="Meet our premium features that will make you wow"
            textAlign="left"
          />
          <Content>
            <Text
              className="caption"
              content="Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents."
            />
            <Accordion>
              {data.hostingModernJson.accordions.map((item) => {
                return (
                  <AccordionItem key={item.id}>
                    <AccordionButton>
                      {item.title} <Icon icon={thinRight} />
                    </AccordionButton>
                    <AccordionPanel>{item.desc}</AccordionPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </Content>
        </FeatureContent>
      </Container>
    </FeatureWrapper>
  );
};

export default Feature;
