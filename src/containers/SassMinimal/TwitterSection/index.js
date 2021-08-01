import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Icon } from 'react-icons-kit';
import { twitter } from 'react-icons-kit/fa/twitter';

import Image from 'common/components/Image';
import Box from 'common/components/Box';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';

import { TwitterWrapper } from './twitter.style';

const TwitterSection = () => {
  const Data = useStaticQuery(graphql`
    query {
      sassMinimalJson {
        TWITTER_DATA {
          name
          designation
          content
          image {
            publicURL
          }
        }
      }
    }
  `);
  return (
    <TwitterWrapper>
      <Container>
        <Box className="blockTitle">
          <Heading as="h2" content="What our clients say about us" />
          <Text as="p" content="Some comments highlights from twitter" />
        </Box>
        <Box className="row">
          {Data.sassMinimalJson.TWITTER_DATA.map((tweet, index) => (
            <Box className="column" key={`twitter-${index}`}>
              <Box className="twitterBox">
                <Box className="twitterBoxInner">
                  <Box className="twitterTop">
                    <Image src={tweet.image.publicURL} alt="Twitter Avatar" />
                    <Heading as="h3" content={tweet.name} />
                    <Text as="span" content={tweet.designation} />
                    <Icon icon={twitter} size={27} />
                  </Box>
                  <Box className="twitterContent">
                    <Text as="p" content={tweet.content} />
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
        <Box className="text-center">
          <Link className="viewTwitter" to="#">
            More on Twitter
          </Link>
        </Box>
      </Container>
    </TwitterWrapper>
  );
};

export default TwitterSection;
