import React from 'react';
import Swiper from 'react-id-swiper';
import { Icon } from 'react-icons-kit';
import { useStaticQuery, graphql } from 'gatsby';
import { androidStar } from 'react-icons-kit/ionicons/androidStar';

import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Text from 'common/components/Text';
import 'swiper/swiper-bundle.css';
import {
  Section,
  SectionHeading,
  ContentWrapper,
  Item,
} from './testimonials.style';

const options = {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
    },
  },
};

const ratingCount = (rating) => {
  let ratings = [];
  for (let i = 1; i <= rating; i++) {
    ratings.push(<Icon key={i} icon={androidStar} />);
  }
  return ratings;
};

const Testimonial = () => {
  const data = useStaticQuery(graphql`
    query {
      saasMinimal2Json {
        testimonials {
          id
          name
          designation
          text
          rating
          photo {
            publicURL
          }
        }
      }
    }
  `);
  return (
    <Section id="testimonials">
      <Container>
        <SectionHeading>
          <Heading content="We know, it’s not about product, its about the people we design for" />
          <Text content="Thank you to the hundreds of customers who have allowed us to be a part of their teams and grow together." />
        </SectionHeading>
        <ContentWrapper>
          <Swiper {...options}>
            {data?.saasMinimal2Json?.testimonials?.map((item) => (
              <Item key={item.id}>
                <div className="author-info">
                  <figure>
                    <Image src={item.photo.publicURL} alt={item.name} />
                  </figure>
                  <div className="info">
                    <Heading as="h4" content={item.name} />
                    <Text content={item.designation} />
                    <span className="rating">{ratingCount(item.rating)}</span>
                  </div>
                </div>
                <blockquote>{item.text}</blockquote>
              </Item>
            ))}
          </Swiper>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default Testimonial;
