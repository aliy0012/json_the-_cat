const request = require('request');

const url = 'https://api.thecatapi.com/v1/breeds/search?q='
const searchKey = process.argv[2];

const apiUrl = url + searchKey;

request(apiUrl,(error, response, body) => {
  if (error) {
    console.log(error);
  }
  
  
  const data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log("Could not find the Cat breed asked");
    process.exit(1);
  }

  console.log(data[0].description);
});

