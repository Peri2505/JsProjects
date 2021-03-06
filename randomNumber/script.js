const minInput = document.querySelector("#lowLimit");
const maxInput = document.querySelector("#upLimit");
const randomNumSpan = document.querySelector("#randomNum");
const generateBtn = document.querySelector("#generateBtn");
const clearBtn = document.querySelector("#clearBtn");

function generateRandomNum() {
  const minNum = Number(minInput.value);
  const maxNum = Number(maxInput.value);
  if (minNum > maxNum || !minInput.value === "" || maxInput.value === "") {
    randomNumSpan.innerHTML = "Invalid Input";
  } else {
    const randomNum =
      Math.floor((maxNum - minNum + 1) * Math.random()) + minNum;
    randomNumSpan.innerHTML = randomNum;
  }
}

function clearInput() {
  minInput.value = "";
  maxInput.value = "";
  randomNumSpan.innerHTML = "";
}
