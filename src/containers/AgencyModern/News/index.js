import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Container from 'common/components/UI/ContainerTwo';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import BlogPost from 'common/components/BlogPost';
import Image from 'common/components/Image';
import commentIcon from 'common/assets/image/agencyModern/comment.png';

import SectionWrapper, { SectionHeading, NewsWrapper } from './news.style';

const News = () => {
  const Data = useStaticQuery(graphql`
    query {
      agencyModernJson {
        posts {
          id
          title
          comments_count
          icon {
            publicURL
          }
        }
      }
    }
  `);
  return (
    <SectionWrapper id="news">
      <Container>
        <SectionHeading>
          <Heading as="h2" content="Popular blog post we update everyday" />
          <Text content="Focus only on the meaning, we take care of the design. As soon as the meeting end you can export in one click." />
        </SectionHeading>
        <NewsWrapper>
          {Data.agencyModernJson.posts.map((post) => (
            <BlogPost
              key={`news-${post.id}`}
              thumbUrl={post.icon.publicURL}
              title={post.title}
              link={
                <React.Fragment>
                  <Image src={commentIcon} alt="comment" />
                  {post.comments_count} comments
                </React.Fragment>
              }
            />
          ))}
        </NewsWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default News;
