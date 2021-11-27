import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["body", "colourmodeCheckbox"];

  COLOURMODE_KEY  = 'tts-colourmode';
  DARK_MODE_CLASS = 'tts-dark-mode';

  GET_LS_STATE = (key) => localStorage.getItem(key);
  SET_LS_STATE = (key, value) => localStorage.setItem(key, value);

  connect() {
    this.setInitialColorMode();
  }

  setInitialColorMode() {
    if (this.GET_LS_STATE(this.COLOURMODE_KEY) === 'dark') {
      this.bodyTarget.classList.add(this.DARK_MODE_CLASS);
      this.colourmodeCheckboxTarget.checked = true;
    }
  }

  toggleDarkMode(evt) {
    switch (evt.target.checked) {
      case true:
        this.bodyTarget.classList.add(this.DARK_MODE_CLASS);
        this.SET_LS_STATE(this.COLOURMODE_KEY, 'dark');
        break;
      default:
        this.bodyTarget.classList.remove(this.DARK_MODE_CLASS);
        this.SET_LS_STATE(this.COLOURMODE_KEY, null)
        break;
    }
    // if (evt.target.checked) {
    //   this.bodyTarget.classList.add(this.DARK_MODE_CLASS);
    //   this.SET_LS_STATE(this.COLOURMODE_KEY, 'dark');
    // } else {
    //   this.bodyTarget.classList.remove(this.DARK_MODE_CLASS);
    //   this.SET_LS_STATE(this.COLOURMODE_KEY, null);
    // }
  }
}
