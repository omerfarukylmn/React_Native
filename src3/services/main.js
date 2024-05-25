import {BaseUrl, BaseUrl1} from './NetworkUrl';

const get = urlOption => {
  return fetch(BaseUrl + urlOption, {
    headers: {
      'content-type': 'application/json',
      authorization: 'apikey 6IpduJYMKDgFOGNZ6MVord:0HROohamAVEW6rcegp5Czu',
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error:', error);
      throw error;
    });
};

const post = (urlOption, body) => {
  return fetch(BaseUrl1 + urlOption, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: 'apikey 6IpduJYMKDgFOGNZ6MVord:0HROohamAVEW6rcegp5Czu',
    },
    body: JSON.stringify(body),
  })
    .then(response => {
      return response.json();
    })
    .catch(error => {
      console.error('Error:', error);
      throw error;
    });
};

export {get, post};
