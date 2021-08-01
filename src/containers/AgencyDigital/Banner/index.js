import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Text from 'common/components/Text';
import Image from 'common/components/Image';
import Input from 'common/components/Input';
import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/ContainerTwo';
import Section, {
  ContentWrapper,
  BannerContent,
  Subscribe,
  SponsoredBy,
  ImageGroup,
} from './banner.style';

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      agencyDigitalJson {
        clients {
          id
          name
          logo {
            publicURL
          }
        }
      }
    }
  `);
  return (
    <Section id="home">
      <Container>
        <ContentWrapper>
          <BannerContent>
            <Heading
              as="h1"
              content="A Creative way to grow your Exciting Business ideas"
            />
            <Text
              className="banner-caption"
              content="Get your blood tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever."
            />
            <Subscribe>
              <Input
                inputType="email"
                placeholder="Enter Email Address"
                iconPosition="left"
                aria-label="email"
              />
              <Button title="Subscribe" type="submit" />
            </Subscribe>
            <SponsoredBy>
              <Text className="sponsoredBy" content="Clients:" />
              <ImageGroup>
                {data.agencyDigitalJson.clients.map((client) => (
                  <Image
                    key={client.id}
                    src={client.logo.publicURL}
                    alt={client.name}
                  />
                ))}
              </ImageGroup>
            </SponsoredBy>
          </BannerContent>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default Banner;
