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
    
  }
}
