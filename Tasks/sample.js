// Refactor following solution
// Get one random element from an array

const SAMPLE = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

module.exports = SAMPLE;
