/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DESTINATIONS: () => (/* binding */ DESTINATIONS),
/* harmony export */   DESTINATIONS_COUNT: () => (/* binding */ DESTINATIONS_COUNT),
/* harmony export */   DateFormat: () => (/* binding */ DateFormat),
/* harmony export */   MSEC_IN_DAY: () => (/* binding */ MSEC_IN_DAY),
/* harmony export */   MSEC_IN_HOUR: () => (/* binding */ MSEC_IN_HOUR),
/* harmony export */   NEW_POINT_FORM: () => (/* binding */ NEW_POINT_FORM),
/* harmony export */   POINTS_TYPES: () => (/* binding */ POINTS_TYPES)
/* harmony export */ });
const DESTINATIONS_COUNT = 1;
const DESTINATIONS = ['Krasnodar', 'St. Petersburg', 'Mariupol', 'Pyatigorsk', 'Sochi', 'Vyborg', 'Kaliningrad', 'Samara', 'Kazan'];
const POINTS_TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];
const NEW_POINT_FORM = {
  id: 1,
  type: 'Bus',
  offers: [],
  destination: '',
  dateFrom: '',
  dateTo: '',
  price: 0
};
const DateFormat = {
  DATE_IN_FORM: 'DD/MM/YY HH:mm',
  FULL: 'YYYY-MM-DD',
  DATE: 'MMM DD',
  TIME: 'HH:mm'
};
const MSEC_IN_SEC = 1000;
const SEC_IN_MIN = 60;
const MIN_IN_HOUR = 60;
const HOUR_IN_DAY = 24;
const MSEC_IN_HOUR = MIN_IN_HOUR * SEC_IN_MIN * MSEC_IN_SEC;
const MSEC_IN_DAY = HOUR_IN_DAY * MSEC_IN_HOUR;


/***/ }),

/***/ "./src/mock/mock-const.js":
/*!********************************!*\
  !*** ./src/mock/mock-const.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DESCRIPTIONS: () => (/* binding */ DESCRIPTIONS),
/* harmony export */   OFFERS: () => (/* binding */ OFFERS),
/* harmony export */   OFFERS_COUNT: () => (/* binding */ OFFERS_COUNT),
/* harmony export */   PHOTOS_COUNT: () => (/* binding */ PHOTOS_COUNT),
/* harmony export */   PHOTOS_RANDOM_COUNT: () => (/* binding */ PHOTOS_RANDOM_COUNT),
/* harmony export */   POINTS_COUNT: () => (/* binding */ POINTS_COUNT),
/* harmony export */   RandomPrice: () => (/* binding */ RandomPrice)
/* harmony export */ });
const POINTS_COUNT = 10;
const PHOTOS_COUNT = 5;
const OFFERS_COUNT = 10;
const PHOTOS_RANDOM_COUNT = 50;
const RandomPrice = {
  MIN: 1000,
  MAX: 10000
};
const OFFERS = ['Order Uber', 'Add luggage', 'Switch to comfort class', 'Rent a car', 'Add breakfast', 'Book tickets', 'Add meal', 'Choose seats', 'Travel by train'];
const DESCRIPTIONS = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.', 'Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.', 'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.', 'Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.', 'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat.', 'Aliquam id orci ut lectus varius viverra.', 'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis.', 'Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.'];


/***/ }),

/***/ "./src/mock/mock-destination.js":
/*!**************************************!*\
  !*** ./src/mock/mock-destination.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDestination: () => (/* binding */ createDestination)
/* harmony export */ });
/* harmony import */ var _mock_const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mock-const.js */ "./src/mock/mock-const.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const.js */ "./src/const.js");
/* harmony import */ var _mock_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock-utils.js */ "./src/mock/mock-utils.js");



function createDestination() {
  const city = (0,_mock_utils_js__WEBPACK_IMPORTED_MODULE_2__.getRandomArrayElement)(_const_js__WEBPACK_IMPORTED_MODULE_1__.DESTINATIONS);
  const makeDescription = () => Array.from({
    length: (0,_mock_utils_js__WEBPACK_IMPORTED_MODULE_2__.getRandomNumber)(1, _mock_const_js__WEBPACK_IMPORTED_MODULE_0__.DESCRIPTIONS.length)
  }, () => (0,_mock_utils_js__WEBPACK_IMPORTED_MODULE_2__.getRandomArrayElement)(_mock_const_js__WEBPACK_IMPORTED_MODULE_0__.DESCRIPTIONS)).join(' ');
  const description = makeDescription();
  function makePhoto() {
    return {
      description: `${city} photo`,
      src: `https://loremflickr.com/248/152?random=${(0,_mock_utils_js__WEBPACK_IMPORTED_MODULE_2__.getRandomInteger)(_mock_const_js__WEBPACK_IMPORTED_MODULE_0__.PHOTOS_RANDOM_COUNT)}`
    };
  }
  const photos = Array.from({
    length: (0,_mock_utils_js__WEBPACK_IMPORTED_MODULE_2__.getRandomNumber)(1, _mock_const_js__WEBPACK_IMPORTED_MODULE_0__.PHOTOS_COUNT)
  }, makePhoto);
  return {
    id: crypto.randomUUID(),
    name: city,
    description,
    photos
  };
}


/***/ }),

/***/ "./src/mock/mock-offer.js":
/*!********************************!*\
  !*** ./src/mock/mock-offer.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createOffer: () => (/* binding */ createOffer)
/* harmony export */ });
/* harmony import */ var _mock_const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mock-const.js */ "./src/mock/mock-const.js");
/* harmony import */ var _mock_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock-utils.js */ "./src/mock/mock-utils.js");


function createOffer() {
  return {
    id: crypto.randomUUID(),
    title: (0,_mock_utils_js__WEBPACK_IMPORTED_MODULE_1__.getRandomArrayElement)(_mock_const_js__WEBPACK_IMPORTED_MODULE_0__.OFFERS),
    price: (0,_mock_utils_js__WEBPACK_IMPORTED_MODULE_1__.getRandomNumber)(_mock_const_js__WEBPACK_IMPORTED_MODULE_0__.RandomPrice.MIN, _mock_const_js__WEBPACK_IMPORTED_MODULE_0__.RandomPrice.MAX)
  };
}


/***/ }),

/***/ "./src/mock/mock-point.js":
/*!********************************!*\
  !*** ./src/mock/mock-point.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPoint: () => (/* binding */ createPoint)
/* harmony export */ });
/* harmony import */ var _mock_const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mock-const.js */ "./src/mock/mock-const.js");
/* harmony import */ var _mock_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock-utils.js */ "./src/mock/mock-utils.js");


const createPoint = (type, destinationId, offersIds) => ({
  id: crypto.randomUUID(),
  type,
  destination: destinationId,
  dateFrom: new Date('2024-02-29, 21:00'),
  dateTo: new Date('2024-03-03, 21:00'),
  price: (0,_mock_utils_js__WEBPACK_IMPORTED_MODULE_1__.getRandomNumber)(_mock_const_js__WEBPACK_IMPORTED_MODULE_0__.RandomPrice.MIN, _mock_const_js__WEBPACK_IMPORTED_MODULE_0__.RandomPrice.MAX),
  offers: offersIds,
  isFavourite: (0,_mock_utils_js__WEBPACK_IMPORTED_MODULE_1__.getRandomBoolean)()
});


/***/ }),

/***/ "./src/mock/mock-utils.js":
/*!********************************!*\
  !*** ./src/mock/mock-utils.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRandomArrayElement: () => (/* binding */ getRandomArrayElement),
/* harmony export */   getRandomBoolean: () => (/* binding */ getRandomBoolean),
/* harmony export */   getRandomInteger: () => (/* binding */ getRandomInteger),
/* harmony export */   getRandomNumber: () => (/* binding */ getRandomNumber)
/* harmony export */ });
//получаем случайное число из заданного диапазона

const getRandomNumber = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//получаем случайное число

const getRandomInteger = max => Math.floor(Math.random() * max);

//получаем случайный элемент

const getRandomArrayElement = items => items[getRandomNumber(0, items.length - 1)];

//получаем случайное булево значение

function getRandomBoolean() {
  const randomNumber = Math.random();
  return randomNumber >= 0.5;
}

//создаем счетчик для генерации случайного ID

/*const getRandomId = (min, max) => {
  const previousValues = [];

  const getValue = () => {
    let currentValue = getRandomNumber(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomNumber(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };

  return getValue;
};*/



/***/ }),

/***/ "./src/model/destinations-model.js":
/*!*****************************************!*\
  !*** ./src/model/destinations-model.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DestinationsModel)
/* harmony export */ });
class DestinationsModel {
  destinations = null;
  constructor(service) {
    this.service = service;
    this.destinations = this.service.getDestinations();
  }
  get() {
    return this.destinations;
  }
  getById(id) {
    return this.destinations.find(destination => destination.id === id);
  }
}

/***/ }),

/***/ "./src/model/offers-model.js":
/*!***********************************!*\
  !*** ./src/model/offers-model.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OffersModel)
/* harmony export */ });
class OffersModel {
  constructor(service) {
    this.service = service;
    this.offers = this.service.getOffers();
  }
  get() {
    return this.offers;
  }
  getByType(type) {
    return this.offers.find(offer => offer.type === type).offers;
  }
}

/***/ }),

/***/ "./src/model/trip-model.js":
/*!*********************************!*\
  !*** ./src/model/trip-model.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TripModel)
/* harmony export */ });
class TripModel {
  constructor(service) {
    this.service = service;
    this.points = this.service.getPoints();
  }
  get() {
    return this.points;
  }
}

/***/ }),

/***/ "./src/presenter/header-filter-presenter.js":
/*!**************************************************!*\
  !*** ./src/presenter/header-filter-presenter.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HeaderFilterPresenter)
/* harmony export */ });
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render.js */ "./src/render.js");
/* harmony import */ var _view_filters_list_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/filters-list-view.js */ "./src/view/filters-list-view.js");


class HeaderFilterPresenter {
  constructor({
    headContainer
  }) {
    this.headContainer = headContainer;
  }
  init() {
    (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.render)(new _view_filters_list_view_js__WEBPACK_IMPORTED_MODULE_1__["default"](), this.headContainer, _render_js__WEBPACK_IMPORTED_MODULE_0__.RenderPosition.BEFOREEND);
  }
}

/***/ }),

/***/ "./src/presenter/header-info-presenter.js":
/*!************************************************!*\
  !*** ./src/presenter/header-info-presenter.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HeaderInfoPresenter)
/* harmony export */ });
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render.js */ "./src/render.js");
/* harmony import */ var _view_header_info_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/header-info.js */ "./src/view/header-info.js");


class HeaderInfoPresenter {
  constructor({
    headContainer
  }) {
    this.headContainer = headContainer;
  }
  init() {
    (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.render)(new _view_header_info_js__WEBPACK_IMPORTED_MODULE_1__["default"](), this.headContainer, _render_js__WEBPACK_IMPORTED_MODULE_0__.RenderPosition.AFTERBEGIN);
  }
}

/***/ }),

/***/ "./src/presenter/trip-presenter.js":
/*!*****************************************!*\
  !*** ./src/presenter/trip-presenter.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TripPresenter)
/* harmony export */ });
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render.js */ "./src/render.js");
/* harmony import */ var _view_points_list_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/points-list-view.js */ "./src/view/points-list-view.js");
/* harmony import */ var _view_point_form_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/point-form-view.js */ "./src/view/point-form-view.js");
/* harmony import */ var _view_trip_view_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/trip-view.js */ "./src/view/trip-view.js");
/* harmony import */ var _view_point_item_view_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/point-item-view.js */ "./src/view/point-item-view.js");
/* harmony import */ var _view_sorting_view_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view/sorting-view.js */ "./src/view/sorting-view.js");






class TripPresenter {
  sortingComponent = new _view_sorting_view_js__WEBPACK_IMPORTED_MODULE_5__["default"](); //сортировка
  pointsListComponent = new _view_points_list_view_js__WEBPACK_IMPORTED_MODULE_1__["default"](); //ul
  pointItemComponent = new _view_point_item_view_js__WEBPACK_IMPORTED_MODULE_4__["default"](); //li, без наполнения

  constructor({
    mainContentContainer,
    destinationsModel,
    offersModel,
    tripModel
  }) {
    this.mainContentContainer = mainContentContainer;
    this.destinationsModel = destinationsModel;
    this.offersModel = offersModel;
    this.tripModel = tripModel;
    this.points = [...this.tripModel.get()];
  }
  init() {
    (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.render)(this.sortingComponent, this.mainContentContainer, _render_js__WEBPACK_IMPORTED_MODULE_0__.RenderPosition.BEFOREEND); //сортировка
    (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.render)(this.pointsListComponent, this.mainContentContainer); //список поинтов определяем в общ. контейнер
    (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.render)(this.pointItemComponent, this.pointsListComponent.getElement()); //вставляем li в список поинтов

    (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.render)(new _view_point_form_view_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
      point: this.points[0],
      pointOffers: this.offersModel.getByType(this.points[0].type),
      pointDestination: this.destinationsModel.getById(this.points[0].destination)
    }), this.pointItemComponent.getElement()); //определяем форму в первый li

    this.points.forEach(point => {
      (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.render)(new _view_trip_view_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
        point,
        pointDestination: this.destinationsModel.getById(point.destination),
        pointOffers: this.offersModel.getByType(point.type)
      }), this.pointsListComponent.getElement()); //рендерим поинт (закрытая карточка) в li
    });
  }
}

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RenderPosition: () => (/* binding */ RenderPosition),
/* harmony export */   createElement: () => (/* binding */ createElement),
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
const RenderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend'
};
function createElement(template) {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;
  return newElement.firstElementChild;
}
function render(component, container, place = RenderPosition.BEFOREEND) {
  container.insertAdjacentElement(place, component.getElement());
}


/***/ }),

/***/ "./src/service/service.js":
/*!********************************!*\
  !*** ./src/service/service.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MockData)
/* harmony export */ });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const.js */ "./src/const.js");
/* harmony import */ var _mock_mock_const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mock/mock-const.js */ "./src/mock/mock-const.js");
/* harmony import */ var _mock_mock_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock/mock-utils.js */ "./src/mock/mock-utils.js");
/* harmony import */ var _mock_mock_destination_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mock/mock-destination.js */ "./src/mock/mock-destination.js");
/* harmony import */ var _mock_mock_offer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mock/mock-offer.js */ "./src/mock/mock-offer.js");
/* harmony import */ var _mock_mock_point_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mock/mock-point.js */ "./src/mock/mock-point.js");








//const destinationsCount = getRandomNumber(1, DESTINATIONS.length);

class MockData {
  destinations = [];
  offers = [];
  points = [];
  constructor() {
    this.destinations = this.collectDestinations();
    this.offers = this.collectOffers();
    this.points = this.collectPoints();
  }
  getDestinations() {
    return this.destinations;
  }
  getOffers() {
    return this.offers;
  }
  getPoints() {
    return this.points;
  }
  collectDestinations() {
    return Array.from({
      length: _const_js__WEBPACK_IMPORTED_MODULE_0__.DESTINATIONS_COUNT
    }, () => (0,_mock_mock_destination_js__WEBPACK_IMPORTED_MODULE_3__.createDestination)());
  }
  collectOffers() {
    return _const_js__WEBPACK_IMPORTED_MODULE_0__.POINTS_TYPES.map(type => ({
      type,
      offers: Array.from({
        length: (0,_mock_mock_utils_js__WEBPACK_IMPORTED_MODULE_2__.getRandomNumber)(1, (0,_mock_mock_utils_js__WEBPACK_IMPORTED_MODULE_2__.getRandomNumber)(1, _mock_mock_const_js__WEBPACK_IMPORTED_MODULE_1__.OFFERS_COUNT))
      }, () => (0,_mock_mock_offer_js__WEBPACK_IMPORTED_MODULE_4__.createOffer)())
    }));
  }
  collectPoints() {
    return Array.from({
      length: _mock_mock_const_js__WEBPACK_IMPORTED_MODULE_1__.POINTS_COUNT
    }, () => {
      const type = (0,_mock_mock_utils_js__WEBPACK_IMPORTED_MODULE_2__.getRandomArrayElement)(_const_js__WEBPACK_IMPORTED_MODULE_0__.POINTS_TYPES);
      const destination = (0,_mock_mock_utils_js__WEBPACK_IMPORTED_MODULE_2__.getRandomArrayElement)(this.destinations);
      const hasOffers = (0,_mock_mock_utils_js__WEBPACK_IMPORTED_MODULE_2__.getRandomNumber)(0, 1);
      const offersByType = this.offers.find(offerByType => offerByType.type === type);
      const offersIds = hasOffers ? offersByType.offers.slice(0, (0,_mock_mock_utils_js__WEBPACK_IMPORTED_MODULE_2__.getRandomNumber)(0, _mock_mock_const_js__WEBPACK_IMPORTED_MODULE_1__.OFFERS_COUNT)).map(offer => offer.id) : [];
      return (0,_mock_mock_point_js__WEBPACK_IMPORTED_MODULE_5__.createPoint)(type, offersIds, destination.id);
    });
  }
}

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calcPointDuration: () => (/* binding */ calcPointDuration),
/* harmony export */   capitalizeFirstLetter: () => (/* binding */ capitalizeFirstLetter),
/* harmony export */   formatFullDate: () => (/* binding */ formatFullDate),
/* harmony export */   formatShortDate: () => (/* binding */ formatShortDate),
/* harmony export */   formatTime: () => (/* binding */ formatTime),
/* harmony export */   humanizeDate: () => (/* binding */ humanizeDate)
/* harmony export */ });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const.js */ "./src/const.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs_plugin_duration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs/plugin/duration */ "./node_modules/dayjs/plugin/duration.js");
/* harmony import */ var dayjs_plugin_duration__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_duration__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs/plugin/relativeTime */ "./node_modules/dayjs/plugin/relativeTime.js");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_3__);




dayjs__WEBPACK_IMPORTED_MODULE_1___default().extend((dayjs_plugin_duration__WEBPACK_IMPORTED_MODULE_2___default()));
dayjs__WEBPACK_IMPORTED_MODULE_1___default().extend((dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_3___default()));

//задаем формат даты

const humanizeDate = (date, dateFormat) => date ? dayjs__WEBPACK_IMPORTED_MODULE_1___default()(date).format(dateFormat) : '';
const formatFullDate = inputDate =>
//задаем дату в полном формате
inputDate ? dayjs__WEBPACK_IMPORTED_MODULE_1___default()(inputDate).format(_const_js__WEBPACK_IMPORTED_MODULE_0__.DateFormat.FULL) : '';
const formatShortDate = inputDate =>
//задаем месяцы
inputDate ? dayjs__WEBPACK_IMPORTED_MODULE_1___default()(inputDate).format(_const_js__WEBPACK_IMPORTED_MODULE_0__.DateFormat.DATE) : '';
const formatTime = inputDate =>
// задаем часы/минуты
inputDate ? dayjs__WEBPACK_IMPORTED_MODULE_1___default()(inputDate).format(_const_js__WEBPACK_IMPORTED_MODULE_0__.DateFormat.TIME) : '';

//вычисляем продолжительность события

const calcPointDuration = (dateFrom, dateTo) => {
  const timeDiff = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(dateTo).diff(dayjs__WEBPACK_IMPORTED_MODULE_1___default()(dateFrom));
  let pointDuration = 0;
  if (timeDiff >= _const_js__WEBPACK_IMPORTED_MODULE_0__.MSEC_IN_DAY) {
    pointDuration = dayjs__WEBPACK_IMPORTED_MODULE_1___default().duration(timeDiff).format('DD[D] HH[H] mm[M]');
  } else if (timeDiff >= _const_js__WEBPACK_IMPORTED_MODULE_0__.MSEC_IN_HOUR) {
    pointDuration = dayjs__WEBPACK_IMPORTED_MODULE_1___default().duration(timeDiff).format('HH[H] mm[M]');
  } else if (timeDiff < _const_js__WEBPACK_IMPORTED_MODULE_0__.MSEC_IN_HOUR) {
    pointDuration = dayjs__WEBPACK_IMPORTED_MODULE_1___default().duration(timeDiff).format('mm[M]');
  }
  return pointDuration;
};

//делаем первую букву заглавной

const capitalizeFirstLetter = string => !string ? string : string.charAt(0).toUpperCase() + string.slice(1);


/***/ }),

/***/ "./src/view/filters-list-view.js":
/*!***************************************!*\
  !*** ./src/view/filters-list-view.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FiltersListView)
/* harmony export */ });
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render.js */ "./src/render.js");

function createFiltersListTemplate() {
  return `<form class="trip-filters" action="#" method="get">
  <div class="trip-filters__filter">
    <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything">
    <label class="trip-filters__filter-label" for="filter-everything">Everything</label>
  </div>

  <div class="trip-filters__filter">
    <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">
    <label class="trip-filters__filter-label" for="filter-future">Future</label>
  </div>

  <div class="trip-filters__filter">
    <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">
    <label class="trip-filters__filter-label" for="filter-present">Present</label>
  </div>

  <div class="trip-filters__filter">
    <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past" checked>
    <label class="trip-filters__filter-label" for="filter-past">Past</label>
  </div>

  <button class="visually-hidden" type="submit">Accept filter</button>
</form>`;
}
class FiltersListView {
  getTemplate() {
    return createFiltersListTemplate();
  }
  getElement() {
    if (!this.element) {
      this.element = (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(this.getTemplate());
    }
    return this.element;
  }
  removeElement() {
    this.element = null;
  }
}

/***/ }),

/***/ "./src/view/header-info.js":
/*!*********************************!*\
  !*** ./src/view/header-info.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HeaderInfoView)
/* harmony export */ });
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render.js */ "./src/render.js");

function createHeaderInfoTemplate() {
  return `<section class="trip-main__trip-info  trip-info">
  <div class="trip-info__main">
    <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>

    <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>
  </div>

  <p class="trip-info__cost">
    Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
  </p>
</section>`;
}
class HeaderInfoView {
  getTemplate() {
    return createHeaderInfoTemplate();
  }
  getElement() {
    if (!this.element) {
      this.element = (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(this.getTemplate());
    }
    return this.element;
  }
  removeElement() {
    this.element = null;
  }
}

/***/ }),

/***/ "./src/view/point-form-view.js":
/*!*************************************!*\
  !*** ./src/view/point-form-view.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PointFormView)
/* harmony export */ });
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render.js */ "./src/render.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const.js */ "./src/const.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");




//создаем шаблон для типов инвентов/POINTS_TYPES

function createPointsTypeList(types, type) {
  return types.map(item => `
  <div class="event__type-item">
    <input id="event-type-${item.type}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${item.type}" ${item === type ? 'checked' : ''}>
    <label class="event__type-label  event__type-label--${item.type}" for="event-type-${item.type}">${(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.capitalizeFirstLetter)(item)}</label>
  </div>`).join('');
}

//создаем шаблон для офферов

function createOffersTemplate(offers, type, id) {
  return offers.map(offer => `
  <div class="event__offer-selector">
    <input class="event__offer-checkbox visually-hidden" id="event-offer-${type}-${offer.id}" type="checkbox" name="event-offer-${type}" ${offers.includes(id) ? 'checked' : ''}>
    <label class="event__offer-label" for="event-offer-${type}-${offer.id}">
        <span class="event__offer-title">${offer.title}</span>
          &plus;&euro;&nbsp;
        <span class="event__offer-price">${offer.price}</span>
      </label>
  </div>`).join('');
}

//создаем шаблон для списка направлений

function createDestinationsList(destinations, point) {
  return destinations.map(city => `
  <input class="event__input  event__input--destination" id="event-destination-${point.id}" type="text" name="event-destination" value="${city.name}" list="destination-list-${point.id}">
    <datalist id="destination-list-${point.id}">
      <option value="${city.name}"></option>`).join('');
}

//создаем шаблон для направления

function createDestinationTemplate(destination) {
  const {
    photos,
    description
  } = destination;
  const photosTemplate = createPhotosTemplate(photos);
  const descriptionTemplate = createDescriptionTemplate(description);
  return `<section class="event__section  event__section--destination">
    ${descriptionTemplate}
    ${photosTemplate}
  </section>`;
}

//создаем шаблон для фото под направление

function createPhotosTemplate(photos) {
  return `
  <div class="event__photos-container">
    <div class="event__photos-tape">
      ${photos.map(item => `<img class="event__photo" src="${item.src}" alt="${item.description}">`).join('')}
    </div>
  </div>`;
}

//создаем описание направления

function createDescriptionTemplate(destination) {
  return `
  <h3 class="event__section-title  event__section-title--destination">${destination.name}</h3>
  <p class="event__destination-description">${destination.description}</p>`;
}

//создаем шаблон поинта

function createPointTemplate(point = _const_js__WEBPACK_IMPORTED_MODULE_1__.NEW_POINT_FORM, pointOffers, destinations) {
  const {
    type,
    dateFrom,
    dateTo,
    price
  } = point;
  const typesList = createPointsTypeList(_const_js__WEBPACK_IMPORTED_MODULE_1__.POINTS_TYPES, type); //получаем список типов ивентов для поинта

  //направления

  const destinationsList = createDestinationsList(destinations, point); //выбор направления в меню

  const pointDestination = destinations.find(city => city.id === point.destination); // отбираем направление для поинта

  const destinationTemplate = createDestinationTemplate(pointDestination); //создаем шаблон для блочка Destination

  //офферы

  const offersTemplate = createOffersTemplate(pointOffers); //собираем актуальные офферы под поинт

  //время

  const startTimeInForm = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.humanizeDate)(dateFrom, _const_js__WEBPACK_IMPORTED_MODULE_1__.DateFormat.DATE_IN_FORM); //время старта ивента
  const endTimeInForm = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.humanizeDate)(dateTo, _const_js__WEBPACK_IMPORTED_MODULE_1__.DateFormat.DATE_IN_FORM); //время финиша ивента

  return `<form class="event event--edit" action="#" method="post">
  <header class="event__header">
    <div class="event__type-wrapper">
      <label class="event__type  event__type-btn" for="event-type-toggle-${point.id}">
        <span class="visually-hidden">Choose event type</span>
        <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="${type}">
      </label>
      <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${point.id}" type="checkbox">

      <div class="event__type-list">
        <fieldset class="event__type-group">
          <legend class="visually-hidden">Event type</legend>

          ${typesList}

        </fieldset>
      </div>
    </div>

    <div class="event__field-group  event__field-group--destination">
      <label class="event__label  event__type-output" for="event-destination-${point.id}">
        ${type}
      </label>

      ${destinationsList}

      </datalist>
    </div>

    <div class="event__field-group  event__field-group--time">
      <label class="visually-hidden" for="event-start-time-${point.id}">From</label>
      <input class="event__input  event__input--time" id="event-start-time-${point.id}" type="text" name="event-start-time" value="${startTimeInForm}">
      &mdash;
      <label class="visually-hidden" for="event-end-time-${point.id}">To</label>
      <input class="event__input  event__input--time" id="event-end-time-${point.id}" type="text" name="event-end-time" value="${endTimeInForm}">
    </div>

    <div class="event__field-group  event__field-group--price">
      <label class="event__label" for="event-price-${point.id}">
        <span class="visually-hidden">Price</span>
        &euro;
      </label>
      <input class="event__input  event__input--price" id="event-price-${point.id}" type="text" name="event-price" value="${price}">
    </div>

    <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
    <button class="event__reset-btn" type="reset">Delete</button>
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </header>
  <section class="event__details">
    <section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>

      <div class="event__available-offers">

        ${offersTemplate}

      </div>
    </section>

    ${destinationTemplate}

  </section>
</form>`;
}
class PointFormView {
  constructor({
    point = _const_js__WEBPACK_IMPORTED_MODULE_1__.NEW_POINT_FORM,
    pointOffers,
    destinations
  }) {
    this.point = point;
    this.pointOffers = pointOffers;
    this.pointDestination = destinations;
  }
  getTemplate() {
    return createPointTemplate(this.point, this.destinations, this.pointOffers);
  }
  getElement() {
    if (!this.element) {
      this.element = (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(this.getTemplate());
    }
    return this.element;
  }
  removeElement() {
    this.element = null;
  }
}

/***/ }),

/***/ "./src/view/point-item-view.js":
/*!*************************************!*\
  !*** ./src/view/point-item-view.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PointItem)
/* harmony export */ });
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render.js */ "./src/render.js");

function createPointListItem() {
  return '<li class="trip-events__item"></li>';
}
class PointItem {
  getTemplate() {
    return createPointListItem();
  }
  getElement() {
    if (!this.element) {
      this.element = (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(this.getTemplate());
    }
    return this.element;
  }
  removeElement() {
    this.element = null;
  }
}

/***/ }),

/***/ "./src/view/points-list-view.js":
/*!**************************************!*\
  !*** ./src/view/points-list-view.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PointsListView)
/* harmony export */ });
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render.js */ "./src/render.js");

function createTripListTemplate() {
  return `
  <ul class="trip-events__list"></ul>`;
}
class PointsListView {
  getTemplate() {
    return createTripListTemplate();
  }
  getElement() {
    if (!this.element) {
      this.element = (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(this.getTemplate());
    }
    return this.element;
  }
  removeElement() {
    this.element = null;
  }
}

/***/ }),

/***/ "./src/view/sorting-view.js":
/*!**********************************!*\
  !*** ./src/view/sorting-view.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SortingView)
/* harmony export */ });
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render.js */ "./src/render.js");

function createListSortingTemplate() {
  return `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
  <div class="trip-sort__item  trip-sort__item--day">
    <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day">
    <label class="trip-sort__btn" for="sort-day">Day</label>
  </div>

  <div class="trip-sort__item  trip-sort__item--event">
    <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>
    <label class="trip-sort__btn" for="sort-event">Event</label>
  </div>

  <div class="trip-sort__item  trip-sort__item--time">
    <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">
    <label class="trip-sort__btn" for="sort-time">Time</label>
  </div>

  <div class="trip-sort__item  trip-sort__item--price">
    <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" checked>
    <label class="trip-sort__btn" for="sort-price">Price</label>
  </div>

  <div class="trip-sort__item  trip-sort__item--offer">
    <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>
    <label class="trip-sort__btn" for="sort-offer">Offers</label>
  </div>
</form>`;
}
class SortingView {
  getTemplate() {
    return createListSortingTemplate();
  }
  getElement() {
    if (!this.element) {
      this.element = (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(this.getTemplate());
    }
    return this.element;
  }
  removeElement() {
    this.element = null;
  }
}

/***/ }),

/***/ "./src/view/trip-view.js":
/*!*******************************!*\
  !*** ./src/view/trip-view.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TripView)
/* harmony export */ });
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render.js */ "./src/render.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


function createOffersListTemplate(pointOffers) {
  return `<ul class="event__selected-offers">
      ${pointOffers.map(offer => `<li class="event__offer">
        <span class="event__offer-title">${offer.title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${offer.price}</span>
      </li>`).join('')}
    </ul>`;
}
function createTripListTemplate({
  point,
  pointDestination,
  pointOffers
}) {
  const {
    price,
    dateFrom,
    dateTo,
    isFavorite,
    type
  } = point;
  return `<div class="event">
      <time class="event__date" datetime="${(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.humanizeDate)(dateFrom)}">${(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.humanizeDate)(dateFrom)}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${type} ${pointDestination.name}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="2019-03-18T10:30">${(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.humanizeDate)(dateFrom)}</time>
          &mdash;
          <time class="event__end-time" datetime="2019-03-18T11:00">${(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.humanizeDate)(dateTo)}</time>
        </p>
        <p class="event__duration">${(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.calcPointDuration)(dateFrom, dateTo)}</p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${price}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
      ${createOffersListTemplate(pointOffers)}
      </ul>

      <button class="event__favorite-btn ${isFavorite ? 'event__favorite-btn--active"' : ''} type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
        </svg>
      </button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>`;
}
class TripView {
  constructor({
    point,
    pointDestination,
    pointOffers
  }) {
    this.point = point;
    this.pointDestination = pointDestination;
    this.pointOffers = pointOffers;
  }
  getTemplate() {
    return createTripListTemplate({
      point: this.point,
      pointDestination: this.pointDestination,
      pointOffers: this.pointOffers
    });
  }
  getElement() {
    if (!this.element) {
      this.element = (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(this.getTemplate());
    }
    return this.element;
  }
  removeElement() {
    this.element = null;
  }
}

/***/ }),

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",c="month",f="quarter",h="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,u=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p="$isDayjsObject",S=function(t){return t instanceof _||!(!t||!t[p])},w=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},O=function(t,e){if(S(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},b=v;b.l=w,b.i=S,b.w=function(t,e){return O(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=w(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[p]=!0}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return b},m.isValid=function(){return!(this.$d.toString()===l)},m.isSame=function(t,e){var n=O(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return O(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<O(t)},m.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!b.u(e)||e,f=b.p(t),l=function(t,e){var i=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case h:return r?l(1,0):l(31,11);case c:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=b.p(t),f="set"+(this.$u?"UTC":""),l=(n={},n[a]=f+"Date",n[d]=f+"Date",n[c]=f+"Month",n[h]=f+"FullYear",n[u]=f+"Hours",n[s]=f+"Minutes",n[i]=f+"Seconds",n[r]=f+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===c||o===h){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[b.p(t)]()},m.add=function(r,f){var d,l=this;r=Number(r);var $=b.p(f),y=function(t){var e=O(l);return b.w(e.date(e.date()+Math.round(t*r)),l)};if($===c)return this.set(c,this.$M+r);if($===h)return this.set(h,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return b.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,f=n.meridiem,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return b.s(s%12||12,t,"0")},$=f||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(y,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return b.s(e.$y,4,"0");case"M":return a+1;case"MM":return b.s(a+1,2,"0");case"MMM":return h(n.monthsShort,a,c,3);case"MMMM":return h(c,a);case"D":return e.$D;case"DD":return b.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(n.weekdaysMin,e.$W,o,2);case"ddd":return h(n.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(s);case"HH":return b.s(s,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return $(s,u,!0);case"A":return $(s,u,!1);case"m":return String(u);case"mm":return b.s(u,2,"0");case"s":return String(e.$s);case"ss":return b.s(e.$s,2,"0");case"SSS":return b.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=this,M=b.p(d),m=O(r),v=(m.utcOffset()-this.utcOffset())*e,g=this-m,D=function(){return b.m(y,m)};switch(M){case h:$=D()/12;break;case c:$=D();break;case f:$=D()/3;break;case o:$=(g-v)/6048e5;break;case a:$=(g-v)/864e5;break;case u:$=g/n;break;case s:$=g/e;break;case i:$=g/t;break;default:$=g}return l?$:b.a($)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return b.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),k=_.prototype;return O.prototype=k,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",c],["$y",h],["$D",d]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),O.extend=function(t,e){return t.$i||(t(e,_,O),t.$i=!0),O},O.locale=w,O.isDayjs=S,O.unix=function(t){return O(1e3*t)},O.en=D[g],O.Ls=D,O.p={},O}));

/***/ }),

/***/ "./node_modules/dayjs/plugin/duration.js":
/*!***********************************************!*\
  !*** ./node_modules/dayjs/plugin/duration.js ***!
  \***********************************************/
/***/ (function(module) {

!function(t,s){ true?module.exports=s():0}(this,(function(){"use strict";var t,s,n=1e3,i=6e4,e=36e5,r=864e5,o=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,u=31536e6,d=2628e6,a=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,h={years:u,months:d,days:r,hours:e,minutes:i,seconds:n,milliseconds:1,weeks:6048e5},c=function(t){return t instanceof g},f=function(t,s,n){return new g(t,n,s.$l)},m=function(t){return s.p(t)+"s"},l=function(t){return t<0},$=function(t){return l(t)?Math.ceil(t):Math.floor(t)},y=function(t){return Math.abs(t)},v=function(t,s){return t?l(t)?{negative:!0,format:""+y(t)+s}:{negative:!1,format:""+t+s}:{negative:!1,format:""}},g=function(){function l(t,s,n){var i=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),s)return f(t*h[m(s)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(s){i.$d[m(s)]=t[s]})),this.calMilliseconds(),this;if("string"==typeof t){var e=t.match(a);if(e){var r=e.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var y=l.prototype;return y.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(s,n){return s+(t.$d[n]||0)*h[n]}),0)},y.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=$(t/u),t%=u,this.$d.months=$(t/d),t%=d,this.$d.days=$(t/r),t%=r,this.$d.hours=$(t/e),t%=e,this.$d.minutes=$(t/i),t%=i,this.$d.seconds=$(t/n),t%=n,this.$d.milliseconds=t},y.toISOString=function(){var t=v(this.$d.years,"Y"),s=v(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var i=v(n,"D"),e=v(this.$d.hours,"H"),r=v(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3,o=Math.round(1e3*o)/1e3);var u=v(o,"S"),d=t.negative||s.negative||i.negative||e.negative||r.negative||u.negative,a=e.format||r.format||u.format?"T":"",h=(d?"-":"")+"P"+t.format+s.format+i.format+a+e.format+r.format+u.format;return"P"===h||"-P"===h?"P0D":h},y.toJSON=function(){return this.toISOString()},y.format=function(t){var n=t||"YYYY-MM-DDTHH:mm:ss",i={Y:this.$d.years,YY:s.s(this.$d.years,2,"0"),YYYY:s.s(this.$d.years,4,"0"),M:this.$d.months,MM:s.s(this.$d.months,2,"0"),D:this.$d.days,DD:s.s(this.$d.days,2,"0"),H:this.$d.hours,HH:s.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:s.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:s.s(this.$d.seconds,2,"0"),SSS:s.s(this.$d.milliseconds,3,"0")};return n.replace(o,(function(t,s){return s||String(i[t])}))},y.as=function(t){return this.$ms/h[m(t)]},y.get=function(t){var s=this.$ms,n=m(t);return"milliseconds"===n?s%=1e3:s="weeks"===n?$(s/h[n]):this.$d[n],s||0},y.add=function(t,s,n){var i;return i=s?t*h[m(s)]:c(t)?t.$ms:f(t,this).$ms,f(this.$ms+i*(n?-1:1),this)},y.subtract=function(t,s){return this.add(t,s,!0)},y.locale=function(t){var s=this.clone();return s.$l=t,s},y.clone=function(){return f(this.$ms,this)},y.humanize=function(s){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!s)},y.valueOf=function(){return this.asMilliseconds()},y.milliseconds=function(){return this.get("milliseconds")},y.asMilliseconds=function(){return this.as("milliseconds")},y.seconds=function(){return this.get("seconds")},y.asSeconds=function(){return this.as("seconds")},y.minutes=function(){return this.get("minutes")},y.asMinutes=function(){return this.as("minutes")},y.hours=function(){return this.get("hours")},y.asHours=function(){return this.as("hours")},y.days=function(){return this.get("days")},y.asDays=function(){return this.as("days")},y.weeks=function(){return this.get("weeks")},y.asWeeks=function(){return this.as("weeks")},y.months=function(){return this.get("months")},y.asMonths=function(){return this.as("months")},y.years=function(){return this.get("years")},y.asYears=function(){return this.as("years")},l}(),p=function(t,s,n){return t.add(s.years()*n,"y").add(s.months()*n,"M").add(s.days()*n,"d").add(s.hours()*n,"h").add(s.minutes()*n,"m").add(s.seconds()*n,"s").add(s.milliseconds()*n,"ms")};return function(n,i,e){t=e,s=e().$utils(),e.duration=function(t,s){var n=e.locale();return f(t,{$l:n},s)},e.isDuration=c;var r=i.prototype.add,o=i.prototype.subtract;i.prototype.add=function(t,s){return c(t)?p(this,t,1):r.bind(this)(t,s)},i.prototype.subtract=function(t,s){return c(t)?p(this,t,-1):o.bind(this)(t,s)}}}));

/***/ }),

/***/ "./node_modules/dayjs/plugin/relativeTime.js":
/*!***************************************************!*\
  !*** ./node_modules/dayjs/plugin/relativeTime.js ***!
  \***************************************************/
/***/ (function(module) {

!function(r,e){ true?module.exports=e():0}(this,(function(){"use strict";return function(r,e,t){r=r||{};var n=e.prototype,o={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function i(r,e,t,o){return n.fromToBase(r,e,t,o)}t.en.relativeTime=o,n.fromToBase=function(e,n,i,d,u){for(var f,a,s,l=i.$locale().relativeTime||o,h=r.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],m=h.length,c=0;c<m;c+=1){var y=h[c];y.d&&(f=d?t(e).diff(i,y.d,!0):i.diff(e,y.d,!0));var p=(r.rounding||Math.round)(Math.abs(f));if(s=f>0,p<=y.r||!y.r){p<=1&&c>0&&(y=h[c-1]);var v=l[y.l];u&&(p=u(""+p)),a="string"==typeof v?v.replace("%d",p):v(p,n,y.l,s);break}}if(n)return a;var M=s?l.future:l.past;return"function"==typeof M?M(a):M.replace("%s",a)},n.to=function(r,e){return i(r,e,this,!0)},n.from=function(r,e){return i(r,e,this)};var d=function(r){return r.$u?t.utc():t()};n.toNow=function(r){return this.to(d(this),r)},n.fromNow=function(r){return this.from(d(this),r)}}}));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _presenter_header_info_presenter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./presenter/header-info-presenter.js */ "./src/presenter/header-info-presenter.js");
/* harmony import */ var _presenter_header_filter_presenter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./presenter/header-filter-presenter.js */ "./src/presenter/header-filter-presenter.js");
/* harmony import */ var _presenter_trip_presenter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./presenter/trip-presenter.js */ "./src/presenter/trip-presenter.js");
/* harmony import */ var _service_service_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/service.js */ "./src/service/service.js");
/* harmony import */ var _model_offers_model_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/offers-model.js */ "./src/model/offers-model.js");
/* harmony import */ var _model_trip_model_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./model/trip-model.js */ "./src/model/trip-model.js");
/* harmony import */ var _model_destinations_model_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./model/destinations-model.js */ "./src/model/destinations-model.js");







const mockData = new _service_service_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
const destinationsModel = new _model_destinations_model_js__WEBPACK_IMPORTED_MODULE_6__["default"](mockData);
const offersModel = new _model_offers_model_js__WEBPACK_IMPORTED_MODULE_4__["default"](mockData);
const tripModel = new _model_trip_model_js__WEBPACK_IMPORTED_MODULE_5__["default"](mockData);
const mainElement = document.querySelector('.page-body');
const mainContentElement = document.querySelector('.trip-main');
const eventsContainerElement = document.querySelector('.trip-events');
const tripControlsElement = mainElement.querySelector('.trip-controls__filters');

//header
const headerInfoPresenter = new _presenter_header_info_presenter_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
  headContainer: mainContentElement
});
const headerFilterPresenter = new _presenter_header_filter_presenter_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
  headContainer: tripControlsElement
});

//main
const mainPresenter = new _presenter_trip_presenter_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
  mainContentContainer: eventsContainerElement,
  destinationsModel,
  offersModel,
  tripModel
});
headerInfoPresenter.init();
headerFilterPresenter.init();
mainPresenter.init();
})();

/******/ })()
;
//# sourceMappingURL=bundle.b553e5f6eed4f4e22559.js.map