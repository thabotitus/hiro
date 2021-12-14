import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  navigationTargets:     HTMLElement[];
  navigationTarget:      HTMLElement;
  hasNavigationTarget:   boolean;
  
  offcanvasTargets:      HTMLElement[];
  offcanvasTarget:       HTMLElement;
  hasOffcanvasTarget:    boolean;
  
  static targets: string[] = ["navigation", "offcanvas"];

  connect = (): void => {
    if (this.hasNavigationTarget) {
      this.copyNavigationToOffcanvas();
      this.setActiveNavigationItems();
    }
  }

  copyNavigationToOffcanvas = (): void => {
    const dup: Node = this.navigationTarget.cloneNode(true);

    this.offcanvasTarget.innerHTML = '';
    this.offcanvasTarget.append(dup);
  }

  setActiveNavigationItems = (): void => {
    const currentUrl: string = window.location.href;
    const navItems: NodeListOf<HTMLElement> = document.querySelectorAll('[data-url]');

    const activeItem: HTMLElement = [...navItems].find((el: HTMLElement): boolean => {
      return currentUrl.match(el.dataset.url) !== null;
    });

    const parentId: string = activeItem.parentElement.id;
    const toggleableParents: NodeListOf<HTMLElement> = document.querySelectorAll(`a[href='#${parentId}']`);

    [...toggleableParents].forEach((item: HTMLElement) => item.click());
  }
}
