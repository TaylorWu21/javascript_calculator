function num(x) {
	result.innerHTML += x;
}

function calculate() {
	result.innerHTML = eval(result.innerHTML);
	if(result.innerHTML === 'Infinity') {
		alert('Cannot Divide By 0');
		result.innerHTML = '';
	}
	if(result.innerHTML === 'NaN') {
		alert('Not A Number, Try Again');
		result.innerHTML = '';
	}
}

function smashTheCalculator() {
	result.innerHTML = '';
}