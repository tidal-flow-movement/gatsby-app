import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Text from 'common/components/Text';
import GatsbyImage from 'common/components/GatsbyImage';
import {
  Section,
  SectionHeading,
  TabPanel,
  TabPane,
  ProcessLine,
  LoadingLine,
  Illustration,
} from './dashboard.style';

const Dashboard = () => {
  const data = useStaticQuery(graphql`
    query {
      dashboard: file(
        relativePath: { eq: "image/saasMinimal2/dashboard.png" }
      ) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      saasMinimal2Json {
        dashboardProcess {
          id
          title
          icon {
            publicURL
          }
        }
      }
    }
  `);
  return (
    <Section id="dashboard">
      <Container>
        <SectionHeading>
          <Heading content="Analyze, measure, and improve your customer experience. Over and over again." />
        </SectionHeading>
        <TabPanel>
          <ProcessLine />
          <LoadingLine />
          {data?.saasMinimal2Json?.dashboardProcess?.map((item) => (
            <TabPane key={item.id}>
              <figure>
                <Image src={item.icon.publicURL} alt={item.title} />
              </figure>
              <Text content={item.title} />
            </TabPane>
          ))}
        </TabPanel>
        <Illustration>
          <GatsbyImage
            src={
              (data.dashboard !== null) | undefined
                ? data.dashboard.childImageSharp.gatsbyImageData
                : {}
            }
            alt="Illustration"
          />
        </Illustration>
      </Container>
    </Section>
  );
};

export default Dashboard;
