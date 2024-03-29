import { Controller } from "@hotwired/stimulus";
import { GET_LS_STATE, SET_LS_STATE } from "../utils/_localstorage";

export default class extends Controller {
  static targets = ["body", "colourmodeCheckbox"];

  COLOURMODE_KEY    = 'hi-colourmode';
  DARK_MODE_CLASS   = 'hi-dark-mode';
  LIGHT_MODE_CLASS  = 'hi-light-mode';

  connect() {
    this.setInitialColorMode();
  }

  setInitialColorMode() {
    if (GET_LS_STATE(this.COLOURMODE_KEY) === 'dark') {
      this.bodyTarget.classList.add(this.DARK_MODE_CLASS);
      this.bodyTarget.classList.remove(this.LIGHT_MODE_CLASS);
      this._toggleAllColourSwitches(true);
    } else {
      this.bodyTarget.classList.add(this.LIGHT_MODE_CLASS);
      this.bodyTarget.classList.remove(this.DARK_MODE_CLASS);
      this._toggleAllColourSwitches(false);
    }
  }

  toggleDarkMode(evt) {
    switch (evt.target.checked) {
      case true:
        this.bodyTarget.classList.add(this.DARK_MODE_CLASS);
        this.bodyTarget.classList.remove(this.LIGHT_MODE_CLASS);

        SET_LS_STATE(this.COLOURMODE_KEY, 'dark');
        this._toggleAllColourSwitches(true);
        break;
      default:
        this.bodyTarget.classList.remove(this.DARK_MODE_CLASS);
        this.bodyTarget.classList.add(this.LIGHT_MODE_CLASS);

        SET_LS_STATE(this.COLOURMODE_KEY, 'light');
        this._toggleAllColourSwitches(false);
        break;
    }
  }

  _toggleAllColourSwitches(bool) {
    this.colourmodeCheckboxTargets.forEach(cb => cb.checked = bool);
  }
}
