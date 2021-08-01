import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Box from 'common/components/Box';
import Image from 'common/components/Image';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Logo from 'common/components/UIElements/Logo';
import Container from 'common/components/UI/Container';
import FooterWrapper, { List, ListItem } from './footer.style';

import logo from 'common/assets/image/sassMinimal/logo.png';
import FBImage from 'common/assets/image/sassMinimal/social-fb-1.png';
import TWImage from 'common/assets/image/sassMinimal/social-tw-1.png';
import DBImage from 'common/assets/image/sassMinimal/social-drb-1.png';

const Footer = ({
  row,
  col,
  colOne,
  colTwo,
  titleStyle,
  logoStyle,
  textStyle,
}) => {
  const Data = useStaticQuery(graphql`
    query {
      sassMinimalJson {
        FOOTER_WIDGET {
          title
          menuItems {
            url
            text
          }
        }
      }
    }
  `);
  return (
    <FooterWrapper>
      <Container className="footer_container">
        <Box className="row" {...row}>
          <Box {...colOne}>
            <Logo
              to="#"
              logoSrc={logo}
              title="SassMinimal"
              logoStyle={logoStyle}
            />
            <Box className="footerText">
              <Text as="span" content={`© ${new Date().getFullYear()} Team`} />{' '}
              <Link to="#">RedQ Inc</Link>
              <Text as="p" content="All rights reserved." />
            </Box>
            <Box className="footerSocial">
              <Link to="#">
                <Image src={FBImage} alt="" />
              </Link>
              <Link to="#">
                <Image src={TWImage} alt="" />
              </Link>
              <Link to="#">
                <Image src={DBImage} alt="" />
              </Link>
            </Box>
          </Box>
          {/* End of footer logo column */}
          <Box {...colTwo}>
            {Data.sassMinimalJson.FOOTER_WIDGET.map((widget, index) => (
              <Box className="col" {...col} key={`footer-widget-${index}`}>
                <Heading content={widget.title} {...titleStyle} />
                <List>
                  {widget.menuItems.map((item, index) => (
                    <ListItem key={`footer-list-item-${index}`}>
                      <Link to={item.url} className="ListItem">
                        {item.text}
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </Box>
          {/* End of footer List column */}
        </Box>
      </Container>
    </FooterWrapper>
  );
};

// Footer style props
Footer.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  colOne: PropTypes.object,
  colTwo: PropTypes.object,
  titleStyle: PropTypes.object,
  textStyle: PropTypes.object,
  logoStyle: PropTypes.object,
};

// Footer default style
Footer.defaultProps = {
  // Footer row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
  },
  // Footer col one style
  colOne: {
    width: [1, '25%', '25%', '25%'],
    mb: ['30px', 0],
    pl: ['15px', 0],
    pr: ['15px', '15px', 0],
  },
  // Footer col two style
  colTwo: {
    width: ['100%', '75%', '75%', '75%'],
    flexBox: true,
    flexWrap: 'wrap',
  },
  // Footer col default style
  col: {
    width: ['100%', '50%', '25%', '25%'],
    pl: '15px',
    pr: '15px',
    mb: '30px',
  },
  // widget title default style
  titleStyle: {
    color: '#0F2137',
    fontSize: '17px',
    fontWeight: '500',
    mb: '23px',
  },
  // Default logo size
  logoStyle: {
    width: '149px',
    mb: '15px',
  },
  // widget text default style
  textStyle: {
    color: '#0f2137',
    fontSize: '16px',
    mb: '10px',
  },
};

export default Footer;
