document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = e.target['new-task-description'].value;
    buildToDo(task);
  });
});

function buildToDo(task) {
  const li = document.createElement('li');
  li.textContent = task;
  document.getElementById('tasks').appendChild(li);
}
