let solveBtn = document.getElementById("solve-btn");
solveBtn.addEventListener("click", solve);

function solve() {
  let x = parseFloat(document.getElementById('x').value);
  let y = parseFloat(document.getElementById('y').value);
  let z;

  if (x > y) {
    z = x * y;
  } else {
    z = Math.log(x + y);
  }

  document.getElementById('result').innerText = z;
}