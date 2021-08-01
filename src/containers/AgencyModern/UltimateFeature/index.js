import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Icon } from 'react-icons-kit';
import { chevronRight } from 'react-icons-kit/feather/chevronRight';

import FeatureBlock from 'common/components/FeatureBlock';
import Container from 'common/components/UI/ContainerTwo';
import Image from 'common/components/Image';
import Text from 'common/components/Text';
import Link from 'common/components/Link';
import Heading from 'common/components/Heading';
import SectionWrapper, {
  SectionTitle,
  FeatureWrapper,
} from './ultimateFeature.style';

const UltimateFeature = () => {
  const Data = useStaticQuery(graphql`
    query {
      agencyModernJson {
        ultimateFeatures {
          id
          title
          desc
          learnMoreLink
          icon {
            publicURL
          }
        }
      }
    }
  `);
  const features = Data.agencyModernJson.ultimateFeatures;
  return (
    <SectionWrapper id="features">
      <Container>
        <SectionTitle>
          <Heading content="Ultimate features you must appreciate" />
          <Text content="Focus only on the meaning, we take care of the design. As soon as the meeting end you can export in one click into your preferred." />
        </SectionTitle>

        <FeatureWrapper>
          {features.map((feature, index) => (
            <FeatureBlock
              key={index}
              icon={
                <Image
                  src={feature.icon.publicURL}
                  alt={`Feature Image ${feature.id}`}
                  className="service__image"
                />
              }
              title={<Heading as="h4" content={feature.title} />}
              description={
                <React.Fragment>
                  <Text content={feature.desc} />
                  <Link
                    href={feature.learnMoreLink ?? feature.learnMoreLink}
                    className="learn__more"
                  >
                    Learn More <Icon icon={chevronRight} />
                  </Link>
                </React.Fragment>
              }
              className="ultimateFeature"
            />
          ))}
        </FeatureWrapper>
      </Container>
    </SectionWrapper>
  );
};

UltimateFeature.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
};

UltimateFeature.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: ['-30px', '-30px', '-30px', '-25px', '-30px'],
    mr: ['-30px', '-30px', '-30px', '-25px', '-45px'],
  },
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 3],
  },
};

export default UltimateFeature;
