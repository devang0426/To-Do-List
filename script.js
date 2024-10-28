function addTask() {
  const taskInput = document.getElementById("taskInput").value;
  const priorityInput = document.getElementById("priorityInput").value;
  const dueDateInput = document.getElementById("dueDateInput").value; // Get due date

  if (taskInput === '') {
      alert("Please enter a task");
      return;
  }

  const taskList = document.getElementById("taskList");

  // Create a new list item
  const li = document.createElement("li");

  // Add priority class based on the priority level
  if (priorityInput === "High") {
      li.classList.add("high-priority");
  } else if (priorityInput === "Medium") {
      li.classList.add("medium-priority");
  } else {
      li.classList.add("low-priority");
  }

  // Display task information
  li.innerHTML = `${taskInput} <span>(${priorityInput})</span> <span>(Due: ${dueDateInput})</span>`;

  // Add delete button to each task
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => li.remove();
  li.appendChild(deleteBtn);

  // Append the task to the task list
  taskList.appendChild(li);

  // Clear the input fields
  document.getElementById("taskInput").value = "";
  document.getElementById("priorityInput").value = "Low";
  document.getElementById("dueDateInput").value = ""; // Clear date input
}
