import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import GlideCarousel from 'common/components/GlideCarousel';
import GlideSlide from 'common/components/GlideCarousel/glideSlide';
import GatsbyImage from 'common/components/GatsbyImage';
import TestimonialSecWrapper, {
  ImageWrapper,
  TestimonialItem,
} from './bannerSlider.style';

const TestimonialSection = ({
  reviewStyle,
  TestimonialMeta,
  nameStyle,
  designationStyle,
}) => {
  //Carousel Options
  const carouselOptions = {
    type: 'carousel',
    autoplay: 3000,
    perView: 1,
    animationDuration: 600,
  };

  const Data = useStaticQuery(graphql`
    query {
      cryptoJson {
        TESTIMONIALS {
          name
          designation
          review
          avatar {
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
    <TestimonialSecWrapper id="testimonial_section">
      <Container>
        <div style={{ width: '440px' }}>
          <GlideCarousel
            options={carouselOptions}
            bullets={true}
            numberOfBullets={4}
            controls={false}
          >
            <>
              {Data.cryptoJson.TESTIMONIALS.map((slideItem, index) => (
                <GlideSlide key={`testimonial-slide-${index}`}>
                  <TestimonialItem className="testimonial_item">
                    <Text content={slideItem.review} {...reviewStyle} />
                    <Box {...TestimonialMeta}>
                      <ImageWrapper>
                        <GatsbyImage
                          src={
                            (slideItem.avatar !== null) | undefined
                              ? slideItem.avatar.childImageSharp.gatsbyImageData
                              : {}
                          }
                          alt={`reviewer-image-${index}`}
                        />
                      </ImageWrapper>
                      <Box>
                        <Heading content={slideItem.name} {...nameStyle} />
                        <Text
                          content={slideItem.designation}
                          {...designationStyle}
                        />
                      </Box>
                    </Box>
                  </TestimonialItem>
                </GlideSlide>
              ))}
            </>
          </GlideCarousel>
        </div>
      </Container>
    </TestimonialSecWrapper>
  );
};

TestimonialSection.propTypes = {
  reviewStyle: PropTypes.object,
  TestimonialMeta: PropTypes.object,
  nameStyle: PropTypes.object,
  designationStyle: PropTypes.object,
};

TestimonialSection.defaultProps = {
  reviewStyle: {
    fontSize: ['16px', '16px', '16px', '16px', '16px'],
    fontWeight: '400',
    color: 'rgb(82, 95, 127)',
    lineHeight: '1.74',
    mb: ['30px', '30px', '30px', '30px', '40px'],
  },
  TestimonialMeta: {
    flexBox: true,
    alignItems: 'center',
  },
  nameStyle: {
    as: 'h3',
    fontSize: ['16px', '17px', '18px', '18px', '20px'],
    fontWeight: '500',
    color: 'rgb(50, 50, 93)',
    mb: '5px',
    fontFamily: 'Poppins',
  },
  designationStyle: {
    fontSize: '16px',
    fontWeight: '400',
    color: 'rgb(82, 95, 127)',
    mb: '0',
    fontFamily: 'Poppins',
  },
};

export default TestimonialSection;
