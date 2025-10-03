const todoInput = document.getElementById('todo-input');
const dateInput = document.getElementById('date-input');
const addBtn = document.getElementById('add-btn');
const clearAllBtn = document.getElementById('clear-all');
const todoList = document.getElementById('todo-list');

let todos = [];

function renderTodos() {
  todoList.innerHTML = '';

  if (todos.length === 0) {
    todoList.innerHTML = `<tr><td colspan="4" class="empty">No task found</td></tr>`;
    return;
  }

  todos.forEach((todo, index) => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${todo.text}</td>
      <td>${todo.date}</td>
      <td>${todo.done ? "Done" : "Pending"}</td>
      <td>
        <button onclick="toggleStatus(${index})">Toggle</button>
        <button onclick="deleteTodo(${index})">Delete</button>
      </td>
    `;

    todoList.appendChild(row);
  });
}

function addTodo() {
  const text = todoInput.value.trim();
  const date = dateInput.value;

  if (text === '' || date === '') {
    alert("Isi tugas dan tanggal terlebih dahulu!");
    return;
  }

  todos.push({ text, date, done: false });
  todoInput.value = '';
  dateInput.value = '';
  renderTodos();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

function toggleStatus(index) {
  todos[index].done = !todos[index].done;
  renderTodos();
}

addBtn.addEventListener('click', addTodo);
clearAllBtn.addEventListener('click', () => {
  if (confirm("Yakin mau hapus semua?")) {
    todos = [];
    renderTodos();
  }
});

renderTodos();
