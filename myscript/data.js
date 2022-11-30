class Data {
  result;
  isMonth;
  constructor() {}
  async getData() {
    await fetch("./myscript/doanhthu.json")
      .then((res) => res.json())
      .then((json) => (this.doanhthu = json))
      .catch((err) => console.log(err));
    return this;
  }
  async getTong(options = { isMonth: true, time: [] }) {
    this.isMonth = options.isMonth;
    this.result = this.doanhthu.filter((v) => {
      let month = v.thoigian.slice(5, 7);
      let year = v.thoigian.slice(0, 4);
      if (options.isMonth) {
        return year == options.time[0] && month == options.time[1];
      } else return year == options.time[0];
    });
    return [
      this.result.map((v) => v.tongdoanhthu).reduce((p, v) => p + v, 0),
      this.result.map((v) => v.tongvon).reduce((p, v) => p + v, 0),
    ];
  }
  hash(key) {
    return parseInt(this.isMonth ? key.slice(8, 10) : key.slice(5, 7));
  }
  getDetails(/*options*/) {
    let details = [];
    this.result.forEach((v) => {
      if (!details[this.hash(v.thoigian)]) {
        details[this.hash(v.thoigian)] = [];
      }
      details[this.hash(v.thoigian)].push(v);
    });
    return details;
  }
}
