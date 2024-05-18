let todoList = document.getElementById('todo-list');

const addTaskHtml = (task) => {
  let li = document.createElement('li');
  let inputCheckbox = document.createElement('input');
  inputCheckbox.type = 'checkbox';
  inputCheckbox.checked = task.completed

  if(task.completed) {
    li.style.textDecoration = "line-through"
  }
  
  inputCheckbox.addEventListener('change', event => {
    if(event.target.checked){
      li.style.textDecoration = "line-through";
    }
    else {
      li.style.textDecoration = "";
    }
  })

  li.addEventListener('dblclick', event => {
    if(!li.style.textDecoration) {
      li.style.textDecoration = "line-through";
    } else {
      li.style.textDecoration = "";
    }
    inputCheckbox.checked = !inputCheckbox.checked;
  });
  
  li.textContent = task.todo;
  li.prepend(inputCheckbox);
  todoList.append(li);
}

let url = 'https://dummyjson.com/todos';

let request = fetch(url)
.then(response => response.json())
.then(json =>  {
  for(let task of json.todos) {
    addTaskHtml(task);
  }
})