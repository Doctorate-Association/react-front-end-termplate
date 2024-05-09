import Sdk from 'casdoor-js-sdk';

export const ServerUrl = 'http://api.dev.com:8080';

const sdkConfig = {
  serverUrl: 'http://sso.dev.com:8000',
  clientId: '5bde5f964c14d5016689',
  appName: 'web_dev',
  organizationName: 'doctorate',
  redirectPath: '/callback',
};

export const CasdoorSDK = new Sdk(sdkConfig);
