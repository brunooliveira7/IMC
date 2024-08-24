import { Modal } from "./modal.js";
//capturando o formulário como um todo, para implementar as functions posteriormente
const form = document.querySelector("form");
//capturando os dados inseridos pelo user
const inputWeight = document.querySelector("#wheight");
const inputHeight = document.querySelector("#height");

//evento de calcular ao clicar no btn(um form com btn envia os dados)
form.onsubmit = function (event) {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const result = IMC(weight, height);
  const message = `Seu IMC é de ${result}`;
  //retornos que serão apresentados no modal
  Modal.message.innerText = message;
  Modal.open();
};

function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}
