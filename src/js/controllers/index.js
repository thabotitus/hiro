import { Application } from "@hotwired/stimulus";
const app = new Application();

import HelloController      from "./_hello_controller";
import EasterEggsController from "./_easter_eggs_controller";
import NavigationController from "./_navigation_controller";

const controllers = {
  "hello":        HelloController,
  "easter-eggs":  EasterEggsController,
  "navigation":   NavigationController
}

Object.keys(controllers).forEach((identifier) => app.register(identifier, controllers[identifier]));

window.Stimulus = app.start();
