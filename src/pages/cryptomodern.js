import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'common/theme/cryptoModern';
import { ResetCSS } from 'common/assets/css/style';
import Sticky from 'react-stickynode';
import Navbar from 'containers/CryptoModern/Navbar';
import Banner from 'containers/CryptoModern/Banner';
import CountDown from 'containers/CryptoModern/CountDown';
import Features from 'containers/CryptoModern/FeatureSection';
import WorkHistory from 'containers/CryptoModern/WorkHistory';
import Investment from 'containers/CryptoModern/Investment';
import FundRaising from 'containers/CryptoModern/FundRaising';
import Privacypolicy from 'containers/CryptoModern/Privacy';
import WalletSection from 'containers/CryptoModern/WalletSection';
import MapSection from 'containers/CryptoModern/MapSection';
import FaqSection from 'containers/CryptoModern/FaqSection';
import Newsletter from 'containers/CryptoModern/Newsletter';
import Footer from 'containers/CryptoModern/Footer';
import GlobalStyle, {
  CryptoWrapper,
  ContentWrapper,
} from 'containers/CryptoModern/cryptoModern.style';

import Seo from 'components/seo';

const CryptoModern = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Seo title="Crypto Modern" />

        <ResetCSS />
        <GlobalStyle />

        <CryptoWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-active">
            <Navbar />
          </Sticky>
          <ContentWrapper>
            <Banner />
            <CountDown />
            <Features />
            <WorkHistory />
            <Investment />
            <FundRaising />
            <Privacypolicy />
            <WalletSection />
            <MapSection />
            <FaqSection />
            <Newsletter />
          </ContentWrapper>
          <Footer />
        </CryptoWrapper>
      </>
    </ThemeProvider>
  );
};
export default CryptoModern;
