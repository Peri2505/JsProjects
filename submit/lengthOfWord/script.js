const input = document.querySelector("#input");
const output = document.querySelector("#output");

input.addEventListener("input", function () {
  let textInput = input.value;
  textLength = textInput.split(" ").join("").length;
  output.innerHTML = textLength;
  // output.classList.toggle("hidden");
});
