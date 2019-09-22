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

var similarWizards = [];

var namesWizards = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var surnamesWizards = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var coatColorWizards = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var eyesColorWizards = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

for (var i = 0; i < 4; i++) {
  similarWizards[i] = {};
  similarWizards[i].name = namesWizards[getRandomInteger(0, 7)] + ' ' + surnamesWizards[getRandomInteger(0, 7)];
  similarWizards[i].coatColor = coatColorWizards[getRandomInteger(0, 5)];
  similarWizards[i].eyesColor = eyesColorWizards[getRandomInteger(0, 4)];
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (i = 0; i < similarWizards.length; i++) {
  fragment.appendChild(renderWizard(similarWizards[i]));
}

similarList.appendChild(fragment);
