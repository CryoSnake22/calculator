let firstNum = "";
let secondNum = "";
let operator = "";
let result = 0;
const resultScreen = document.querySelector("#resultScreen");
const zeroButton = document.querySelector("#zero");
const buttons = document.querySelectorAll(".button");
const comma = document.querySelector("#comma");

function calculate(a, b) {
  comma.classList.add("number");
  switch (operator) {
    case "x":
      return a * b;
    case "/":
      if (b !== 0) {
        return a / b;
      } else {
        return "cannot divide by zero";
      }
    case "+":
      return a + b;
    case "-":
      return a - b;
    default:
      break;
  }
}

buttons.forEach((element) => {
  element.addEventListener("mousedown", function () {
    //styling
    element.style.backgroundColor = "#1C1C1C";
    //Detect which operator is being used
    if (element.classList.contains("operator")) {
      if (secondNum !== "") {
        firstNum = calculate(Number(firstNum), Number(secondNum));
        secondNum = " ";
        resultScreen.textContent = `${firstNum}`;
      }
      switch (element.textContent) {
        case "x":
          operator = "x";
          break;
        case "/":
          operator = "/";
          break;
        case "+":
          operator = "+";
          break;
        case "-":
          operator = "-";
          break;
      }
    }

    if (element.classList.contains("number")) {
      if (operator != "") {
        secondNum += element.textContent;
        resultScreen.textContent = `${secondNum}`;
      } else {
        firstNum += element.textContent;
        resultScreen.textContent = `${firstNum}`;
      }
      if (element.id == "comma") {
        comma.classList.remove("number");
      }
    }

    if (element.id == "equal") {
      result = calculate(Number(firstNum), Number(secondNum));
      if (result !== undefined) {
        resultScreen.textContent = `${result}`;
      } else {
        if (firstNum !== undefined) {
          resultScreen.textContent = `${firstNum}`;
          if (result !== undefined) {
            firstNum = result;
          }

          secondNum = "";
        }
      }

      console.log(result);
    }
    if (element.id == "clear") {
      resultScreen.textContent = 0;
      result = "";
      firstNum = "";
      secondNum = "";
      operator = "";
    }

    console.log(`operator: ${operator}`);
    console.log(`first: ${firstNum}`);
    console.log(`second: ${secondNum}`);
  });
  element.addEventListener("mouseout" || "mouseout", function () {
    element.style.backgroundColor = "";
    element.style.color = "";
  });
  element.addEventListener("mouseup" || "mouseout", function () {
    element.style.backgroundColor = "";
    element.style.color = "";
  });
  //Styling
});
