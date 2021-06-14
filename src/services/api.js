const ENDPOINT = 'https://awesome-profile-cards.herokuapp.com/card';

const postDataFetch = (dataState) => {
  return fetch(ENDPOINT, {
    method: 'POST',
    body: JSON.stringify(dataState),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export default postDataFetch;
