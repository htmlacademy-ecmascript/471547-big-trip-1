import {DESTINATIONS, PHOTOS_COUNT, DESCRIPTIONS} from './const.js';
import {getRandomArrayElement, getRandomId, getRandomInteger, getRandomNumber} from '../utils/util.js';

const generateDestinationId = getRandomId(1, 50);

function createDestination () {

  const makeDescription = () => Array.from(
    {length: getRandomNumber (1, DESCRIPTIONS.length)},
    () => getRandomArrayElement(DESCRIPTIONS),
  ).join(' ');

  const description = makeDescription();

  function makePhoto () {
    return {
      description: description,
      src: `https://loremflickr.com/248/152?random=${getRandomInteger(50)}`
    };
  }

  const renderPhotos = Array.from({length: getRandomNumber (0, PHOTOS_COUNT)}, makePhoto);

  return {
    id: generateDestinationId(),
    name: getRandomArrayElement(DESTINATIONS),
    description: description,
    photos: renderPhotos
  };
}

export {createDestination};
