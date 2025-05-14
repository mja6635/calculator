let display = document.getElementById("display");

function appendChar(char) {
  if (display.textContent === "0" && char !== ".") {
    display.textContent = char;
  } else {
    display.textContent += char;
  }
}

function clearDisplay() {
  display.textContent = "0";
}

function deleteChar() {
  if (display.textContent.length === 1) {
    display.textContent = "0";
  } else {
    display.textContent = display.textContent.slice(0, -1);
  }
}

function calculate() {
  try {
    display.textContent = eval(display.textContent);
  } catch {
    display.textContent = "Error";
  }
}
