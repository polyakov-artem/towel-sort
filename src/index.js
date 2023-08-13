module.exports = function towelSort (matrix = []) {
  let  result = [];

  matrix.forEach((arr, index) => {

    let currentArr = arr;

    if (index%2 != 0) {
      currentArr.reverse()
    };

    result = result.concat(currentArr);
  });

  return result
};

