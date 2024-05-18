let todoList = document.getElementById('todo-list');

const addTaskHtml = (value) => {
  let li = document.createElement('li');
  let inputCheckbox = document.createElement('input');
  inputCheckbox.type = 'checkbox';

  li.addEventListener('dblclick', event => {
    if(!li.style.textDecoration) {
      li.style.textDecoration = "line-through";
    } else {
      li.style.textDecoration = "";
    }
    inputCheckbox.checked = !inputCheckbox.checked;
  });
  
  li.textContent = value;
  li.prepend(inputCheckbox);
  todoList.append(li);
}

let url = 'https://dummyjson.com/todos';

let request = fetch(url)
.then(response => response.json())
.then(json =>  {
  for(let task of json.todos) {
    addTaskHtml(task.todo);
  }
})