import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["routeable"];

  HOST     = window.location.host;
  PROTOCOL = window.location.protocol.concat('//');
  BASE_URL = this.PROTOCOL + this.HOST;
  GH_PATH  = '/hiro';

  connect() {
    this.routeableTargets.forEach(element => {
      element.addEventListener('click', (e) => {
        e.preventDefault();
        const targetUrl = e.target.closest('a').getAttribute('data-url');
        
        this.routeTo(targetUrl, this.BASE_URL, this.GH_PATH);
      });
    });
  }

  routeTo(targetUrl, baseUrl, ghPath) {
    let destinationUrl = new URL(targetUrl, baseUrl);

    if (baseUrl.match('github.io')) {
      const ghUrl = baseUrl + ghPath + targetUrl;
      
      destinationUrl = new URL(ghUrl);
    }

    window.location.assign(destinationUrl);
  }

  disconnect() {
    this.routeableTargets.forEach(element => {
      element.removeEventListener('click');
    });
  }
}
