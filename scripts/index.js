const formEditElement = document.querySelector(".popup_edit_profile");
const profileBtn = document.querySelector(".profile__button-edit");
const popupCloseAddPlace = document.querySelector('.popup__close_add_place');
const popupCloseEditProfile = document.querySelector('.popup__close_edit_profile');
const popupCloseSize = document.querySelector(".popup-size__close");

const titleInput = document.querySelector(".popup__input_user_title");
const titleProfile = document.querySelector(".profile__author-title");
const aboutInput = document.querySelector(".popup__input_user_description");
const aboutProfile = document.querySelector(".profile__author-description");

const profileBtnAdd = document.querySelector(".profile__button-add");
const popupAddPlace = document.querySelector(".popup_add_place");
const cardTemplate = document.querySelector(".template").content;
const cardsContainer = document.querySelector(".photos__list");

const popupSize = document.querySelector(".popup-size");
const popupSizeContainer = document.querySelector(".popup__container");
const popupSizeImg = popupSizeContainer.querySelector(".popup-size__img");
const popupSizeDescription = popupSizeContainer.querySelector(".popup-size__description");

const formPhoto = popupAddPlace.querySelector(".popup__form");

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function openPopup(popup) {
  popup.classList.add("popup_active");
}

function closePopup(popup) {
  popup.classList.remove("popup_active");
};

function removeElement(photosCard) {
  photosCard.remove();
}

function cardListener(cardLink, cardTitle) {
  popupSize.querySelector(".popup-size__img").src = cardLink;
  popupSize.querySelector(".popup-size__img").alt = cardTitle;
  popupSize.querySelector(".popup-size__description").textContent = cardTitle;
  openPopup(popupSize);
}

function addPlace(card) {
  const photosCard = cardTemplate.querySelector(".photos__card").cloneNode(true);
  const cardImage = photosCard.querySelector(".photos__image");
  photosCard.querySelector(".photos__image").src = card.link;
  photosCard.querySelector(".photos__image").alt = card.name;
  photosCard.querySelector(".photos__text").textContent = card.name;

  cardImage.addEventListener("click", () => cardListener(card.link, card.name));

  const likeBtn = photosCard.querySelector(".photos__heart");
  likeBtn.addEventListener("click", () => like(likeBtn));

  photosCard.querySelector(".photos__trash").addEventListener("click", () => removeElement(photosCard));

  return photosCard;
}


initialCards.forEach(elem => {
  cardsContainer.append(addPlace(elem));
});

function editInfo() {
  titleInput.value = titleProfile.textContent;
  aboutInput.value = aboutProfile.textContent;
  openPopup(formEditElement);
};


function handleProfileSubmit(evt) {
  evt.preventDefault();
  const nameValue = titleInput.value;
  const jobValue = aboutInput.value;

  titleProfile.textContent = nameValue;
  aboutProfile.textContent = jobValue;
  closePopup(formEditElement);
}


function handleCardSubmit(evt) {
  evt.preventDefault();
  const linkName = popupAddPlace.querySelector(".popup__input_place_title");
  const linkImg = popupAddPlace.querySelector(".popup__input_place_image");
  const nameValue = addPlace({
    name: linkName.value,
    link: linkImg.value
  });
  cardsContainer.prepend(nameValue);
  closePopup(popupAddPlace);
  formPhoto.reset();
}

function like(likeBtn) {
  likeBtn.classList.toggle("photos__heart_active");
}


profileBtn.addEventListener("click", function () {
  editInfo();
})
formEditElement.addEventListener("submit", handleProfileSubmit);
formPhoto.addEventListener("submit", handleCardSubmit);

profileBtnAdd.addEventListener("click", function () {
  openPopup(popupAddPlace);
})
popupCloseAddPlace.addEventListener("click", function () {
  closePopup(popupAddPlace);
})
popupCloseEditProfile.addEventListener("click", function () {
  closePopup(formEditElement);
})
popupCloseSize.addEventListener("click", function () {
  closePopup(popupSize);
})
