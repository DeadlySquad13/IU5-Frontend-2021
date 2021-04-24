const generateUrl = (login) => {
  return (
    'https://api.github.com/search/users?q=' +
    encodeURIComponent(`${login} in:login`)
  );
};

const searchUsers = async (login) => {
  const TOKEN = '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';
  const searchResult = await fetch(generateUrl(login), {
    method: 'GET',
    headers: {
      Authorization: `Token ${TOKEN}`,
    },
  });

  if (!searchResult.ok) {
    throw new Error(`HTTP error! status: ${searchResult.status}`);
  } else {
    const searchResultData = await searchResult.json();
    console.log(searchResultData);
    return searchResultData;
  }
};

export default searchUsers;
