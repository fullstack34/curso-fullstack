import TaskList from "./TaskList.js";
import TodoForm from './TodoForm.js';

export default function App() {
  
  let url = 'https://dummyjson.com/todos';

  return fetch(url)
  .then(response => response.json())
  .then(json =>  {
    console.log(json.todos);
    return `
      ${TodoForm()}
      <hr>
      ${TaskList({tasks: json.todos})}
    `;
  })

}