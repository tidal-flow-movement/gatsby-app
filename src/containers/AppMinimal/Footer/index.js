import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Image from 'common/components/Image';
import Logo from 'common/components/UIElements/Logo';
import Container from 'common/components/UI/Container';
import FooterArea, {
  Left,
  Menu,
  CopyText,
  Social,
  SocialText,
} from './footer.style';

const Footer = () => {
  const Data = useStaticQuery(graphql`
    query {
      appMinimalJson {
        FooterData {
          menu {
            link
            label
          }
          logo {
            publicURL
          }
          social {
            link
            icon {
              publicURL
            }
          }
        }
      }
    }
  `);
  const { menu, logo, social } = Data.appMinimalJson.FooterData;
  const date = new Date();
  const year = date.getFullYear();

  return (
    <FooterArea>
      <Container className="Container">
        <Left>
          <Logo
            className="logo"
            href="/appminimal"
            logoSrc={logo.publicURL}
            title="App Classic"
          />
          <CopyText>
            Copyright © {year}
            <Link to="/">RedQ, Inc.</Link>
          </CopyText>
        </Left>
        <Menu>
          {menu.map(({ link, label }, index) => (
            <Link to={link} key={`footer-link-key-${index}`}>
              {label}
            </Link>
          ))}
        </Menu>
        <Social>
          <SocialText>Social:</SocialText>
          {social.map(({ link, icon }, index) => (
            <Link to={link} key={`footer-social-key-${index}`}>
              <Image src={icon.publicURL} alt="social image" />
            </Link>
          ))}
        </Social>
      </Container>
    </FooterArea>
  );
};

export default Footer;
