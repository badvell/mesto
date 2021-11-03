document.querySelector(".profile__button-edit").addEventListener("click", function () {
  document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup__icon_close").addEventListener("click", function () {
  document.querySelector(".popup").classList.remove("active");
});

function openPopup() {
  document.querySelector(".popup__title").value = document.querySelector(".profile__author_title").innerText;
  document.querySelector(".popup__description").value = document.querySelector(".profile__author_description").innerText;
  document.querySelector(".popup").classList.add('popup_opened');
};

let formElement = document.querySelector(".popup__form");

function formSubmitHandler(evt) {
  evt.preventDefault();

  var nameValue = document.querySelector(".popup__title").value;
  var jobValue = document.querySelector(".popup__description").value;

  document.querySelector(".profile__author_title").textContent = nameValue;
  document.querySelector(".profile__author_description").textContent = jobValue;
}

document.querySelector(".popup__button").addEventListener("click", function () {
  document.querySelector(".popup").classList.remove("active");
});

formElement.addEventListener('submit', formSubmitHandler);
document.querySelector(".profile__button-edit").addEventListener('click', openPopup);
