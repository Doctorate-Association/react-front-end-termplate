import React, { useEffect } from 'react';
import * as Setting from '../../../config/casdoor';
import { goToLink, setToken } from '@/utils/casdoor';

export default function Page() {
  useEffect(() => {
    Setting.CasdoorSDK.exchangeForAccessToken()
      .then((res) => {
        setToken(res.access_token);
        goToLink('/');
      })
      .catch((err) => {
        console.error(err);
        goToLink('/');
      });
  }, []);

  return <div> Signing in... </div>;
}
