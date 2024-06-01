import TaskList from "./TaskList.js";

export default function App() {
  
  let url = 'https://dummyjson.com/todos';

  return fetch(url)
  .then(response => response.json())
  .then(json =>  {
    console.log(json.todos);
    return TaskList({tasks: json.todos})
  })

}