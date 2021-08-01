import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Modal } from '@redq/reuse-modal';
import { theme } from 'common/theme/appCreative';
import { ResetCSS } from 'common/assets/css/style';
import Sticky from 'react-stickynode';
import Navbar from 'containers/AppCreative/Navbar';
import Banner from 'containers/AppCreative/Banner';
import KeyFeatures from 'containers/AppCreative/KeyFeatures';
import ChooseUs from 'containers/AppCreative/ChooseUs';
import Experiences from 'containers/AppCreative/Experience';
import FeatureSlider from 'containers/AppCreative/FeatureSlider';
import Pricing from 'containers/AppCreative/Pricing';
import Testimonials from 'containers/AppCreative/Testimonials';
import AvailableStore from 'containers/AppCreative/AvailableStore';
import Faqs from 'containers/AppCreative/Faq';
import CallToAction from 'containers/AppCreative/CallToAction';
import Footer from 'containers/AppCreative/Footer';
import GlobalStyle, {
  AppWrapper,
  ContentWrapper,
} from 'containers/AppCreative/appCreative.style';
import '@redq/reuse-modal/es/index.css';

import Seo from 'components/seo';

const AppCreative = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Seo title="App Creative" />
        <Modal />
        <ResetCSS />
        <GlobalStyle />

        <AppWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-active">
            <Navbar />
          </Sticky>
          <ContentWrapper>
            <Banner />
            <KeyFeatures />
            <ChooseUs />
            <Experiences />
            <FeatureSlider />
            <Pricing />
            <Testimonials />
            <AvailableStore />
            <Faqs />
            <CallToAction />
          </ContentWrapper>
          <Footer />
        </AppWrapper>
      </>
    </ThemeProvider>
  );
};
export default AppCreative;
