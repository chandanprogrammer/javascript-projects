const selectedColorElement = document.getElementById("colorPicker");
const colorCode = document.getElementById("color-code");
const saveColorButton = document.getElementById("save-color-button");

selectedColorElement.addEventListener("input", () => {
  colorCode.innerText = selectedColorElement.value;
  colorCode.style.color = selectedColorElement.value;

  // const hexValue = selectedColorElement.value.replace("#", "");
  const selectedColor = selectedColorElement.value.slice(1);

  const complementaryCode = getComplementaryColor(selectedColor);

  const complementaryColorBox = document.getElementById(
    "complementary-color-box"
  );
  complementaryColorBox.style.backgroundColor = `#${complementaryCode}`;
  document.getElementById(
    "complementary-color-code"
  ).innerText = `#${complementaryCode}`;
});

saveColorButton.addEventListener('click', savedColorBox);


// Get Complementary Color
function getComplementaryColor(color) {
  const base = parseInt(color, 16);
  const complementaryColor = (0xffffff ^ base).toString(16).padStart(6, "0");
  // console.log(base, complementaryCode);
  return complementaryColor;
}

// Copy Color Code
function copyColorCode(element) {
  const text = element.id.replace("copy-", "");
  const selectedElement = document.getElementById(`${text}-code`);
  navigator.clipboard
    .writeText(selectedElement.textContent)
    .then(() => {
      alert(`Copied color code: ${selectedElement.textContent}`);
    })
    .catch((err) => console.log("Not copied color code: ", err));
}

// create save color box
function savedColorBox(){
  const saveColorContainer = document.getElementById('save-color-container');
  const divElement = document.createElement('div');
  divElement.classList.add('saved-color-box');
  divElement.style.backgroundColor = colorCode.textContent;
  saveColorContainer.appendChild(divElement)
}