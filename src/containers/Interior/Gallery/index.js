import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import GatsbyImage from 'common/components/GatsbyImage';
import GlideCarousel from 'common/components/GlideCarousel';
import GlideSlide from 'common/components/GlideCarousel/glideSlide';
import GalleryWrapper, { GalleryCard, Button } from './gallery.style';

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query {
      interiorJson {
        galleryData {
          id
          thumb_url {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          name
          link
        }
      }
    }
  `);

  const glideOptions = {
    type: 'carousel',
    perView: 5,
    gap: 0,
    breakpoints: {
      1200: {
        perView: 4,
      },
      991: {
        perView: 3,
      },
      480: {
        perView: 2,
      },
    },
  };
  return (
    <GalleryWrapper id="gallery">
      <GlideCarousel
        carouselSelector="gallery_carousel"
        options={glideOptions}
        nextButton={<i className="flaticon-next" />}
        prevButton={<i className="flaticon-left-arrow" />}
      >
        <Fragment>
          {data.interiorJson.galleryData.map((item) => (
            <GlideSlide key={`gallery_key${item.id}`}>
              <GalleryCard>
                <a href={item.link}>
                  <GatsbyImage
                    src={
                      (item.thumb_url !== null) | undefined
                        ? item.thumb_url.childImageSharp.gatsbyImageData
                        : {}
                    }
                    alt={item.name}
                  />
                  <Button className="read_more__btn">
                    <span className="arrow"></span>
                    {item.name}
                  </Button>
                </a>
              </GalleryCard>
            </GlideSlide>
          ))}
        </Fragment>
      </GlideCarousel>
    </GalleryWrapper>
  );
};

export default Gallery;
