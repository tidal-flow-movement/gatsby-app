import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Container from 'common/components/UI/Container';
import Image from 'common/components/Image';
import GalleryArea, { Row, Col } from './gallery.style';

const Gallery = () => {
  const Data = useStaticQuery(graphql`
    query {
      appMinimalJson {
        GalleryData {
          image {
            publicURL
          }
        }
      }
    }
  `);
  return (
    <GalleryArea>
      <Container className="Container">
        <Row>
          {Data.appMinimalJson.GalleryData.map(({ image }, index) => (
            <Col key={`gallery-key-${index}`}>
              <Image src={image.publicURL} alt="gallery image" />
            </Col>
          ))}
        </Row>
      </Container>
    </GalleryArea>
  );
};

export default Gallery;
