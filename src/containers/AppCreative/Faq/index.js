import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Masonry from 'react-masonry-component';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import { SectionHeader } from '../appCreative.style';
import SectionWrapper, {
  ContentWrapper,
  MasonryItem,
  FaqItem,
} from './faq.style';

const masonryOptions = {
  originTop: true,
};

const Faq = () => {
  const data = useStaticQuery(graphql`
    query {
      appCreativeJson {
        faq {
          title
          slogan
          faqs {
            id
            question
            answer
          }
        }
      }
    }
  `);

  const { slogan, title, faqs } = data.appCreativeJson.faq;
  return (
    <SectionWrapper id="faq">
      <Container>
        <SectionHeader>
          <Heading content={title} />
          <Text content={slogan} />
        </SectionHeader>
        <ContentWrapper>
          <Masonry className="masonryGrid" options={masonryOptions}>
            {faqs.map((faq) => (
              <MasonryItem id={faq.id} key={faq.id}>
                <FaqItem>
                  <Heading as="h4" content={faq.question} />
                  <Text content={faq.answer} />
                </FaqItem>
              </MasonryItem>
            ))}
          </Masonry>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Faq;
