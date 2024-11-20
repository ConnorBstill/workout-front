const jwtKey = 'wrktjwt';
const expiresKey = 'wrkexpires';

export const setJwt = (token: string): void => {
  localStorage.setItem(jwtKey, token);
};

export const getJwt = () => {
  const jwt = localStorage.getItem(jwtKey);
  return jwt;
};

export const clearJwt = () => {
  localStorage.removeItem(jwtKey);
};

export const setRefresh = (token: string): void => {
  localStorage.setItem(expiresKey, token);
};

export const getRefresh = () => {
  const refreshToken = localStorage.getItem(expiresKey);
  return refreshToken;
};

export const clearRefresh = () => {
  localStorage.removeItem(jwtKey);
};

export const checkTokens = () => {
  try {
    if (getJwt()) {
      const expires = Number(getRefresh());
      const seconds = Math.floor(new Date().getTime() / 1000);

      if (seconds >= expires) {
        clearJwt();

        return ''
      } else {
        return getJwt()
      }
    }

    return '';
  } catch (e) {
    // this.defaultErrorHandler();
  }
}
