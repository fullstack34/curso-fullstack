let todoList = document.getElementById('todo-list');

const liWithCheckbox = (task) => {
  return `
    <li class="${task.completed ? 'completed' : ''}">
      <input type="checkbox" ${task.completed ? 'checked' : ''}>
      ${task.todo}
    </li>
  `;
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