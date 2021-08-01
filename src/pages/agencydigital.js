import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { theme } from 'common/theme/agencyDigital';
import { ResetCSS } from 'common/assets/css/style';
import {
  GlobalStyle,
  ContentWrapper,
} from 'containers/AgencyDigital/agencyDigital.style';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import Navbar from 'containers/AgencyDigital/Navbar';
import Banner from 'containers/AgencyDigital/Banner';
import Service from 'containers/AgencyDigital/Service';
import CustomerSupport from 'containers/AgencyDigital/CustomerSupport';
import Pricing from 'containers/AgencyDigital/Pricing';
import Support from 'containers/AgencyDigital/Support';
import OurCustomer from 'containers/AgencyDigital/OurCustomer';
import News from 'containers/AgencyDigital/News';
import Footer from 'containers/AgencyDigital/Footer';
import Seo from 'components/seo';

const AgencyDigital = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Seo title="Agency Digital" />
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <Banner />
          <Service />
          <CustomerSupport />
          <Pricing />
          <Support />
          <OurCustomer />
          <News />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default AgencyDigital;
