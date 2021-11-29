import { Application } from "@hotwired/stimulus";
import { definitionsFromContext } from "@hotwired/stimulus-webpack-helpers";
import { GET_LS_STATE } from './localstorage';


console.log(document.readyState);
console.log(GET_LS_STATE('tts-colourmode'));


window.Stimulus = Application.start();
const context = require.context("./controllers", true, /\.js$/);
Stimulus.load(definitionsFromContext(context));
