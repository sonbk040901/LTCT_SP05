class SearchOptions {
  isMonth;
  time;
  isRevenue;
  elements;
  constructor() {
    this.elements = new Array(
      "time-opt",
      "input-month",
      "input-year",
      "option1"
    ).map((id) => document.getElementById(id));
    this.update();
  }
  update() {
    this.isMonth = this.elements[0].value == 1;
    this.time = this.isMonth
      ? this.elements[1].value.split("-")
      : new Array(this.elements[2].value);
    this.isRevenue = this.elements[3].checked;
  }
  //for testing only
  test() {
    this.update();
    [this.isMonth, this.time, this.isRevenue].forEach((value) => {
      console.log(value);
    });
  }
}
