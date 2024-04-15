import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      links={[
        {
          key: 'DoctorateAssociation',
          title: 'Copyright ©2024 Doctorate Association',
          href: 'https://www.doctorateassociation.org/',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
