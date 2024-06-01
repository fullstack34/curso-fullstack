
import { useEvent } from "../hooks.js";

export default function TaskItem (props) {

  let liClick = useEvent('dblclick',  function liClick(event) {
      let isCompleted = event.target.classList.contains('completed');
      let input = event.target.querySelector('input');
      
      input.checked = !input.checked;
      if(isCompleted) {
        event.target.classList.remove('completed')
      } else {
        event.target.classList.add('completed')
      }
  });
  
  return `
    <li ${liClick} class="${props.completed ? 'completed' : ''}">
      <input type="checkbox" ${props.completed ? 'checked' : ''}>
      ${props.todo}
    </li>
  `;
}