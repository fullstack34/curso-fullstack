                // dblclick    // function liClick     // []
export function useEvent(eventName, eventFunction, eventParams = []) {
  // window[liClick] = function liClick...
  window[eventFunction.name] = eventFunction;

          // ondblclick="liClick([])"
  return `on${eventName}="${eventFunction.name}(event, ${eventParams})"`;
}

// TaskItem.js
// useEvent('click', function clickLi() {}, 123);