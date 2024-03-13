const POINTS_COUNT = 5;
const PHOTOS_COUNT = 5;
const OFFERS_COUNT = 10;

const MIN_RANDOM_ID = 5;
const MAX_RANDOM_ID = 20;
const PHOTOS_RANDOM_COUNT = 50;
const MIN_PRICE = 1000;
const MAX_PRICE = 10000;

const TYPE_ROUTE_POINTS = [
  'taxi',
  'bus',
  'train',
  'ship',
  'drive',
  'flight',
  'check-in',
  'sightseeing',
  'restaurant'
];

const DESTINATIONS = [
  'Krasnodar',
  'St. Petersburg',
  'Mariupol',
  'Pyatigorsk',
  'Sochi',
  'Vyborg',
  'Kaliningrad',
  'Samara',
  'Kazan'
];

const OFFERS = [
  'Order Uber',
  'Add luggage',
  'Switch to comfort class',
  'Rent a car',
  'Add breakfast',
  'Book tickets',
  'Add meal',
  'Choose seats',
  'Travel by train'
];

const DESCRIPTIONS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat.',
  'Aliquam id orci ut lectus varius viverra.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis.',
  'Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.'
];

/*
const STATUS = [
  'past',
  'future',
  'present'
];
*/
const DATE_FORMAT = {
  fullDate: 'DD/MM/YY HH:mm',
  dateAttr: 'YYYY-MM-DD',
  monthDay: 'MMM DD',
  hourMinute: 'HH:mm',
};

const MSEC_IN_SEC = 1000;
const SEC_IN_MIN = 60;
const MIN_IN_HOUR = 60;
const HOUR_IN_DAY = 24;

const MSEC_IN_HOUR = MIN_IN_HOUR * SEC_IN_MIN * MSEC_IN_SEC;
const MSEC_IN_DAY = HOUR_IN_DAY * MSEC_IN_HOUR;

export {POINTS_COUNT, PHOTOS_COUNT, OFFERS_COUNT, MIN_RANDOM_ID, MAX_RANDOM_ID, MIN_PRICE, MAX_PRICE, PHOTOS_RANDOM_COUNT, TYPE_ROUTE_POINTS, DESTINATIONS, OFFERS, DESCRIPTIONS, DATE_FORMAT, MSEC_IN_HOUR, MSEC_IN_DAY};
