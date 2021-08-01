import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Container from 'common/components/UI/Container';
import Image from 'common/components/Image';
import Link from 'common/components/Link';

import {
  Section,
  ContentWrapper,
  Copyright,
  Nav,
  SocialProfiles,
  Icons,
} from './footer.style';

import logoDark from 'common/assets/image/saasMinimal2/logo-black.png';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      saasMinimal2Json {
        footerNav {
          id
          url
          title
        }
        socialLinks {
          id
          link
          label
          icon {
            publicURL
          }
        }
      }
    }
  `);
  return (
    <Section>
      <Container>
        <ContentWrapper>
          <Copyright>
            <figure>
              <Image src={logoDark} alt="saas minimal" />
            </figure>
            <p>
              Copyright © 2020 <Link href="#">RedQ, Inc.</Link>
            </p>
          </Copyright>
          <Nav>
            {data?.saasMinimal2Json?.footerNav?.map((item) => (
              <li key={item.id}>
                <Link href={item.url}>{item.title}</Link>
              </li>
            ))}
          </Nav>
          <SocialProfiles>
            <span>Social</span>
            <Icons>
              {data?.saasMinimal2Json?.socialLinks?.map((item) => (
                <Link key={item.id} href={item.url}>
                  <Image src={item.icon.publicURL} alt={item.label} />
                </Link>
              ))}
            </Icons>
          </SocialProfiles>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default Footer;
