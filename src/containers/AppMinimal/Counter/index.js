import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Icon } from 'react-icons-kit';
import { androidArrowForward } from 'react-icons-kit/ionicons/androidArrowForward';
import Box from 'common/components/Box';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import CounterArea, { Row, Col } from './counter.style';

const Counter = () => {
  const Data = useStaticQuery(graphql`
    query {
      appMinimalJson {
        CounterData {
          blockTitle {
            title
            tagline
          }
          countBox {
            number
            text
            button {
              link
              label
            }
          }
        }
      }
    }
  `);
  const { blockTitle, countBox } = Data.appMinimalJson.CounterData;
  const { title, tagline } = blockTitle;
  return (
    <CounterArea>
      <Container className="Container">
        <Box className="topTitle">
          <Heading as="h2" content={title} />
          <Text as="p" content={tagline} />
        </Box>
        <Row>
          {countBox.map(({ number, text, button }, index) => (
            <Col key={`counter-key-${index}`}>
              <Box className="CounterBox">
                <Heading as="h3" content={`${number}%`} />
                <Text as="p" content={text} />
                <Link to={button.link} className="counterLink">
                  {button.label} <Icon size={18} icon={androidArrowForward} />
                </Link>
              </Box>
            </Col>
          ))}
        </Row>
      </Container>
    </CounterArea>
  );
};

export default Counter;
