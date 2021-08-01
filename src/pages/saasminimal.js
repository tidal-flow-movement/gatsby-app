import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { sassMinimalTheme } from 'common/theme/sassMinimal';
import { ResetCSS } from 'common/assets/css/style';
import {
  GlobalStyle,
  ContentWrapper,
} from 'containers/SassMinimal/sassMinimal.style';

import BannerSection from 'containers/SassMinimal/BannerSection';
import Navbar from 'containers/SassMinimal/Navbar';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import Company from 'containers/SassMinimal/Company';
import FeatureSection from 'containers/SassMinimal/FeatureSection';
import CustomerTracking from 'containers/SassMinimal/CustomerTracking';
import ServiceSection from 'containers/SassMinimal/ServiceSection';
import FeatureTwoSection from 'containers/SassMinimal/FeatureTwoSection';
import TwitterSection from 'containers/SassMinimal/TwitterSection';
import Pricing from 'containers/SassMinimal/Pricing';
import FaqSection from 'containers/SassMinimal/Faq';
import ContactUs from 'containers/SassMinimal/ContactUs';
import Footer from 'containers/SassMinimal/Footer';
import Seo from 'components/seo';

const SaasMinimal = () => {
  return (
    <ThemeProvider theme={sassMinimalTheme}>
      <Fragment>
        <Seo title="SaaS Minimal | A react Gatsby landing page" />

        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection />
          <Company />
          <FeatureSection />
          <CustomerTracking />
          <ServiceSection />
          <FeatureTwoSection />
          <TwitterSection />
          <Pricing />
          <FaqSection />
          <ContactUs />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default SaasMinimal;
