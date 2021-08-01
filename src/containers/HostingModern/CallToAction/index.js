import React from 'react';

import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import Image from 'common/components/Image';

import SectionWrapper, { Content, ButtonWrap } from './callToAction.style';

import illustration3 from 'common/assets/image/hostingModern/illustration3.png';
import illustration4 from 'common/assets/image/hostingModern/illustration4.png';

const CallToAction = () => {
  return (
    <SectionWrapper>
      <Container>
        <Content>
          <Heading
            as="h3"
            content="Do you have any question? Feel free to contact us"
          />
          <ButtonWrap>
            <Image src={illustration3} alt="illustration3" />
            <Button title="CONTACT US NOW" />
            <Image src={illustration4} alt="illustration4" />
          </ButtonWrap>
        </Content>
      </Container>
    </SectionWrapper>
  );
};

export default CallToAction;
