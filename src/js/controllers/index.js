import { Application } from "@hotwired/stimulus";

import HelloController      from "./_hello_controller";
import EasterEggsController from "./_easter_eggs_controller";
import NavigationController from "./_navigation_controller";
import TableController      from "./_table_controller";
import RoutingController    from "./_routing_controller";
import NetworkController    from "./network_controller";
import ChartController      from "./_chart_controller";

const controllers = {
  "routes":       RoutingController,
  "hello":        HelloController,
  "easter-eggs":  EasterEggsController,
  "navigation":   NavigationController,
  "table":        TableController,
  "network":      NetworkController,
  "chart":        ChartController,
}

const app = new Application();
Object.keys(controllers).forEach((identifier) => app.register(identifier, controllers[identifier]));

window.Stimulus = app.start();
