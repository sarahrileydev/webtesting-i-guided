module.exports = {
  add
};

function add(args) {
  const values = Array.isArray(args) ? args : Array.from(arguments);

  return values.reduce((sum, value) => {
    return sum + value;
  }, 0);
}

// return Array.from(arguments).reduce((sum, value) => {
//   return sum + value;
// }, 0);//start sum at zero
