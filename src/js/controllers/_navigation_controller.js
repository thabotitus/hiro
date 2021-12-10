import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["navigation", "offcanvas"];

  connect() {
    if (this.hasNavigationTarget) {
      this.copyNavigationToOffcanvas();
    }
  }

  copyNavigationToOffcanvas() {
    const dup = this.navigationTarget.cloneNode(true);
    this.offcanvasTarget.innerHTML = '';
    this.offcanvasTarget.append(dup);
  }
}
