const request = require('request');
const apiUrl = 'https://api.thecatapi.com/v1/breeds/search?q=';


const fetchBreedDescription = (breedName, callback) => {
request(apiUrl + breedName, (error, response, body) => {
  if (error) {
    return callback(error, null);
  }
  
  
  const data = JSON.parse(body);
  if (data[0] === undefined) {
    return callback('Could not find the Cat breed asked', null);
  }

  let desc = data[0].description;
  console.log(desc);
  return callback(null, desc);
});
};
module.exports = {fetchBreedDescription};

