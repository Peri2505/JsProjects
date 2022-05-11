const tick = document.querySelector("#tick");
const input = document.querySelector("#input");
tick.addEventListener("click", function () {
  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
});
