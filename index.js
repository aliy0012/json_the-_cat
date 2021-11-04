const fetchBreedDescription = require("./breedFetcher");

const searchKey = process.argv[2];



fetchBreedDescription(searchKey, (error, desc) => {
  if(error) {
    console.log('error');
  }
  console.log(desc);
});