import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'common/components/Image';
import Box from 'common/components/Box';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';

import { ServiceWrapper } from './serviceSection.style';

const ServiceSection = () => {
  const Data = useStaticQuery(graphql`
    query {
      sassMinimalJson {
        SERVICE_DATA {
          title
          content
          image {
            publicURL
          }
        }
      }
    }
  `);
  return (
    <ServiceWrapper id="service_section">
      <Container>
        <Box className="blockTitle">
          <Heading as="h2" content="What the features of product" />
          <Text as="p" content="All features are being highlighted here" />
        </Box>
        <Box className="row">
          {Data.sassMinimalJson.SERVICE_DATA.map((service, index) => (
            <Box className="column" key={`service-one-${index}`}>
              <Box className="serviceBox">
                <Image src={service.image.publicURL} alt="service image" />
                <Heading as="h3" content={service.title} />
                <Text as="p" content={service.content} />
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </ServiceWrapper>
  );
};

export default ServiceSection;
