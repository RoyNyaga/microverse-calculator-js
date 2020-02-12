const Big = require('big.js')

const operator = (numberOne, numberTwo, operation) => {
  console.log(numberOne, 'one')
  console.log(operation)
  console.log(numberTwo, 'two')
  const bigNumberOne = Big(numberOne)
  const bigNumberTwo = Big(numberTwo)
  switch (operation) {
    case '+':
      return bigNumberTwo.plus(bigNumberOne).toString()
    case '-':
      return bigNumberTwo.minus(bigNumberOne).toString()
    case '÷':
      if (bigNumberOne == '0') {
        alert('operation is undefined')
        return
      } else {
        return bigNumberTwo.div(bigNumberOne).toString()
      }
    case 'X':
      return bigNumberTwo.times(bigNumberOne).toString()
    case '%':
      return bigNumberTwo.div(100).toString()
    default:
      return bigNumberTwo
  }
}

export default operator
