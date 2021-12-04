import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["tableRow", "selectedRowCount"];

  SELECTED_ROW_CLASS = 'hi-table__tr--selected';

  connect() {
    this.initSelectionRowCount();
  }

  selectRow(e) {
    e.target.closest('tr').classList.toggle(this.SELECTED_ROW_CLASS);
    this.updateSelectedCount();
  }

  initSelectionRowCount() {
    this.selectedRowCountTarget.innerHTML = '<b>0</b> rows selected';
  }

  updateSelectedCount() {
    const count = document.getElementsByClassName(this.SELECTED_ROW_CLASS).length;
    this.selectedRowCountTarget.innerHTML = `<b>${count}</b> rows selected`;
  }
}
