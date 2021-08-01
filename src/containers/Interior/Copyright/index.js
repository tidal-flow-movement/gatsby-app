import React from 'react';
import Text from 'common/components/Text';
import CopyrightWrapper from './copyright.style';

const Copyright = ({ data }) => {
  return (
    <CopyrightWrapper className="copyright_section">
      <ul>
        {data.map((profile, index) => (
          <li key={`profile_key_${index}`}>
            <a href={profile.link}>
              <i className={profile.icon} />
            </a>
          </li>
        ))}
      </ul>
      <Text content="Copyrights 2019 @RedQ Inc" />
    </CopyrightWrapper>
  );
};

export default Copyright;
