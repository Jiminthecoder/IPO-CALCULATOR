// event listener

document.getElementById("Calculate").addEventListener("click", answerclicked);

function answerclicked() {
  // input
  let A = +document.getElementById("Number1-in").value;
  let B = +document.getElementById("Number2-in").value;

  //   process
  let C = Math.sqrt(A * A + B * B);

  // output
  document.getElementById("output").innerHTML = C;
}
