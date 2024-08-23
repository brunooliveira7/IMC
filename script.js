//capturando o formulário como um todo, para implementar as functions posteriormente
const form = document.querySelector("form");
//capturando os dados inseridos pelo user
const inputWeight = document.querySelector("#wheight");
const inputHeight = document.querySelector("#height");
//capturando a janela modal(para inserir e remover o open) e locais para add functions
//const modalWrapper = document.querySelector(".modal-wrapper");
//const modalMessage = document.querySelector(".modal .title span");
//const modalBtnClose = document.querySelector(".modal button.close");

//object literal com prop (open/close) que recebem function{} e const/valores (wrapper...) - mais claro
const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal .title span"),
  buttonClose: document.querySelector(".modal button.close"),

  open() {
    Modal.wrapper.classList.add("open");
  },
  close() {
    Modal.wrapper.classList.remove("open");
  },
};

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

//evento de clicar no X
Modal.buttonClose.onclick = () => {
  Modal.close();
};

function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}
