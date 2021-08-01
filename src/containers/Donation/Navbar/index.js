import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import ScrollSpyMenu from 'common/components/ScrollSpyMenu';
import Scrollspy from 'react-scrollspy';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Icon } from 'react-icons-kit';
import { androidMenu } from 'react-icons-kit/ionicons/androidMenu';
import { androidClose } from 'react-icons-kit/ionicons/androidClose';
import Button from 'common/components/Button';
import Logo from 'common/components/UIElements/Logo';
import Container from 'common/components/UI/Container';
import NavbarWrapper, {
  LogoContainer,
  MenuArea,
  MobileMenu,
} from './navbar.style';

import logo from 'common/assets/image/donation/logo-dark.png';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const data = useStaticQuery(graphql`
    query {
      donationJson {
        navItems {
          label
          path
          offset
        }
      }
    }
  `);
  const navItems = data.donationJson.navItems;

  const scrollItems = [];

  navItems.forEach((item) => {
    scrollItems.push(item.path.slice(1));
  });

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleMenuClose = () => {
    setMobileMenu(false);
  };

  return (
    <NavbarWrapper className="navbar">
      <Container>
        <LogoContainer>
          <Logo
            href="/donation"
            logoSrc={logo}
            title="Donation"
            className="logo-dark"
          />
        </LogoContainer>
        {/* end of logo */}

        <MenuArea>
          <ScrollSpyMenu
            className="menu-items"
            menuItems={navItems}
            offset={-84}
          />

          <Button
            className="menubar"
            icon={
              mobileMenu ? (
                <Icon className="bar" size={32} icon={androidClose} />
              ) : (
                <Fade>
                  <Icon className="close" size={32} icon={androidMenu} />
                </Fade>
              )
            }
            color="#0F2137"
            variant="textButton"
            onClick={handleMobileMenu}
          />
        </MenuArea>
      </Container>

      {/* start mobile menu */}
      <MobileMenu className={`mobile-menu ${mobileMenu ? 'active' : ''}`}>
        <Container>
          <Scrollspy
            className="menu"
            items={scrollItems}
            offset={-84}
            currentClassName="active"
          >
            {navItems.map((menu, index) => (
              <li key={`menu_key${index}`}>
                <AnchorLink
                  href={menu.path}
                  offset={menu.offset}
                  onClick={handleMenuClose}
                >
                  {menu.label}
                </AnchorLink>
              </li>
            ))}
          </Scrollspy>
        </Container>
      </MobileMenu>
      {/* end of mobile menu */}
    </NavbarWrapper>
  );
};

export default Navbar;
