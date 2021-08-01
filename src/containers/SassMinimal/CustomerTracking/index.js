import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Container from 'common/components/UI/Container';
import Box from 'common/components/Box';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Fade from 'react-reveal/Fade';
import { Icon } from 'react-icons-kit';
import GatsbyImage from 'common/components/GatsbyImage';

import { CustomerTrackingWrapper } from './customerTracking.style';
import { angleRight } from 'react-icons-kit/fa/angleRight';

const CustomerTracking = () => {
  const Data = useStaticQuery(graphql`
    query {
      sassMinimalJson {
        CUSTOMER_TRACKING {
          tagline
          heading
          content
          btnLink
          btnLabel
          image {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  `);
  return (
    <CustomerTrackingWrapper>
      <Container>
        <Box className="row">
          <Box className="column">
            {Data.sassMinimalJson.CUSTOMER_TRACKING.map(
              (customerTrack, index) => (
                <Fade key={`customerTrack-image-${index}`} left>
                  <GatsbyImage
                    src={
                      (customerTrack.image !== null) | undefined
                        ? customerTrack.image.childImageSharp.gatsbyImageData
                        : {}
                    }
                    alt="Track Chart"
                  />
                </Fade>
              )
            )}
          </Box>
          <Box className="column d-flex">
            <Box className="my-auto">
              {Data.sassMinimalJson.CUSTOMER_TRACKING.map(
                (customerTrack, index) => (
                  <Box className="content" key={`customerTrack-${index}`}>
                    <Heading as="h4" content={customerTrack.tagline} />
                    <Heading as="h3" content={customerTrack.heading} />
                    <Text as="p" content={customerTrack.content} />
                    <Link to={customerTrack.btnLink} className="exploreLink">
                      {customerTrack.btnLabel} <Icon icon={angleRight} />
                    </Link>
                  </Box>
                )
              )}
            </Box>
          </Box>
        </Box>
      </Container>
    </CustomerTrackingWrapper>
  );
};

export default CustomerTracking;
