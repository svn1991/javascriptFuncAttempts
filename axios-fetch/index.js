// Promise based HTTP client for the browser and node.js
const fetch = require('node-fetch');
const axios = require('axios');

/* AXIOS Example */

// Make a request for a user with a given ID

axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
    console.log('-------------------------------------------------------')
  });

  axios.post('https://jsonplaceholder.typicode.com/posts')
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
    console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
  });



/* FETCH Example */

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(json => {
    console.log(json);
    console.log('######################################################');
  });