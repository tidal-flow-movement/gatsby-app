import React from 'react';
import Zoom from 'react-reveal/Zoom';
import { useStaticQuery, graphql } from 'gatsby';

import Container from 'common/components/UI/Container';

import SectionHeading from '../SectionHeading';
import ServiceSection, { ServiceWrapper, ServiceItem } from './service.style';

const Service = () => {
  const data = useStaticQuery(graphql`
    query {
      hostingModernJson {
        services {
          id
          title
          price
        }
      }
    }
  `);
  return (
    <ServiceSection id="services">
      <Container>
        <SectionHeading
          slogan="Ideal solutions for you"
          title="Didn’t find what you were looking for?"
        />
        <ServiceWrapper>
          {data.hostingModernJson.services.map((service) => (
            <ServiceItem key={service.id}>
              <Zoom delay={50 * service.id}>
                <h4>{service.title}</h4>
                <p>{service.price}</p>
              </Zoom>
            </ServiceItem>
          ))}
        </ServiceWrapper>
      </Container>
    </ServiceSection>
  );
};

export default Service;
