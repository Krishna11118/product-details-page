function increaseQuantity() {
  const quantitySpan = document.getElementById("quantity");
  let quantity = parseInt(quantitySpan.textContent);
  quantity++;
  quantitySpan.textContent = quantity;
}

function decreaseQuantity() {
  const quantitySpan = document.getElementById("quantity");
  let quantity = parseInt(quantitySpan.textContent);
  if (quantity > 1) {
    quantity--;
    quantitySpan.textContent = quantity;
  }
}

function selectColor(element) {
  const colorBoxes = document.querySelectorAll(".color");
  colorBoxes.forEach((box) => {
    box.classList.remove("selected", "selected1", "selected2", "selected3");
    box.querySelector(".trick")?.remove();
  });

  element.classList.add("selected");

  const trickElement = document.createElement("div");
  trickElement.classList.add("trick");
  element.appendChild(trickElement);
  return true;
}

function selectColor1(element) {
  const colorBoxes = document.querySelectorAll(".color");
  colorBoxes.forEach((box) => {
    box.classList.remove("selected", "selected2", "selected3");
    box.querySelector(".trick")?.remove();
  });

  element.classList.add("selected1");

  const trickElement = document.createElement("div");
  trickElement.classList.add("trick");
  element.appendChild(trickElement);
  return true;
}

function selectColor2(element) {
  const colorBoxes = document.querySelectorAll(".color");
  colorBoxes.forEach((box) => {
    box.classList.remove("selected", "selected1", "selected3");
    box.querySelector(".trick")?.remove();
  });

  element.classList.add("selected2");
  const trickElement = document.createElement("div");
  trickElement.classList.add("trick");
  element.appendChild(trickElement);
  return true;
}

function selectColor3(element) {
  const colorBoxes = document.querySelectorAll(".color");
  colorBoxes.forEach((box) => {
    box.classList.remove("selected", "selected1", "selected2");
    box.querySelector(".trick")?.remove();
  });

  element.classList.add("selected3");

  const trickElement = document.createElement("div");
  trickElement.classList.add("trick");
  element.appendChild(trickElement);
  return true;
}
