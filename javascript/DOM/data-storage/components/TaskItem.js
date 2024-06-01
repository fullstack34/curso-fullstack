
import { useEvent } from "../hooks.js";

export default function TaskItem (props) {

  let liClick = useEvent('dblclick',  function liClick(event) {
    console.log(event.target);
  });
  
  return `
    <li ${liClick} class="${props.completed ? 'completed' : ''}">
      <input type="checkbox" ${props.completed ? 'checked' : ''}>
      ${props.todo}
    </li>
  `;
}