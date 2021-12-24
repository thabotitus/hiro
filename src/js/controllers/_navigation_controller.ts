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
    let parentId: string;
    let navItems: NodeListOf<HTMLElement> = document.querySelectorAll('[data-url]');

    this.resetNavItems(navItems);

    this.getActiveNavitems(navItems).forEach(currentItem => {
      this.setActiveNavItem(currentItem, 'hi-navigation__item--active');

      // Yes, overwriting the value, but they should be the same
      parentId = currentItem.parentElement.id;
    });

    this.toggleActiveParents(parentId);
  }

  private getActiveNavitems = (items: NodeListOf<HTMLElement>): HTMLElement[] => {
    return [...items].filter((el: HTMLElement): boolean => {
      return window.location.pathname === el.dataset.url;
    });
  }

  private resetNavItems = (items: NodeListOf<HTMLElement>): void => {
    items.forEach(item => item.classList.remove('hi-navigation__item--active'));
  }

  private setActiveNavItem = (item, activeNavItemClass): void => item.classList.add(activeNavItemClass);

  private toggleActiveParents = (parentId: string): void => {
    const toggleableParents: NodeListOf<HTMLElement> = document.querySelectorAll(`a[href='#${parentId}']`);
    [...toggleableParents].forEach((tp: HTMLElement) => tp.click());
  }
}
