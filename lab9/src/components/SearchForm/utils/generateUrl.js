const generateSearchUrl = (login) => {
  return (
    'https://api.github.com/search/users?q=' +
    encodeURIComponent(`${login} in:login`)
  );
};

export { generateSearchUrl };

export const generateUserUrl = (login) =>
  `https://api.github.com/users/${login}`;
