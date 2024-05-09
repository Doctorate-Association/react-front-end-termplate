import * as Setting from '../../config/casdoor';

export function isLogin() {
  return localStorage.getItem('accessToken') !== null;
}

export function getToken() {
  return localStorage.getItem('accessToken');
}

export function setToken(token: string) {
  localStorage.setItem('accessToken', token);
}

export function goToLink(link: string) {
  window.location.href = link;
}

export async function redirectToSignin() {
  await Setting.CasdoorSDK.signin_redirect();
}

export async function getUserInfo() {
  const token = getToken();

  if (token === null) {
    return null;
  }

  return await Setting.CasdoorSDK.getUserInfo(token);
}

// export function gotoProfilePage(account:Account) {
//   window.location.assign(Setting.CasdoorSDK.getMyProfileUrl(account));
// }

export function logout() {
  localStorage.removeItem('accessToken');
}
