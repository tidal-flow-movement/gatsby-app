import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Box from 'common/components/Box';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Button from 'common/components/Button';
import Container from 'common/components/UI/Container';
import GatsbyImage from 'common/components/GatsbyImage';
import Fade from 'react-reveal/Fade';

import { BannerWrapper } from './bannerSection.style';

const BannerSection = () => {
  const Data = useStaticQuery(graphql`
    query {
      sassMinimalJson {
        BANNER_DATA {
          title
          text
          image {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          btnLabel
          btnLink
          offerText
        }
      }
    }
  `);
  return (
    <BannerWrapper id="banner_section">
      {Data.sassMinimalJson.BANNER_DATA.map((banner, index) => (
        <Container key={`banner-${index}`}>
          <Heading content={banner.title} as="h3" />
          <Text content={banner.text} />
          <Link to={banner.btnLink}>
            <Button title={banner.btnLabel} />
          </Link>
          <Text as="span" content={banner.offerText} />
          <Fade bottom>
            <Box className="imageWrapper">
              <GatsbyImage
                src={
                  (banner.image !== null) | undefined
                    ? banner.image.childImageSharp.gatsbyImageData
                    : {}
                }
                alt="Banner Image"
              />
            </Box>
          </Fade>
        </Container>
      ))}
      ;
    </BannerWrapper>
  );
};

export default BannerSection;
