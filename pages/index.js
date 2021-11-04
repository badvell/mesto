document.querySelector(".profile__button-edit").addEventListener("click", function () {
  document.querySelector(".popup").classList.add("popup__active");
});

document.querySelector(".popup__icon-close").addEventListener("click", function () {
  document.querySelector(".popup").classList.remove("popup__active");
});

function openPopup() {
  document.querySelector(".popup__title").value = document.querySelector(".profile__author-title").innerText;
  document.querySelector(".popup__description").value = document.querySelector(".profile__author-description").innerText;
  document.querySelector(".popup").classList.add('popup_opened');
};

let formElement = document.querySelector(".popup__form");

function formSubmitHandler(evt) {
  evt.preventDefault();

  var nameValue = document.querySelector(".popup__title").value;
  var jobValue = document.querySelector(".popup__description").value;

  document.querySelector(".profile__author-title").textContent = nameValue;
  document.querySelector(".profile__author-description").textContent = jobValue;
}

document.querySelector(".popup__button").addEventListener("click", function () {
  document.querySelector(".popup").classList.remove("popup__active");
});

formElement.addEventListener('submit', formSubmitHandler);
document.querySelector(".profile__button-edit").addEventListener('click', openPopup);
