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
    let [doanhthu, tongvon] = await data
      .getTong({
        isMonth: this.#searchOptions.isMonth,
        time: this.#searchOptions.time,
      })
      .then((ar) => {
        details = data.getDetails();
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
    this.dataElement[0].innerHTML = doanhthu.toLocaleString("de-DE");
    this.dataElement[1].innerHTML = tongvon.toLocaleString("de-DE");
    this.dataElement[2].innerHTML = loinhuan.toLocaleString("de-DE");

    let d1 = [],
      d2 = [],
      d3 = [];
    for (let index = 0; index < details.length; index++) {
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
