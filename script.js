const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

function telephoneCheck(str) {
  let strRegex = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/gm;
  return strRegex.test(str);
}
const checkNum = () => {
  input.value === ""
    ? alert("Please provide a phone number")
    : telephoneCheck(input.value)
    ? (result.innerText = `Valid US number: ${input.value}`)
    : (result.innerText = `Invalid US number: ${input.value}`);
};

const clearOutput = () => {
  result.innerText = "";
};

checkBtn.addEventListener("click", checkNum);
clearBtn.addEventListener("click", clearOutput);

document.addEventListener("keydown", (e) => {
  e.key === "Enter" ? checkNum() : "";
});
