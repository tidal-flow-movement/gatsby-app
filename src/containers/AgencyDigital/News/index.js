import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Masonry from 'react-masonry-component';
import { Icon } from 'react-icons-kit';
import { chevronRight } from 'react-icons-kit/feather/chevronRight';

import Container from 'common/components/UI/ContainerTwo';
import GatsbyImage from 'common/components/GatsbyImage';
import Link from 'common/components/Link';
import SectionHeading from '../SectionHeading';
import Section, { ContentWrapper, BlogPost } from './news.style';

const masonryOptions = {
  originTop: false,
};

const News = () => {
  const data = useStaticQuery(graphql`
    query {
      agencyDigitalJson {
        newsFeed {
          id
          title
          desc
          link
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
  const newsFeed = data.agencyDigitalJson.newsFeed;
  return (
    <Section id="blog">
      <Container>
        <SectionHeading
          slogan="Ideal solutions for you"
          title="Go beyond ultimate features"
        />
        <ContentWrapper>
          <Masonry className="masonryGrid" options={masonryOptions}>
            {newsFeed.map((news) => {
              return (
                <BlogPost key={news.id}>
                  <figure>
                    <GatsbyImage
                      src={
                        (news.image !== null) | undefined
                          ? news.image.childImageSharp.gatsbyImageData
                          : {}
                      }
                      alt={news.title}
                    />
                  </figure>
                  <h4>{news.title}</h4>
                  {news.desc && <p>{news.desc}</p>}
                  {news.link && (
                    <Link href={news.link} className="learnMore">
                      Learn More <Icon icon={chevronRight} />
                    </Link>
                  )}
                </BlogPost>
              );
            })}
          </Masonry>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default News;
