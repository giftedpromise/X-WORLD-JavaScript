function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

const container = document.querySelector(".wrapper");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.paddingLeft = "10rem";
container.style.paddingRight = "10rem";

for (let i = 0; i <= 101; i++) {
  let numberDiv = document.createElement("div");
  numberDiv.textContent = i;
  numberDiv.style.border = "1px solid none";
  numberDiv.style.padding = "25px";

  numberDiv.style.textAlign = "center";
  numberDiv.style.width = "calc((100% / 6) - 25px)";
  numberDiv.style.margin = "2px";
  numberDiv.style.color = "white";
  numberDiv.style.fontWeight = "bold";
  numberDiv.style.fontSize = "32px";
  container.appendChild(numberDiv);

  if (isPrime(i)) {
    numberDiv.style.backgroundColor = "red"; // Prime number
  } else if (i % 2 === 0) {
    numberDiv.style.backgroundColor = "green"; // Even number
  } else {
    numberDiv.style.backgroundColor = "yellow"; // Odd number
  }
}
