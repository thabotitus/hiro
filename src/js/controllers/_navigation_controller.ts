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
    const currentUrl: Location = window.location;
    const navItems: NodeListOf<HTMLElement> = document.querySelectorAll('[data-url]');
    
    const activeItems: HTMLElement[] = [...navItems].filter((el: HTMLElement): boolean => {
      return currentUrl.pathname === el.dataset.url;
    });

    activeItems.forEach(ai => {
      const parentId: string = ai.parentElement.id;
      const toggleableParents: NodeListOf<HTMLElement> = document.querySelectorAll(`a[href='#${parentId}']`);
      [...toggleableParents].forEach((item: HTMLElement) => item.click());
    });
  }
}
