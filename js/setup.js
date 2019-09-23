'use strict';

var userSetup = document.querySelector('.setup');
userSetup.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content.querySelector('.setup-similar-item');

var getRandomInteger = function (min, max) {
  var randomNumber = min + Math.random() * (max - min);
  return Math.round(randomNumber);
};

var QUANTITY_WIZARDS = 4;

var similarWizards = [];

var NAMES_WIZARDS = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var SURNAME_WIZARDS = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var COAT_COLOR_WIZARDS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var EYES_COLOR_WIZARDS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var getSimilarWizards = function (arrayWizards, quantity) {
  for (var i = 0; i < quantity; i++) {
    arrayWizards[i] = {};
    arrayWizards[i].name = NAMES_WIZARDS[getRandomInteger(0, NAMES_WIZARDS.length - 1)] + ' ' + SURNAME_WIZARDS[getRandomInteger(0, SURNAME_WIZARDS.length - 1)];
    arrayWizards[i].coatColor = COAT_COLOR_WIZARDS[getRandomInteger(0, COAT_COLOR_WIZARDS.length - 1)];
    arrayWizards[i].eyesColor = EYES_COLOR_WIZARDS[getRandomInteger(0, EYES_COLOR_WIZARDS.length - 1)];
  }
};

getSimilarWizards(similarWizards, QUANTITY_WIZARDS);

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var getFragmentElement = function () {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < similarWizards.length; i++) {
    fragment.appendChild(renderWizard(similarWizards[i]));
  }

  similarList.appendChild(fragment);
};

getFragmentElement();


