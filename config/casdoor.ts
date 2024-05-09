import Sdk from 'casdoor-js-sdk';

const sdkConfig = {
  serverUrl: 'https://sso.dev.com:8000',
  clientId: '5bde5f964c14d5016689',
  appName: 'web_dev',
  organizationName: 'doctorate',
  redirectPath: '/callback',
};

export const CasdoorSDK = new Sdk(sdkConfig);
