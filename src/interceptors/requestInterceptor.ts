import { RequestConfig } from '@umijs/max';
import { getToken, isLogin } from '@/utils/casdoor';

export function authHeaderInterceptor(url: string, options: RequestConfig) {
  console.log('authHeaderInterceptor', url, options);
  if (isLogin()) {
    const accessToken = getToken();
    const authHeader = { Authorization: `Bearer ${accessToken}` };

    console.warn('authHeaderInterceptor', authHeader);
    return {
      url: `${url}`,
      options: { ...options, interceptors: true, headers: authHeader },
    };
  } else {
    return {
      url: `${url}`,
      options: { ...options, interceptors: false },
    };
  }
}
