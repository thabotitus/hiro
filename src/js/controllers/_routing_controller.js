import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["routeable"];

  HOST     = window.location.host;
  PROTOCOL = window.location.protocol.concat('//');
  BASE_URL = this.PROTOCOL + this.HOST;
  GH_PATH  = '/hiro';

  connect() {
    this.routeableTargets.forEach(element => {
      console.log('BASE URL', this.BASE_URL);
      console.log('IS GH', this.BASE_URL.match('github.io'));

      element.addEventListener('click', (e) => {
        e.preventDefault();
        const targetUrl = e.target.closest('a').getAttribute('data-url');
        
        this.routeTo(targetUrl, this.BASE_URL, this.GH_PATH);
      });
    });
  }

  routeTo(targetUrl, baseUrl, ghPath) {
    let destinationUrl = new URL(targetUrl, baseUrl);

    console.log('DESTINATION', destinationUrl);
    console.log('BASE URL', baseUrl);
    console.log('TARGET URL', targetUrl);


    if (baseUrl.match('github.io')) {
      destinationUrl = new URL(targetUrl, baseUrl + ghPath);
    }

    window.location = destinationUrl;
  }

  disconnect() {
    this.routeableTargets.forEach(element => {
      element.removeEventListener('click');
    });
  }
}
