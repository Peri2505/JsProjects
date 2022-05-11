const btn = document.querySelector("#btn");
const input = document.querySelector("#input");
const messageParagraph = document.querySelector("#message");
btn.addEventListener("click", function () {
  let text = input.value;
  if (text === "") {
    alert("Please enter your message");
  } else {
    messageParagraph.innerText = text;
    input.value = "";
    btn.innerText = "Submited!";
  }
});
input.addEventListener("click", function () {
  btn.innerText = "Submit";
});
