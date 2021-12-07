import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["tableRow", "selectedRowCount"];

  SELECTED_ROW_CLASS = 'hi-table__tr--selected';

  selectRow(event) {
    event.target.closest('tr').classList.toggle(this.SELECTED_ROW_CLASS);
  }
}
