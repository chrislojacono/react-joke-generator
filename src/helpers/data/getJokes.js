import axios from 'axios';

const getAJoke = (type) => new Promise((resolve, reject) => {
  axios.get(`https://official-joke-api.appspot.com/jokes/${type}/random`).then((response) => {
    resolve(response.data[0]);
    console.warn(response.data[0]);
  }).catch((error) => reject(error));
});

export default getAJoke;
