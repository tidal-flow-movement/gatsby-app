import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { theme } from 'common/theme/saasMinimal2';
import { ResetCSS } from 'common/assets/css/style';
import {
  GlobalStyle,
  ContentWrapper,
} from 'containers/SaasMinimal2/saasMinimal2.style';

import { DrawerProvider } from 'common/contexts/DrawerContext';
import Navbar from 'containers/SaasMinimal2/Navbar';
import Banner from 'containers/SaasMinimal2/Banner';
import Features from 'containers/SaasMinimal2/Features';
import TrackAudience from 'containers/SaasMinimal2/TrackAudience';
import Pricing from 'containers/SaasMinimal2/Pricing';
import Clients from 'containers/SaasMinimal2/Clients';
import Statistics from 'containers/SaasMinimal2/Statistics';
import AdvancedAnalytics from 'containers/SaasMinimal2/AdvancedAnalytics';
import Dashboard from 'containers/SaasMinimal2/Dashboard';
import Testimonial from 'containers/SaasMinimal2/Testimonial';
import Subscription from 'containers/SaasMinimal2/Subscription';
import Footer from 'containers/SaasMinimal2/Footer';
import Seo from 'components/seo';

const SaasMinimal2 = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Seo title="SaaS Minimal 2 | A react Gatsby landing page" />

        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="is-sticky">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <Banner />
          <Features />
          <TrackAudience />
          <Pricing />
          <Clients />
          <Statistics />
          <AdvancedAnalytics />
          <Dashboard />
          <Testimonial />
          <Subscription />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default SaasMinimal2;
