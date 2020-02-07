import operator from './operator'

const calculate = (() => {
  const calculate = (calculatorObject, buttonName) => {
    let { total, next, operation } = calculatorObject
    if (buttonName == '+/-') {
      total = total.times(next).times(-1)
    } else if (buttonName == '=') {
      total = total
    } else if (buttonName == 'AC') {
      total = ''
      next = ''
    } else if (buttonName == '.') {
      next = next.match(/\./) ? next : next + buttonName
    } else {
      total = operator(total, next, operation)
    }
    return { total, next, operation }
  }

  return { calculate }
})()

export default calculate
