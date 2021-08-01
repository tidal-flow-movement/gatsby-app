import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';
import { Icon } from 'react-icons-kit';
import { twitter } from 'react-icons-kit/icomoon/twitter';
import Masonry from 'react-masonry-component';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Container from 'common/components/UI/Container';
import { SectionHeader } from '../appCreative.style';
import SectionWrapper, {
  TestimonialWrapper,
  TestimonialItem,
  TestimonialItemInner,
  TestimonialHead,
  AuthorImage,
} from './testimonial.style';

const masonryOptions = {
  originTop: true,
};

const TestimonialSection = () => {
  const data = useStaticQuery(graphql`
    query {
      appCreativeJson {
        testimonial {
          title
          slogan
          reviews {
            id
            description
            avatar {
              publicURL
            }
            name
            designation
            twitterProfile
          }
        }
      }
    }
  `);

  const { slogan, title, reviews } = data.appCreativeJson.testimonial;
  return (
    <SectionWrapper id="testimonial">
      <Container>
        <SectionHeader>
          <Heading content={title} />
          <Text content={slogan} />
        </SectionHeader>
        <TestimonialWrapper>
          <Masonry className="masonryGrid" options={masonryOptions}>
            {reviews.map((item) => (
              <TestimonialItem key={`testimonial-item-${item.id}`}>
                <TestimonialItemInner>
                  <TestimonialHead>
                    <AuthorImage>
                      <Image src={item.avatar.publicURL} alt={item.name} />
                    </AuthorImage>
                    <Box>
                      <Heading as="h3" content={item.name} />
                      <Text content={item.designation} />
                    </Box>
                    <Link to="/appcreative">
                      <Icon icon={twitter} size={24} />
                    </Link>
                  </TestimonialHead>
                  <Text content={item.description} />
                </TestimonialItemInner>
              </TestimonialItem>
            ))}
          </Masonry>
        </TestimonialWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default TestimonialSection;
