import { Controller } from "@hotwired/stimulus";

type RouteHandlingFn = (e: Event) => void;

export default class extends Controller {
  routeableTargets:     HTMLElement[];
  routeableTarget:      HTMLElement;
  hasRouteableTarget:   boolean;

  static targets: string[]  = ["routeable"];

  HOST:            string = window.location.host;
  PROTOCOL:        string = window.location.protocol.concat('//');
  BASE_URL:        string = this.PROTOCOL + this.HOST;
  GH_PATH:         string = '/hiro';
  GH_MATCH_STRING: string = 'github.io';

  connect = (): void => {
    if (this.hasRouteableTarget)
      this.assignEventHandling(this.routeableTargets, this.routingHandler, 'add', 'click');
  }

  disconnect = (): void => {
    this.assignEventHandling(
      this.routeableTargets, this.routingHandler, 'remove', 'click'
    );
  }

  private assignEventHandling = (collection: HTMLElement[], handlerFn: RouteHandlingFn, type: string, listenerType: string): void => {
    switch (type) {
      case "add":
        collection.forEach(col => col.addEventListener(listenerType, handlerFn));
        break;
      case "remove":
        collection.forEach(col => col.addEventListener(listenerType, handlerFn));
        break;
    }
  }

  private routeTo = (targetUrl: string, baseUrl: string, ghPath: string): void => {
    window.location.assign(
      this.buildDestinationUrl(targetUrl, baseUrl, ghPath)
    );
  }

  private routingHandler = (event: Event): void => {
    event.preventDefault();

    const { target } = event;
    const targetUrl  = (target as HTMLElement).closest('a').getAttribute('data-url');

    this.routeTo(targetUrl, this.BASE_URL, this.GH_PATH);
  }

  private buildDestinationUrl = (targetUrl: string, baseUrl: string, ghPath: string): URL => {
    let ghUrl:   string;
    let destUrl: URL = new URL(targetUrl, baseUrl);

    if (baseUrl.match(this.GH_MATCH_STRING)) {
      ghUrl     = baseUrl.concat(ghPath, targetUrl);
      destUrl   = new URL(ghUrl);
    }

    return destUrl;
  }
}
