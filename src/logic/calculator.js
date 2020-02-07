import operator from './operator'

const calculate = (() => {
  const calculate = (calculatorObject, buttonName) => {
    let { total, next, operation } = calculatorObject
    if (buttonName == '+/-') {
      total = total.times(next).times(-1)
    } else {
      total = operator(total, next, operation)
    }
    return { total, next, operation }
  }

  return { calculate }
})()

export default calculate
