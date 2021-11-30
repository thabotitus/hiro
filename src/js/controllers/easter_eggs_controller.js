import { Controller } from "@hotwired/stimulus";

export default class extends Controller {

  boom() {
    const body = document.getElementsByTagName('body')[0]
    body.innerHTML = '';
    body.style.background = '#dc3545';
    const div = `
      <div style="color: #ffffff; width: 100%; height: 100vh; display: flex; align-items: center; justify-content: center; flex-direction: column;">
        <img src="https://media.giphy.com/media/e2wOSTtvXve0M/giphy.gif" style="border-radius: 8px;" />
        <h1>You pressed the button! 😔</h1>
        <p>Now you have to do a shameful refresh!</p>
      </div>
    `
    body.innerHTML = div;
  }
}
