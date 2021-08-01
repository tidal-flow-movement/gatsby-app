import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Tab, { Panel } from 'common/components/Tabs';
import GatsbyImage from 'common/components/GatsbyImage';
import SectionWrapper, { ContentWrapper } from './branchSection.style';

const BranchSection = () => {
  const data = useStaticQuery(graphql`
    query {
      charityJson {
        branchData {
          id
          menuItem
          image {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          slogan
          title
          description
          linkUrl
          linkText
        }
      }
    }
  `);

  const title = (text) => {
    return { __html: text };
  };

  return (
    <SectionWrapper id="branch">
      <Tab active={2}>
        {data.charityJson.branchData.map((item) => (
          <Panel
            title={<Text content={item.menuItem} />}
            key={`tab_key${item.id}`}
          >
            <ContentWrapper>
              <Fade>
                <div className="image">
                  <GatsbyImage
                    src={
                      (item.image !== null) | undefined
                        ? item.image.childImageSharp.gatsbyImageData
                        : {}
                    }
                    alt={`Charity landing image ${item.id}`}
                    className="tab_image"
                  />
                </div>
              </Fade>
              <div className="content">
                <Heading as="h4" content={item.slogan} />
                <h2 dangerouslySetInnerHTML={title(item.title)} />
                <Text content={item.description} />
                <a className="learn__more-btn" href={item.linkUrl}>
                  <span className="hyphen" />
                  <span className="btn_text">{item.linkText}</span>
                </a>
              </div>
            </ContentWrapper>
          </Panel>
        ))}
      </Tab>
    </SectionWrapper>
  );
};

export default BranchSection;
