const elNumber = document.getElementById("number");
const btnIncrement = document.getElementById("increment");
const btnDecrement = document.getElementById("decrement");

// 액션 타입 정의
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// 액션 객체를 만들어주는 액션 생성 함수
const increment = diff => ({ type: INCREMENT, diff: diff });
const decrement = () => ({ type: DECREMENT });

// 초기값을 설정
const initialState = {
  number: 0
};

/* 
  리듀서 함수
  state와 action을 파라미터로 받아온다
  그리고 그에 따라 다음 상태를 정의 한 다음 반환해준다.
*/

// 파라미터의 기본값 지정
const counter = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case INCREMENT:
      return {
        number: state.number + action.diff
      };
    case DECREMENT:
      return {
        number: state.number - 1
      };
    default:
      return state;
  }
};

// createStore에 리듀서 함수를 넣어서 호출한다.
const { createStore } = Redux;
const store = createStore(counter);

// 상태가 변경 될 때 마다 호출시킬 Listener 함수를 만든다.
const render = () => {
  elNumber.innerText = store.getState().number;
  console.log("실행");
};

// 스토어에 구독하고, 변화가 감지된다면, render함수를 실행한다.
store.subscribe(render);

// 초기렌더링을 위하여 직접 실행시켜준다.
render();

// 버튼에 이벤트를 추가해준다.
// 스토어에 변화를 일으키라고 할 때에는 dispatch 함수에 액션 객체를 넣어서 호출한다.
btnIncrement.addEventListener("click", () => {
  store.dispatch(increment(25));
});

btnDecrement.addEventListener("click", () => {
  store.dispatch(decrement());
});
