const add = document.getElementById('add');
const sub = document.getElementById('sub');
const mul = document.getElementById('mul');
const div = document.getElementById('div');
const clearButton = document.getElementById('clear');
const equal = document.getElementById('equal');
const input = document.getElementById('fname');
const dis = document.getElementById('sname');
const dot = document.getElementById('dot');
const perc = document.getElementById('percentage');

var firstNumberStored = false;
var storedValue = 0;

function handleOperator(operator){
	if(firstNumberStored){
		let num = parseFloat(input.value);
		display(num, operator)
	}
	else {
		const temp = parseFloat(input.value);
		clearForm();
		storedValue = temp;
		display(temp, operator);
		firstNumberStored = true;
		input.focus();
	}
	input.value = "";
}

function display(value, operator) {
	if(firstNumberStored){
		if(operator == '%'){
			dis.textContent += " " + (value / 100);
			input.focus();
		}
		else{
			dis.textContent += " " + operator + " " + value;
			input.focus();
		}	
	}
	else {
		dis.textContent += value
		input.focus();
	}
}

function isOperator(arg) {
	return (arg == '+' || arg == '-' || arg == '*' || arg == '/' || arg == '%' || arg == '=') ? true : false
}

function handleEquals(){
	input.value = evaluateExpression(dis.textContent);
	dis.textContent = "";
}



function evaluateExpression(express){
var i = 0, ch = express[i];
while(i != express.length){
	while(!isOperator(ch)){

		}
	}
}

function adder(value1, value2){
	input.value = value1 + value2;
	return input.value;
}

function subtracter(value1, value2){
		input.value = value1 - value2;
		return input.value;
}

function multiplier(value1, value2){
		input.value = value1 * value2;
		return input.value;
}

function divider(value1, value2){
	if(value2 == 0){
		return "Error";
	}
	else {
		input.value = value1 / value2;
		return input.value;
	}
}

function clearForm(){
	input.value = "";
	storedValue = 0;
	firstNumberStored = false;
	dis.innerHTML = "";
	input.focus();
}

function handleDot(){
	if(!isNaN(input.value)){
		input.value +=  '.';
	}
	input.focus();
}

function handlePercentage(value1, value2) {
	input.value = value1 * (value2 / 100);
	return input.value;
}

add.addEventListener('click',() => handleOperator('+'))
sub.addEventListener('click', () => handleOperator('-'));
mul.addEventListener('click', () => handleOperator('*'));
div.addEventListener('click', () => handleOperator('/'));
equal.addEventListener('click', () => handleEquals());
clearButton.addEventListener('click', clearForm);
dot.addEventListener('click', handleDot);
perc.addEventListener('click', () => handleOperator('%'));