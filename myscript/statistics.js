class Statistics {
  #searchOptions;
  constructor() {
    this.#searchOptions = new SearchOptions();
    this.dataElement = new Array("doanhthu", "tongvon", "loinhuan").map((id) =>
      document.getElementById(id)
    );
  }
  async render() {
    this.#searchOptions.update();
    let details;
    let [doanhthu, tongvon] = await data1
      .getTong({
        isMonth: this.#searchOptions.isMonth,
        time: this.#searchOptions.time,
      })
      .then((ar) => {
        details = data1.getDetails();
        for (const key in details) {
          let arr = details[key];
          let tongdoanhthu = 0,
            tongvon = 0;
          for (const iterator of arr) {
            tongdoanhthu += iterator.tongdoanhthu;
            tongvon += iterator.tongvon;
          }
          details[key] = [tongdoanhthu, tongvon];
        }
        return ar;
      });
    let loinhuan = doanhthu - tongvon;
    animateValue(
      this.dataElement[0],
      this.dataElement[0].innerHTML.replaceAll(".", "") - 0,
      doanhthu,
      1500
    );
    animateValue(
      this.dataElement[1],
      this.dataElement[1].innerHTML.replaceAll(".", "") - 0,
      tongvon,
      1500
    );
    animateValue(
      this.dataElement[2],
      this.dataElement[2].innerHTML.replaceAll(".", "") - 0,
      loinhuan,
      1500
    );
    let d1 = [],
      d2 = [],
      d3 = [];
    for (let index = 1; index < details.length; index++) {
      const v = details[index];
      d1.push(index);
      d2.push(v ? v[0] : 0);
      d3.push(v ? v[1] : 0);
    }
    myChart.data["labels"] = [...d1];
    myChart.data.datasets[0].data = [...d2];
    myChart.data.datasets[0].label = "Doanh thu";
    myChart.data.datasets[1].data = [...d3];
    myChart.data.datasets[1].label = "Vốn";
    myChart.update();
  }
}
