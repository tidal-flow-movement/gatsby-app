import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Icon } from 'react-icons-kit';
import { androidArrowForward } from 'react-icons-kit/ionicons/androidArrowForward';
import Box from 'common/components/Box';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import GatsbyImage from 'common/components/GatsbyImage';
import BannerArea, { Col } from './banner.style';

const Banner = () => {
  const Data = useStaticQuery(graphql`
    query {
      appMinimalJson {
        BannerData {
          title
          text
          button {
            link
            label
          }
          image {
            childImageSharp {
              gatsbyImageData(
                width: 945
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          tagline
        }
      }
    }
  `);
  const { title, text, button, image, tagline } =
    Data.appMinimalJson.BannerData;

  return (
    <BannerArea id="banner_section">
      <GatsbyImage
        src={
          (image !== null) | undefined
            ? image.childImageSharp.gatsbyImageData
            : {}
        }
        className="bannerMoc"
        alt="banner image"
      />
      <Container className="Container">
        <Col>
          <Heading as="h2" content={title} />
          <Text as="p" content={text} />
          <Box className="ButtonWrap">
            <Link to={button.link} className="Button">
              {button.label}
              <Icon size={18} icon={androidArrowForward} />
            </Link>
            <Text as="span" content={tagline} />
          </Box>
        </Col>
      </Container>
    </BannerArea>
  );
};

export default Banner;
