let formElement = document.querySelector(".popup__form");
let profileBtn= document.querySelector(".profile__button-edit");
let closeBtn = document.querySelector(".popup__icon-close");

let titleInput = document.querySelector(".popup__title");
let titleProfile = document.querySelector(".profile__author-title");
let aboutInput = document.querySelector(".popup__description");
let aboutProfile = document.querySelector(".profile__author-description");
let popup = document.querySelector(".popup");
let saveBtn = document.querySelector(".popup__button");


profileBtn.addEventListener("click", openPopup);

closeBtn.addEventListener("click", closePopup);

function openPopup() {
  titleInput.value = titleProfile.innerText;
  aboutInput.value = aboutProfile.innerText;
  popup.classList.add('popup_active');
};

function closePopup() {
  popup.classList.remove('popup_active');
};

function formSubmitHandler(evt) {
  evt.preventDefault();

  var nameValue = titleInput.value;
  var jobValue = aboutInput.value;

  titleProfile.textContent = nameValue;
  aboutProfile.textContent = jobValue;
}

saveBtn.addEventListener("click", closePopup);
profileBtn.addEventListener('click', openPopup);

formElement.addEventListener('submit', formSubmitHandler);

