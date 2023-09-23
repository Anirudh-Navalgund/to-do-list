
let todolist = [];

render_todo_list();

function render_todo_list() {
  let todolistHTML = '';

  for (let i=0; i<todolist.length; i++) {
    let todoObject = todolist[i];
    //let name = todoObject.name;
    //let dueDate = todoObject.dueDate;
    let { name, dueDate } = todoObject; //shortcut for above 2 lines
    let html = `
      <div class="todo-name-div"> &#8226 ${name}</div>
      <div class="todo-date-div">${dueDate}</div>
        <button class="delete-button" onclick="
          todolist.splice(${i}, 1),
          render_todo_list()">
          Delete
        </button>`;
    todolistHTML = todolistHTML + html;
  }
  document.querySelector('.js-todolist').innerHTML = todolistHTML;
};

function addTodo() {
  let inputElement = document.querySelector('.todo-input');
  let name = inputElement.value;

  let dueDateElement = document.querySelector('.date-input');
  let dueDate = dueDateElement.value;

  todolist.push({
    name: name,
    dueDate: dueDate
  });
  inputElement.value = '';

  render_todo_list();
}