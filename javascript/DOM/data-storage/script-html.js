let todoList = document.getElementById('todo-list');

const liWithCheckbox = (task) => {
  return `
    <li class="${task.completed ? 'completed' : ''}">
      <input type="checkbox" ${task.completed ? 'checked' : ''}>
      ${task.todo}
    </li>
  `;
}

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
    todoList.innerHTML += liWithCheckbox(task);
  }

  let lis = document.getElementsByTagName('li');

  for (let li of lis) {
    li.addEventListener('dblclick', event => {
      let isCompleted = event.target.classList.contains('completed');
      let input = event.target.querySelector('input');
      
      input.checked = !input.checked;
      if(isCompleted) {
        event.target.classList.remove('completed')
      } else {
        event.target.classList.add('completed')
      }
    })
  }

})