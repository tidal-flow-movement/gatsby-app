import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Icon } from 'react-icons-kit';
import { checkCircle } from 'react-icons-kit/fa/checkCircle';
import { timesCircle } from 'react-icons-kit/fa/timesCircle';
import { ic_arrow_forward } from 'react-icons-kit/md/ic_arrow_forward';
import Container from 'common/components/UI/Container';
import Box from 'common/components/Box';
import Switch from 'common/components/Switch';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Select from 'common/components/Select';

import { PricingWrapper } from './pricing.style';

const options = [
  { label: '2,500 users', value: '2500-users' },
  { label: '1,500 users', value: '1500-users' },
  { label: '500 users', value: '500-users' },
];

const Pricing = () => {
  const Data = useStaticQuery(graphql`
    query {
      sassMinimalJson {
        MONTHLY_PRICING_TABLE {
          isRecomended
          price
          priceLabel
          name
          listItems {
            isDisabled
            content
          }
          url
          buttonLabel
        }
        YEARLY_PRICING_TABLE {
          isRecomended
          price
          priceLabel
          name
          listItems {
            isDisabled
            content
          }
          url
          buttonLabel
        }
      }
    }
  `);

  const [state, setState] = useState({
    toggle: true,
    data: Data.sassMinimalJson.MONTHLY_PRICING_TABLE,
  });

  const dataHandle = () => {
    setState({
      ...state,
      toggle: !state.toggle,
    });
  };

  return (
    <PricingWrapper id="pricing_section">
      <Container>
        <Box className="blockTitle">
          <Heading as="h2" content="What deal suit you perfect" />
          <Text
            as="p"
            content="We are designed with most exciting pricing plan"
          />
        </Box>
        <Box className="pricingFilter">
          <span>Monthly</span>
          <Switch
            switchColor="#fff"
            labelText=""
            labelPosition="left"
            onChange={dataHandle}
          />
          <span>Yearly</span>
          <span className="pricingOffer">Save 25%</span>
        </Box>
        {state.toggle === true ? (
          <Box className="row">
            {Data.sassMinimalJson.MONTHLY_PRICING_TABLE.map(
              (pricingTable, index) => (
                <Box className="col" key={`price-monthly-${index}`}>
                  <Box
                    className={`pricingBox ${
                      pricingTable.isRecomended === true ? 'recomended' : ''
                    }`}
                  >
                    <Box className="pricingHeading">
                      <Heading as="h3" content={pricingTable.price} />
                      <Text as="span" content={pricingTable.priceLabel} />
                    </Box>
                    <Text as="p" content={pricingTable.name} />
                    {pricingTable.isRecomended === true ? (
                      <Select
                        options={options}
                        defaultValue={options[0]}
                        id="pricingUsers"
                        components={{
                          IndicatorSeparator: () => null,
                        }}
                      />
                    ) : (
                      <span className="hr"></span>
                    )}
                    <Box className="pricingList">
                      {pricingTable.listItems.map((list, index) => (
                        <Box
                          key={`price-monthly-list-${index}`}
                          className={`pricingListItem ${
                            list.isDisabled === true ? 'disabled' : ''
                          }`}
                        >
                          {list.isDisabled === true ? (
                            <Icon icon={timesCircle} size={20} />
                          ) : (
                            <Icon icon={checkCircle} size={20} />
                          )}

                          {list.content}
                        </Box>
                      ))}
                    </Box>
                    <Link to={pricingTable.url} className="pricingBtn">
                      {pricingTable.buttonLabel}
                      <Icon icon={ic_arrow_forward} />
                    </Link>
                  </Box>
                </Box>
              )
            )}
          </Box>
        ) : (
          <Box className="row">
            {Data.sassMinimalJson.YEARLY_PRICING_TABLE.map(
              (pricingTable, index) => (
                <Box className="col" key={`price-yearly-${index}`}>
                  <Box
                    className={`pricingBox ${
                      pricingTable.isRecomended === true ? 'recomended' : ''
                    }`}
                  >
                    <Box className="pricingHeading">
                      <Heading as="h3" content={pricingTable.price} />
                      <Text as="span" content={pricingTable.priceLabel} />
                    </Box>
                    <Text as="p" content={pricingTable.name} />
                    {pricingTable.isRecomended === true ? (
                      <Select
                        options={options}
                        defaultValue={options[0]}
                        id="pricingUsers"
                        components={{
                          IndicatorSeparator: () => null,
                        }}
                      />
                    ) : (
                      <span className="hr"></span>
                    )}
                    <Box className="pricingList">
                      {pricingTable.listItems.map((list, index) => (
                        <Box
                          key={`price-yearly-list-${index}`}
                          className={`pricingListItem ${
                            list.isDisabled === true ? 'disabled' : ''
                          }`}
                        >
                          {list.isDisabled === true ? (
                            <Icon icon={timesCircle} size={20} />
                          ) : (
                            <Icon icon={checkCircle} size={20} />
                          )}

                          {list.content}
                        </Box>
                      ))}
                    </Box>
                    <Link to={pricingTable.url} className="pricingBtn">
                      {pricingTable.buttonLabel}
                      <Icon icon={ic_arrow_forward} />
                    </Link>
                  </Box>
                </Box>
              )
            )}
          </Box>
        )}
      </Container>
    </PricingWrapper>
  );
};

export default Pricing;
