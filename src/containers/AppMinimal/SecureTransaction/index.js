import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import { Icon } from 'react-icons-kit';
import { androidArrowForward } from 'react-icons-kit/ionicons/androidArrowForward';
import Image from 'common/components/Image';
import Container from 'common/components/UI/Container';
import GatsbyImage from 'common/components/GatsbyImage';
import SectionWrapper, { ContentWrapper } from './secure-transaction.style';

const SecureTransaction = () => {
  const Data = useStaticQuery(graphql`
    query {
      appMinimalJson {
        secureTransaction {
          title
          description
          image {
            thumb {
              childImageSharp {
                gatsbyImageData(
                  width: 700
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
            bubble {
              publicURL
            }
          }
        }
      }
    }
  `);
  const { image, title, description } = Data.appMinimalJson.secureTransaction;

  return (
    <SectionWrapper>
      <Container>
        <ContentWrapper>
          <div className="image">
            <GatsbyImage
              src={
                (image.thumb !== null) | undefined
                  ? image.thumb.childImageSharp.gatsbyImageData
                  : {}
              }
              alt="Transaction"
            />
            <Image
              src={image.bubble.publicURL}
              alt="bubble image"
              className="bubble-image"
            />
          </div>
          <div className="content">
            <Heading content={title} />
            <Text content={description} />
            <Link to="#" className="button">
              Learn More <Icon icon={androidArrowForward} />
            </Link>
          </div>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default SecureTransaction;
