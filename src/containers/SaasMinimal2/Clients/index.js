import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Container from 'common/components/UI/Container';
import Image from 'common/components/Image';

const Clients = () => {
  const data = useStaticQuery(graphql`
    query {
      saasMinimal2Json {
        clients {
          id
          name
          logo {
            publicURL
          }
        }
      }
    }
  `);
  return (
    <Section>
      <Container>
        <LogoWrapper>
          {data?.saasMinimal2Json?.clients?.map((client) => (
            <Image
              key={client.id}
              src={client.logo.publicURL}
              alt={client.name}
            />
          ))}
        </LogoWrapper>
      </Container>
    </Section>
  );
};

export default Clients;

const Section = styled.section`
  padding: 70px 0;
  @media only screen and (max-width: 768px) {
    padding: 60px 0 50px;
  }
  @media only screen and (max-width: 480px) {
    padding: 50px 0 40px;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media only screen and (max-width: 768px) {
    overflow-x: scroll;
    img {
      margin-right: 60px;
    }
  }
  @media only screen and (max-width: 480px) {
    img {
      margin-right: 30px;
    }
  }
`;
