var var1, var2, num;
let activeInput = null;

function setActiveInput(input) {
	activeInput = input;
	console.log(activeInput);
}

function getvalue(num){
	if(activeInput === document.getElementById("input")){
        var input = document.getElementById("input");
        input.value += num;
    } else {
        var input2 = document.getElementById("input2");
        input2.value += num;
    }
}

function add(){
	var sum;
	var1 = parseInt(document.getElementById("input").value);
	var2 = parseInt(document.getElementById("input2").value);
	sum = var1 + var2;
	document.getElementById("res").innerHTML = sum;
}

function sub(){
	var dif;
	var1 = parseInt(document.getElementById("input").value);
	var2 = parseInt(document.getElementById("input2").value);
	dif = var1 - var2;
	document.getElementById('res').innerHTML = dif;
}

function mul(){
	var prod;
	var1 = parseInt(document.getElementById("input").value);
	var2 = parseInt(document.getElementById("input2").value);
	prod = var1 * var2;
	document.getElementById('res').innerHTML = prod;
}

function div(){
	var quo;
	var1 = parseInt(document.getElementById("input").value);
	var2 = parseInt(document.getElementById("input2").value);
	quo = var1 / var2;
	document.getElementById('res').innerHTML = quo;
}

function clear(){
	document.getElementById('input').value = '';
	document.getElementById('input2').value = '';
}