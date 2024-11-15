const jwtProp = 'wrktjwt';

export const setJwt = (token: string): void => {
  localStorage.setItem(jwtProp, token);
};

export const getJwt = () => {
  const jwt = localStorage.getItem(jwtProp);
  return jwt;
};

export const clearJwt = () => {
  localStorage.removeItem(jwtProp);
};
