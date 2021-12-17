import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  indicatorTarget: HTMLElement;
  static targets: string[] = ['indicator'];

  initialize(): void {
    if (window.navigator.onLine) {
      document.body.classList.add('hi-online');
      this.indicatorTarget.setAttribute('title', 'Online');
    } else {
      document.body.classList.add('hi-offline');
      this.indicatorTarget.setAttribute('title', 'Offline');
    };
  }

  connect(): void {
    window.addEventListener('offline', () => {
      document.body.classList.add('hi-offline');
      document.body.classList.remove('hi-online');
      this.indicatorTarget.setAttribute('title', 'Offline');
    });

    window.addEventListener('online', () => {
      document.body.classList.add('hi-online');
      document.body.classList.remove('hi-offline');
      this.indicatorTarget.setAttribute('title', 'Online');
    });
  }
}
