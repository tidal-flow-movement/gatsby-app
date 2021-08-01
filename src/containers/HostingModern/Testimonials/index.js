import React from 'react';
import Swiper from 'react-id-swiper';
import { useStaticQuery, graphql } from 'gatsby';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import GatsbyImage from 'common/components/GatsbyImage';
import SectionWrapper, {
  Content,
  Testimonial,
  Figure,
  Caption,
} from './testimonials.style';

import 'swiper/swiper-bundle.min.css';
const settings = {
  effect: 'fade',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: (index, className) => {
      return `<button class="${className} swiper-custom-pagination"></button>`;
    },
  },
};

const Testimonials = () => {
  const data = useStaticQuery(graphql`
    query {
      hostingModernJson {
        testimonials {
          id
          name
          designation
          quote
          image {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `);
  const testimonials = data.hostingModernJson.testimonials;
  return (
    <SectionWrapper id="testimonials">
      <Container>
        <Content>
          <Swiper className="slider" {...settings}>
            {testimonials.map((testimonial) => (
              <Testimonial key={testimonial.id}>
                <Figure>
                  <GatsbyImage
                    src={
                      (testimonial.image !== null) | undefined
                        ? testimonial.image.childImageSharp.gatsbyImageData
                        : {}
                    }
                    alt="messenger"
                  />
                </Figure>
                <Caption>
                  <Heading content={testimonial.quote} />
                  <p>
                    <strong>{testimonial.name}</strong>,{' '}
                    {testimonial.designation}
                  </p>
                </Caption>
              </Testimonial>
            ))}
          </Swiper>
        </Content>
      </Container>
    </SectionWrapper>
  );
};

export default Testimonials;
