import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";
import { calculateIMC, notANumber } from "./utils.js";
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

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height);

  if (weightOrHeightIsNotANumber) {
    AlertError.open();
    return;
  }

  AlertError.close();

  const result = calculateIMC(weight, height);
  displayResultMessage(result);
};

//fecha a janela de erro ao digitar no campo
inputHeight.oninput = () => {
  AlertError.close()
}
inputWeight.oninput = () => {
  AlertError.close()
}

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`;
  //retornos que serão apresentados no modal
  Modal.message.innerText = message;
  Modal.open();
}
