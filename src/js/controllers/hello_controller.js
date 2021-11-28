import { Controller } from "@hotwired/stimulus";
import { GET_LS_STATE, SET_LS_STATE } from "../localstorage";

export default class extends Controller {
  static targets = ["body", "colourmodeCheckbox"];

  COLOURMODE_KEY  = 'tts-colourmode';
  DARK_MODE_CLASS = 'tts-dark-mode';

  connect() {
    this.setInitialColorMode();
  }

  setInitialColorMode() {
    if (GET_LS_STATE(this.COLOURMODE_KEY) === 'dark') {
      this.bodyTarget.classList.add(this.DARK_MODE_CLASS);
      this._toggleAllColourSwitches(true);
    }
  }

  toggleDarkMode(evt) {
    switch (evt.target.checked) {
      case true:
        this.bodyTarget.classList.add(this.DARK_MODE_CLASS);
        SET_LS_STATE(this.COLOURMODE_KEY, 'dark');
        this._toggleAllColourSwitches(true);
        break;
      default:
        this.bodyTarget.classList.remove(this.DARK_MODE_CLASS);
        SET_LS_STATE(this.COLOURMODE_KEY, null);
        this._toggleAllColourSwitches(false);
        break;
    }
  }

  _toggleAllColourSwitches(bool) {
    this.colourmodeCheckboxTargets.forEach(cb => cb.checked = bool);
  }
}
