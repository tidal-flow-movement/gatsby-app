import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'common/components/Image';
import Box from 'common/components/Box';
import Container from 'common/components/UI/Container';

import { CompanyWrapper } from './company.style';

const Company = () => {
  const Data = useStaticQuery(graphql`
    query {
      sassMinimalJson {
        COMPANY_DATA {
          image {
            publicURL
          }
        }
      }
    }
  `);
  return (
    <CompanyWrapper>
      <Container>
        {Data.sassMinimalJson.COMPANY_DATA.map((company, index) => (
          <Box key={`company-box-${index}`}>
            <Image src={company.image.publicURL} alt="Client Image" />
          </Box>
        ))}
      </Container>
    </CompanyWrapper>
  );
};

export default Company;
