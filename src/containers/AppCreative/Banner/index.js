import React from 'react';
import Fade from 'react-reveal/Fade';
import { useStaticQuery, graphql } from 'gatsby';
import { Icon } from 'react-icons-kit';
import { playCircle } from 'react-icons-kit/fa/playCircle';
import { openModal, closeModal } from '@redq/reuse-modal';
import Text from 'common/components/Text';
import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import GatsbyImage from 'common/components/GatsbyImage';
import BannerWrapper, {
  BannerContent,
  BannerImage,
  BannerImageMobile,
  ButtonGroup,
  VideoWrapper,
} from './banner.style';

// close button for modal
const CloseModalButton = () => (
  <Button
    className="modalCloseBtn"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);

const ModalContent = () => (
  <VideoWrapper>
    <iframe
      title="Video"
      src="https://www.youtube.com/embed/hW98BFnVCm8"
      frameBorder="0"
    />
  </VideoWrapper>
);

const Banner = () => {
  const Data = useStaticQuery(graphql`
    query {
      appScreenshot: file(
        relativePath: { eq: "image/appCreative/bannerImg.png" }
      ) {
        childImageSharp {
          gatsbyImageData(
            width: 1252
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      bannerImgMobile: file(
        relativePath: { eq: "image/appCreative/availableThumb.png" }
      ) {
        childImageSharp {
          gatsbyImageData(
            width: 577
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);
  // modal handler
  const handleVideoModal = () => {
    openModal({
      config: {
        className: 'video-modal',
        disableDragging: true,
        default: {
          width: 'auto',
          height: 'auto',
          x: 0,
          y: 0,
        },
      },
      component: ModalContent,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };
  return (
    <BannerWrapper id="home">
      <Container>
        <BannerContent>
          <Fade up delay={100}>
            <Heading
              as="h1"
              content="Your trusted mobile app to make days beautiful 😘"
            />
          </Fade>
          <Fade up delay={200}>
            <Text content="There will be a day–in our lifetime–when we get to celebrate every person on the planet having access." />
          </Fade>
          <Fade up delay={300}>
            <ButtonGroup>
              <Button className="primary" title="Start 14-days free trail" />
              <Button
                className="text"
                variant="textButton"
                icon={<Icon icon={playCircle} />}
                iconPosition="left"
                title="How it works"
                onClick={handleVideoModal}
              />
            </ButtonGroup>
          </Fade>
        </BannerContent>
        <BannerImage>
          <GatsbyImage
            src={
              (Data.appScreenshot !== null) | undefined
                ? Data.appScreenshot.childImageSharp.gatsbyImageData
                : {}
            }
            alt="App Screenshot"
          />
        </BannerImage>
        <BannerImageMobile>
          <GatsbyImage
            src={
              (Data.bannerImgMobile !== null) | undefined
                ? Data.bannerImgMobile.childImageSharp.gatsbyImageData
                : {}
            }
            alt="App Screenshot"
          />
        </BannerImageMobile>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
