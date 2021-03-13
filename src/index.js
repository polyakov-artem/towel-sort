module.exports = function towelSort (matrix) {
  if (!Array.isArray(matrix)) return [];

  return matrix.reduce((acc, current, index)=>{
    if(index%2) current.reverse();
    return [...acc, ...current]
  }, [])
  
}
