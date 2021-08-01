import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Icon } from 'react-icons-kit';
import { iosArrowThinRight } from 'react-icons-kit/ionicons/iosArrowThinRight';
import { rgba } from 'polished';

import Container from 'common/components/UI/ContainerTwo';
import Image from 'common/components/Image';
import GatsbyImage from 'common/components/GatsbyImage';
import Section, {
  ContentWrapper,
  Content,
  HelpBlock,
  Illustration,
} from './support.style';

const Support = () => {
  const data = useStaticQuery(graphql`
    query {
      agencyDigitalJson {
        helps {
          id
          title
          desc
          icon {
            publicURL
          }
        }
      }
      illustration: file(
        relativePath: { eq: "image/agencyDigital/support_illustration.png" }
      ) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);
  const helps = data.agencyDigitalJson.helps;
  return (
    <Section>
      <Container>
        <ContentWrapper>
          <Content>
            <h2>Do you need help? Our support team ready to help you</h2>
            <p>
              Get your tests delivered at let home collect sample from the
              victory of the managements that supplies best design system
              guidelines ever.
            </p>
            {helps.map((help) => (
              <HelpBlock key={help.id}>
                <div className="icon">
                  <Image src={help.icon.publicURL} alt={help.title} />
                </div>
                <div className="content">
                  <h4>
                    {help.title}{' '}
                    <Icon
                      icon={iosArrowThinRight}
                      size={30}
                      style={{ color: rgba('#0F2137', 0.3) }}
                    />
                  </h4>
                  <p>{help.desc}</p>
                </div>
              </HelpBlock>
            ))}
          </Content>
          <Illustration>
            <GatsbyImage
              src={
                (data.illustration !== null) | undefined
                  ? data.illustration.childImageSharp.gatsbyImageData
                  : {}
              }
              alt="support illustration"
            />
          </Illustration>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default Support;
