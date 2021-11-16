let formEditElement = document.querySelector(".popup_edit_profile");
let profileBtn = document.querySelector(".profile__button-edit");
let popupCloseAddPlace = document.querySelector('.popup__close_add_place');
let popupCloseEditProfile = document.querySelector('.popup__close_edit_profile');
let popupCloseSize = document.querySelector(".popup__close_size_photo");

let titleInput = document.querySelector(".popup__input_user_title");
let titleProfile = document.querySelector(".profile__author-title");
let aboutInput = document.querySelector(".popup__input_user_description");
let aboutProfile = document.querySelector(".profile__author-description");
let popup = document.querySelector(".popup");

let profileBtnAdd = document.querySelector(".profile__button-add");
let popupAddPlace = document.querySelector(".popup_add_place");
let cardTemplate = document.querySelector(".template").content;
let cardsContainer = document.querySelector(".photos__list");

let popupSize = document.querySelector(".popup__size");
let popupSizeContainer = document.querySelector(".popup__container");
let popupSizeImg = popupSizeContainer.querySelector(".popup__img");
let popupSizeDescription = popupSizeContainer.querySelector(".popup__description");

let formPhoto = popupAddPlace.querySelector('.popup__form');

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


function removeElement(photosCard) {
  photosCard.remove();
}

function openSizePopup(cardLink, cardTitle) {
  popupSize.querySelector(".popup__img").src = cardLink;
  popupSize.querySelector(".popup__img").alt = cardTitle;
  popupSize.querySelector(".popup__description").textContent = cardTitle;
  popupSize.classList.add('popup__size-resize');
}

function addPlace(card) {
  const photosCard = cardTemplate.querySelector(".photos__card").cloneNode(true);
  photosCard.querySelector('.photos__image').src = card.link;
  photosCard.querySelector('.photos__image').alt = card.name;
  photosCard.querySelector('.photos__text').textContent = card.name;

  const sizeBtn = photosCard.querySelector(".photos__image");
  sizeBtn.addEventListener("click", () => openSizePopup(card.link, card.name));

  photosCard.querySelector('.photos__trash').addEventListener('click', () => removeElement(photosCard));

  return photosCard;
}


initialCards.forEach(elem => {
  cardsContainer.append(addPlace(elem));
});

function openPopup(evt) {
  const openPopupElement = evt.target;
  if (openPopupElement.classList.contains('profile__button-edit')) {
    titleInput.value = titleProfile.textContent;
    aboutInput.value = aboutProfile.textContent;
    popup.classList.add('popup_active');
  }
  else if (openPopupElement.classList.contains('profile__button-add')) {
    popupAddPlace.classList.add('popup_active');
  }
};


function closePopup() {
  popup.classList.remove('popup_active');
  popupAddPlace.classList.remove('popup_active');
  popupSize.classList.remove("popup__size-resize");
};

function formSubmitHandler(evt) {
  evt.preventDefault();

  var nameValue = titleInput.value;
  var jobValue = aboutInput.value;

  titleProfile.textContent = nameValue;
  aboutProfile.textContent = jobValue;
  closePopup();
}



function submitHandlerCard(evt) {
  evt.preventDefault();
  const linkValue = popupAddPlace.querySelectorAll('input');
  const nameValue = addPlace({
    name: linkValue[0].value,
    link: linkValue[1].value
  });
  cardsContainer.prepend(nameValue);
  closePopup(popupAddPlace);
  formPhoto.reset();
}


function Toggle(btn) {
  if (btn.classList.contains("photos__heart")) {
    btn.classList.remove("photos__heart");
    btn.classList.add("photos__heart_active");
  } else {
    btn.classList.remove("photos__heart_active");
    btn.classList.add("photos__heart");
  }
}

profileBtn.addEventListener("click", openPopup);
formEditElement.addEventListener('submit', formSubmitHandler);
formPhoto.addEventListener('submit', submitHandlerCard);

profileBtnAdd.addEventListener("click", openPopup);
popupCloseAddPlace.addEventListener("click", closePopup);
popupCloseEditProfile.addEventListener("click", closePopup);
popupCloseSize.addEventListener("click", closePopup);
