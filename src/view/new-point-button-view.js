import AbstractView from '../framework/view/abstract-view.js';

function createNewButtonTemplate() {
  return (
    `
      <button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>
    `
  );
}

export default class NewPointButtonView extends AbstractView {
  #newPointButtonhandleClick = null;

  constructor ({onClick}) {
    super();
    this.#newPointButtonhandleClick = onClick;
    this.element.addEventListener('click' , this.#clickHandler);
  }

  get template() {
    return createNewButtonTemplate();
  }

  setDisabled(isDisabled) {
    this.element.disabled = isDisabled;
  }

  #clickHandler = (evt) => {
    evt.preventDefault();
    this.#newPointButtonhandleClick();
  };
}
