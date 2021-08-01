import React, { useState, useEffect, useCallback, Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { Modal } from '@redq/reuse-modal';
import { appTheme } from 'common/theme/app';
import {
  GlobalStyle,
  AppWrapper,
  ConditionWrapper,
} from 'containers/App/app.style';
import { ResetCSS } from 'common/assets/css/style';
import Navbar from 'containers/App/Navbar';
import DomainSection from 'containers/App/Banner';
import FeatureSection from 'containers/App/FeatureSection';
import ControllSection from 'containers/App/Control';
import TestimonialSection from 'containers/App/Testimonial';
import PartnerHistory from 'containers/App/PartnerHistory';
import PaymentSection from 'containers/App/PaymentSection';
import Footer from 'containers/App/Footer';
import FeatureSlider from 'containers/App/FeatureSlider';
import FeatureSliderTwo from 'containers/App/FeatureSliderTwo';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import '@redq/reuse-modal/es/index.css';
import Seo from 'components/seo';

function useWindowSize() {
  const isClient = typeof window === 'object';

  const getSize = useCallback(() => {
    return {
      innerWidth: isClient ? window.innerWidth : undefined,
      innerHeight: isClient ? window.innerHeight : undefined,
    };
  }, [isClient]);

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isClient, getSize]); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

const App = () => {
  const size = useWindowSize();

  return (
    <ThemeProvider theme={appTheme}>
      <Fragment>
        <Seo title="App | A react next landing page" />
        <Modal />
        <ResetCSS />
        <GlobalStyle />
        <AppWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <DomainSection />
          <FeatureSection />
          <ControllSection />
          <ConditionWrapper id="keyfeature">
            {size.innerWidth > 1100 ? (
              <FeatureSlider className="fet-slider-1" />
            ) : (
              <FeatureSliderTwo className="fet-slider-2" />
            )}
          </ConditionWrapper>
          <PartnerHistory />
          <PaymentSection />
          <TestimonialSection />
          <Footer />
        </AppWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default App;
