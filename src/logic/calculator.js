import operator from './operator'

const calculate = (() => {
  const calculateOption = (calculatorObject, buttonName) => {
    let { total, next, operation } = calculatorObject
    const arrOperators = ['-', '+', '%', '÷', 'X']

    if (arrOperators.includes(buttonName)) {
      if (total !== '') {
        next = total
        total = buttonName
        operation = buttonName
      }
    } else if (buttonName === '=') {
      if (operation === '%') {
        total = '100'
      }
      total = operator(total, next, operation)
    } else if (buttonName === 'AC') {
      total = ''
    } else if (buttonName === '.') {
      if (total.indexOf('.') === -1) {
        total = total + buttonName
      }
    } else if (buttonName === '+/-') {
      if (total.indexOf('-') === -1) {
        total = `-${total}`
      } else {
        total = total.slice(1)
      }
    } else {
      if (operation !== null) {
        const removeOperator = total.replace(operation, '')
        total = removeOperator + buttonName
      } else {
        total = total + buttonName
      }

      console.log(operation)
    }

    // if (buttonName == '+/-') {
    //   total = total.times(next).times(-1)
    // } else if (buttonName == '=') {
    //   total = total
    // } else if (buttonName == 'AC') {
    //   total = ''
    //   next = ''
    // } else if (buttonName == '.') {
    //   next = next.match(/\./) ? next : next + buttonName
    // } else {
    //   total = operator(total, next, operation)
    // }
    return { total, next, operation }

    console.log(total, next, operation)
    console.log(buttonName)
  }

  return { calculateOption }
})()

export default calculate
