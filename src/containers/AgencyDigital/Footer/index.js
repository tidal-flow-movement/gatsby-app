import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';

import Container from 'common/components/UI/ContainerTwo';
import Image from 'common/components/Image';
import Link from 'common/components/Link';
import {
  Section,
  FooterTop,
  FooterWidget,
  FooterBottom,
  Copyright,
  FooterNav,
} from './footer.style';
import Logo from 'common/assets/image/agencyDigital/logo.png';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      agencyDigitalJson {
        footer {
          id
          title
          list {
            id
            title
            link
          }
        }
        footerNav {
          id
          title
          link
        }
      }
    }
  `);
  const footer = data.agencyDigitalJson.footer;
  const footerNav = data.agencyDigitalJson.footerNav;
  return (
    <Section>
      <Container>
        <FooterTop>
          {footer.map((item) => (
            <Fade key={item.id} up delay={100 * item.id}>
              <FooterWidget key={item.id}>
                <h4>{item.title}</h4>
                <ul>
                  {item.list.map((item) => (
                    <li className="widgetListItem" key={item.id}>
                      <Link href={item.link}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </FooterWidget>
            </Fade>
          ))}
        </FooterTop>
        <FooterBottom>
          <Copyright>
            <Image src={Logo} alt="Agency Digital" />
            Copyright &copy; {new Date().getFullYear()} by Redq, Inc
          </Copyright>
          <FooterNav>
            {footerNav.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </FooterNav>
        </FooterBottom>
      </Container>
    </Section>
  );
};

export default Footer;
