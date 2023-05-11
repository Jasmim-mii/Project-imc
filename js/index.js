
import { table } from "./data.js";
import { createTable } from './function.js';

const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");
const clearBtn = document.querySelector("#clear-btn");
const imcBtn = document.querySelector("#imc-btn");
const imcNumber = document.querySelector("#number-imc-result span");
const imcInfo = document.querySelector("#imc-info span");
const btnBack = document.querySelector("#back-btn");
const container = document.querySelector("#form-container");
const result = document.querySelector(".result");

//functions
function validateInput(val) { 
	const valor = val.replace(/[^0-9,]/g, "");
	return valor;
}
function cleanInput() {
	heightInput.value = "";
	weightInput.value = "";
	imcNumber.classList = "";
	imcInfo.classList = "";
}
function calcImc(weight, height) {
	const imc = (weight / (height * height)).toFixed(1);
	return imc;
}
function showResult() {
	container.classList.toggle("hide");
	result.classList.toggle("hide");
}
createTable(table);

// events
[heightInput, weightInput].forEach((el) => {
	el.addEventListener("input", (e) => {
		const updatevalue = validateInput(e.target.value);
		e.target.value = updatevalue;
	});
});

clearBtn.addEventListener("click", (e) => {
	e.preventDefault();
	cleanInput();
});

imcBtn.addEventListener("click", (e) => {
	e.preventDefault();
	const weight = +weightInput.value.replace(",", ".");
	const height = +heightInput.value.replace(",", ".");

	if (!weight || !height) return;

	const imc = calcImc(weight, height);

	let info;

	table.forEach((item) => {
		if (imc >= item.min && imc <= item.max) {
			info = item.info;
		}
	});
	console.log(info);
	if (!info) return;

	imcNumber.innerText = imc;
	imcInfo.innerText = info;

	switch(info){
		case"Normal":
			imcNumber.classList.add("good");
			imcInfo.classList.add("good");
			break

		case"Magreza":
			imcNumber.classList.add("bad");
			imcInfo.classList.add("bad");
			break
		case"Sobrepeso":
			imcNumber.classList.add("bad");
			imcInfo.classList.add("bad");
			break

		case"Obesidade":
			imcNumber.classList.add("medium");
			imcInfo.classList.add("medium");
			break

		case"Obesidade grave":
			imcNumber.classList.add("high");
			imcInfo.classList.add("high");
			break
	}

	showResult();
});

btnBack.addEventListener("click", () => {
	cleanInput();
	showResult();

});

