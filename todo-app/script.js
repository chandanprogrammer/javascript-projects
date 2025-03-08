const inputTask = document.getElementById("input-task");
const addTaskButton = document.querySelector(".add-task-btn");
const taskList = document.getElementById("task-list");

addTaskButton.addEventListener("click", () => {
  const li = document.createElement("li");
  const p = document.createElement("p");
  const div = document.createElement("div");
  const editTaskBtn = document.createElement("span");
  const deleteTaskBtn = document.createElement("span");

  if (inputTask.value === "") {
    alert("Please enter your task.");
    return;
  }

  p.classList.add("task-content");
  p.innerText = inputTask.value;

  editTaskBtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
  editTaskBtn.classList.add("edit-task");
  editTaskBtn.addEventListener("click", () => {
    inputTask.value = document.querySelector(".task-content").innerText;
    li.remove();
  });

  deleteTaskBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  deleteTaskBtn.classList.add("delete-task");
  deleteTaskBtn.addEventListener("click", () => {
    li.remove();
  });

  div.appendChild(editTaskBtn);
  div.appendChild(deleteTaskBtn);

  li.appendChild(p);
  li.appendChild(div);

  taskList.appendChild(li);

  inputTask.value = "";
});
