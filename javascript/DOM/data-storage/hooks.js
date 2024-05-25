                        // click    // clickLi     // 123
export function useEvent(eventName, eventFunction, eventParams = []) {
          // clickLi => window['clickLi'] = function ....
  window[eventFunction.name] = eventFunction;

          // onclick="clickLi(123)"
  return `on${eventName}="${eventFunction.name}(${eventParams})"`;
}

// TaskItem.js
// useEvent('click', function clickLi() {}, 123);