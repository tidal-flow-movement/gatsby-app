import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Icon } from 'react-icons-kit';
import { androidArrowForward } from 'react-icons-kit/ionicons/androidArrowForward';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import CallToActionArea, { Left, Right } from './callToAction.style';
const CallToAction = () => {
  const Data = useStaticQuery(graphql`
    query {
      appMinimalJson {
        CallToActionData {
          title
          text
          link {
            path
            label
          }
        }
      }
    }
  `);
  const { title, text, link } = Data.appMinimalJson.CallToActionData;
  const { path, label } = link;
  return (
    <CallToActionArea>
      <Container className="Container">
        <Left>
          <Heading as="h3" content={title} />
          <Text as="p" content={text} />
        </Left>
        <Right>
          <Link to={path}>
            {label}
            <Icon icon={androidArrowForward} />
          </Link>
        </Right>
      </Container>
    </CallToActionArea>
  );
};

export default CallToAction;
