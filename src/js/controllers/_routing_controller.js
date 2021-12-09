import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["routeable"];

  HOST     = window.location.host;
  PROTOCOL = window.location.protocol.concat('//');
  BASE_URL = this.PROTOCOL + this.HOST;

  connect() {
    this.routeableTargets.forEach(element => {
      element.addEventListener('click', (e) => {
        e.preventDefault();
        const targetUrl = e.target.closest('a').getAttribute('data-url');
        this.routeTo(targetUrl, this.BASE_URL);
      });
    });
  }

  routeTo(targetUrl, baseUrl) {
    window.location = new URL(targetUrl, baseUrl);
  }
}
