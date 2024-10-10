const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function () {
  const todoInput = document.getElementById("todoInput");
  if (!todoInput.value.trim("")) {
    return alert("Todo value can't empty!");
  }
  const ul = document.getElementById("listItems");
  // Check if height exceeds 300px
  if (ul.scrollHeight > 300) {
    ul.style.overflowY = "auto";
  }
  const li = document.createElement("li");
  li.classList.add("list");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "myCheckbox";
  checkbox.name = "myCheckbox";
  checkbox.checked = false;

  const input = document.createElement("input");
  input.type = "text";
  input.value = todoInput.value;
  input.setAttribute("readonly", "readonly");
  input.classList.add("liText");

  const div1 = document.createElement("div");
  div1.classList.add("div1");
  div1.append(checkbox);

  div1.append(input);

  li.append(div1);

  const edit = document.createElement("span");
  edit.textContent = "EDIT";
  edit.style.color = "green";
  edit.addEventListener("click", function () {
    if (edit.innerText.toUpperCase() === "EDIT") {
      input.removeAttribute("readonly");
      input.focus();
      edit.innerText = "SAVE";
    } else {
      input.setAttribute("readonly", "readonly");
      edit.innerText = "EDIT";
    }
  });

  const complete = document.createElement("span");
  complete.textContent = "COMPLETE";
  complete.addEventListener("click", function () {
    li.firstChild.classList.toggle("toggle");
    input.classList.toggle("inputText");
  });
  complete.style.color = "yellow";
  const delet = document.createElement("span");
  delet.textContent = "DELETE";
  delet.style.color = "red";
  delet.addEventListener("click", function () {
    if (checkbox.checked === true) {
      ul.removeChild(li);
    } else {
      alert("The checkbox has not been checked");
    }
  });

  const div2 = document.createElement("div");

  div2.classList.add("liContainer");

  div2.append(edit);
  div2.append(complete);
  div2.append(delet);

  li.append(div2);

  ul.appendChild(li);

  todoInput.value = "";
});
