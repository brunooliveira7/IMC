//capturando a janela modal(para inserir e remover o open) e locais para add functions
//const modalWrapper = document.querySelector(".modal-wrapper");
//const modalMessage = document.querySelector(".modal .title span");
//const modalBtnClose = document.querySelector(".modal button.close");

//object literal com prop (open/close) que recebem function{} e const/valores (wrapper...) - mais claro
export const Modal = {
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

//evento de clicar no X
Modal.buttonClose.onclick = () => {
  Modal.close();
};
