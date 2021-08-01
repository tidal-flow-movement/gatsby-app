import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Icon } from 'react-icons-kit';
import { facebook } from 'react-icons-kit/fa/facebook';
import { dribbble } from 'react-icons-kit/fa/dribbble';
import { twitter } from 'react-icons-kit/fa/twitter';
import Fade from 'react-reveal/Fade';
import { Link } from 'gatsby';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Text from 'common/components/Text';

import FooterWrapper, {
  FooterInner,
  CopyrightInfo,
  FooterWidget,
  Nav,
} from './footer.style';

const socialLinks = [
  {
    id: 1,
    icon: <Icon icon={facebook} />,
    name: 'facebook',
    link: '#',
  },
  {
    id: 2,
    icon: <Icon icon={twitter} />,
    name: 'twitter',
    link: '#',
  },
  {
    id: 3,
    icon: <Icon icon={dribbble} />,
    name: 'dribbble',
    link: '#',
  },
];

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      appCreativeJson {
        footerWidget {
          footerLogo {
            publicURL
          }
          siteName
          siteUrl
          aboutUs {
            title
            menuItems {
              id
              url
              text
            }
          }
          ourInformation {
            title
            menuItems {
              id
              url
              text
            }
          }
          myAccount {
            title
            menuItems {
              id
              url
              text
            }
          }
        }
      }
    }
  `);

  const {
    footerLogo,
    siteName,
    siteUrl,
    aboutUs,
    ourInformation,
    myAccount,
  } = data.appCreativeJson.footerWidget;
  return (
    <FooterWrapper>
      <Container>
        <FooterInner>
          <CopyrightInfo>
            <Fade up delay={100}>
              <Image src={footerLogo.publicURL} alt="Logo" />
              <p>
                © 2020 Team
                <Link to={siteUrl}>{siteName}</Link>
              </p>
              <Text className="copyright" content="All rights reserved." />
              <Nav className="social__share">
                {socialLinks.map((item) => (
                  <Link
                    key={`link-key${item.id}`}
                    to={item.link}
                    className={item.name}
                  >
                    {item.icon}
                  </Link>
                ))}
              </Nav>
            </Fade>
          </CopyrightInfo>

          <FooterWidget>
            <Fade up delay={200}>
              <Heading as="h4" content={aboutUs.title} />
              <Nav>
                {aboutUs.menuItems.map((item) => (
                  <Link key={item.id} to={item.url}>
                    {item.text}
                  </Link>
                ))}
              </Nav>
            </Fade>
          </FooterWidget>

          <FooterWidget>
            <Fade up delay={300}>
              <Heading as="h4" content={ourInformation.title} />
              <Nav>
                {ourInformation.menuItems.map((item) => (
                  <Link key={item.id} to={item.url}>
                    {item.text}
                  </Link>
                ))}
              </Nav>
            </Fade>
          </FooterWidget>

          <FooterWidget>
            <Fade up delay={400}>
              <Heading as="h4" content={myAccount.title} />
              <Nav>
                {myAccount.menuItems.map((item) => (
                  <Link key={item.id} to={item.url}>
                    {item.text}
                  </Link>
                ))}
              </Nav>
            </Fade>
          </FooterWidget>
        </FooterInner>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
