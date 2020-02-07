const calculate = (() => {

	const calculate = (calculatorObject,buttonName) => {
		let { total, next, operation } = calculatorObject;
		if(buttonName == "+"){
			total = total + next
		}else if(buttonName == "-"){
			total = total - next
		}else if(buttonName == "÷"){
			total = total / next
		}else if(buttonName == "X"){
			total = total * next
		}else if(buttonName == "+/-"){
			total = total * next * -1
		}else{
			total = total % next
		}
		return { total, next operation }
	}

  return { calculate }
})()

