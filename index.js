module.exports = function (func) {
  return function () {
    var result = func.apply(null, arguments)
    console.log(result)
    return result
  }
}

