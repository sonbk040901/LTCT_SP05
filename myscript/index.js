const searchBtn = document.getElementById("search-btn");
let o = document.getElementById("time-opt");
o.addEventListener("change", (e) => {
  let ipMonth = document.getElementById("input-month");
  let ipYear = document.getElementById("input-year");
  if (e.target.value == 1) {
    ipMonth.classList.remove("d-none");
    ipYear.classList.add("d-none");
  } else {
    ipMonth.classList.add("d-none");
    ipYear.classList.remove("d-none");
  }
});

let data = new Data();
let statistics = new Statistics();
searchBtn.addEventListener("click", search);
function search(event) {
  statistics.render();
}

data.getData().then((data) => {
  statistics.render();
});
