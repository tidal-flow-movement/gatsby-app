import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Icon } from 'react-icons-kit';
import { ic_play_arrow } from 'react-icons-kit/md/ic_play_arrow';
import Logo from 'common/components/UIElements/Logo';
import { openModal, closeModal } from '@redq/reuse-modal';
import Button from 'common/components/Button';
import Container from 'common/components/UI/Container';
import Image from 'common/components/Image';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import GatsbyImage from 'common/components/GatsbyImage';
import { SectionHeader } from '../appCreative.style';
import FeatureBlock from 'common/components/FeatureBlock';

import SectionWrapper, {
  ExperienceMainWrap,
  ExperienceWrapper,
  VideoWrapper,
  VideoArea,
  ClientWrapper,
  ImageSlider,
  ImageSlide,
} from './experience.style';

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
      src="https://www.youtube.com/embed/8ME-QAlW6Ww"
      frameBorder="0"
    />
  </VideoWrapper>
);

const Experiences = () => {
  const data = useStaticQuery(graphql`
    query {
      appCreativeJson {
        experiences {
          title
          slogan
          video_theme {
            childImageSharp {
              gatsbyImageData(
                width: 1230
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          features {
            id
            icon {
              publicURL
            }
            title
            description
          }
          clients {
            id
            logo {
              publicURL
            }
            name
            link
          }
        }
      }
    }
  `);

  const { slogan, title, features, video_theme, clients } =
    data.appCreativeJson.experiences;

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
    <SectionWrapper id="experience">
      <Container>
        <SectionHeader>
          <Heading content={title} />
          <Text content={slogan} />
        </SectionHeader>
        <ExperienceMainWrap>
          <VideoArea onClick={handleVideoModal}>
            <GatsbyImage
              src={
                (video_theme !== null) | undefined
                  ? video_theme.childImageSharp.gatsbyImageData
                  : {}
              }
              alt="videoThumb"
            />
            <Button
              className="video__btn"
              icon={<Icon className="plus" icon={ic_play_arrow} />}
            />
          </VideoArea>
          <ExperienceWrapper>
            {features.map((item, index) => (
              <FeatureBlock
                key={`post_key-${index}`}
                id={`post_id-${item.id}`}
                className="experience__item"
                icon={
                  <Image
                    src={item.icon.publicURL}
                    alt={`Icon ${item.id}`}
                    objectFit="cover"
                    className="experience__image"
                  />
                }
                iconPosition="left"
                title={<Heading as="h4" content={item.title} />}
                description={<Text content={item.description} />}
              />
            ))}
          </ExperienceWrapper>
        </ExperienceMainWrap>
        <ClientWrapper>
          <div className="client__text">
            <Text as="span" content={'Companies who worked with us proudly'} />
          </div>
          <ImageSlider>
            <ImageSlide>
              {clients.map((item) => (
                <Logo
                  key={`slide1__key${item.id}`}
                  href={item.link}
                  logoSrc={item.logo.publicURL}
                  title={item.name}
                />
              ))}
            </ImageSlide>
            <ImageSlide>
              {clients.map((item) => (
                <Logo
                  key={`slide2__key${item.id}`}
                  href={item.link}
                  logoSrc={item.logo.publicURL}
                  title={item.name}
                />
              ))}
            </ImageSlide>
          </ImageSlider>
        </ClientWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Experiences;
