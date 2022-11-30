function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  let q = ((end - start) * 5) / 10 + start;
  let bool = true;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start).toLocaleString(
      "de-DE"
    );
    // if (bool && Math.abs(obj.innerHTML.replaceAll(".", "") - 0) < q) {
    //   duration *= 10;
    //   bool = false;
    // }
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

// const obj = document.getElementById("value");
// animateValue(obj, 100, 0, 5000);
