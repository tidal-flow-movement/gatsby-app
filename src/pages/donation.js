import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { theme } from 'common/theme/donation';
import { ResetCSS } from 'common/assets/css/style';
import Navbar from 'containers/Donation/Navbar';
import Banner from 'containers/Donation/Banner';
import Service from 'containers/Donation/Service';
import DonationFormSection from 'containers/Donation/DonationForm';
import Covid19Map from 'containers/Donation/Covid19Map';
import DonationGoal from 'containers/Donation/DonationGoal';
import DoctorsSuggestions from 'containers/Donation/DoctorsSuggestions';
import ThankYou from 'containers/Donation/ThankYou';
import Footer from 'containers/Donation/Footer';
import {
  GlobalStyle,
  ContentWrapper,
  CovidMap,
} from 'containers/Donation/donation.style';
import Seo from 'components/seo';

const Donation = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Seo title="Donation" />
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="is-sticky">
            <Navbar />
          </Sticky>
          <Banner />
          <Service />
          <CovidMap>
            <DonationFormSection />
            <Covid19Map />
          </CovidMap>
          <DoctorsSuggestions />
          <DonationGoal />
          <ThankYou />
          <Footer />
        </ContentWrapper>
        {/* End of charity wrapper section */}
      </Fragment>
    </ThemeProvider>
  );
};
export default Donation;
