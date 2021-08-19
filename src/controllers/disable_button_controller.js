import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["button", "link"]
  disable(event) {
    console.log(event);
    this.buttonTarget.innerText = "Bingo!";
    this.buttonTarget.setAttribute('disabled', '');
    this.linkTarget.classList.remove("d-none");
  }
  }


export { Controller }
