myChart.data.labels = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];
myChart.data.datasets[0].label = "Doanh thu";
myChart.data.datasets[1].label = "Vốn";
myChart.data.datasets[0].data = [...Array.from("0".repeat(31))];
myChart.data.datasets[1].data = [...Array.from("0".repeat(31))];
