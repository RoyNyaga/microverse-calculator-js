const Big = require('big.js')

const operator = (numberOne, numberTwo, operation) => {
  const bigNumberOne = Big(numberOne)
  const bigNumberTwo = Big(numberTwo)
  switch (operation) {
    case '+':
      return bigNumberOne.plus(bigNumberTwo).toString()
    case '-':
      return bigNumberOne.minus(bigNumberTwo).toString()
    case '/':
      return bigNumberOne.div(bigNumberTwo).toString()
    case 'x':
      return bigNumberOne.times(bigNumberTwo).toString()
    case '%':
      return bigNumberOne.div(100).toString()
    default:
      return bigNumberTwo
  }
}

export default operator
