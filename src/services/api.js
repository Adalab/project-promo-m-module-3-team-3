const ENDPOINT = "https://awesome-profile-cards.herokuapp.com/card";

const postDataFetch = (data) => {
  return (
    fetch(ENDPOINT),
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(data),
    }.then((response) => response.json())
  );
};

export { postDataFetch };
