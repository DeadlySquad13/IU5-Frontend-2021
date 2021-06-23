const generateSearchUrl = (login: string):string => {
  return (
    'https://api.github.com/search/users?q=' +
    encodeURIComponent(`${login} in:login`)
  );
};

export { generateSearchUrl };

export const generateUserUrl = (login:string):string =>
  `https://api.github.com/users/${login}`;
