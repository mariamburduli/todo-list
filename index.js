const addInput = document.getElementById("addInput");
const addButton = document.getElementById("addButton");
const list = document.getElementById("list");
const sum = document.getElementById("sum");
let counter = 0;

addButton.addEventListener("click", function (e) {
  if (!addInput.value) return;

  if (document.getElementById("addInput").value.length === "") {
    alert("empty");
  }
  let li = document.createElement("li");
  li.innerText = addInput.value;
  list.appendChild(li);

  let span = document.createElement("span");
  span.innerText = "X";
  li.appendChild(span);
  span.className = "span";
  counter = counter + 1;
  sum.innerText = counter;

  span.addEventListener("click", function (e) {
    list.removeChild(li);
    counter = counter - 1;
    sum.innerText = counter;
  });

  addInput.value = "";
  addButton.disabled = true;

  e.preventDefault();
});

addInput.addEventListener("keyup", function (e) {
  const value = e.currentTarget.value;
  if (value === "") {
    addButton.disabled = true;
  } else {
    addButton.disabled = false;
  }
});
