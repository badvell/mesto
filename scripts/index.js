let formElement = document.querySelector(".popup__form");
let profileBtn = document.querySelector(".profile__button-edit");
let closeBtn = document.querySelector(".popup__icon-close");

let titleInput = document.querySelector(".popup__input_title");
let titleProfile = document.querySelector(".profile__author-title");
let aboutInput = document.querySelector(".popup__input_description");
let aboutProfile = document.querySelector(".profile__author-description");
let popup = document.querySelector(".popup");


profileBtn.addEventListener("click", openPopup);

closeBtn.addEventListener("click", closePopup);

function openPopup() {
  titleInput.value = titleProfile.textContent;
  aboutInput.value = aboutProfile.textContent;
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
  closePopup();
}

profileBtn.addEventListener('click', openPopup);
formElement.addEventListener('submit', formSubmitHandler);

