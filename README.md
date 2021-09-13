# react-typescript

**리액트와 타입스크립트 연습하기**
### cra with typescript
```
npx create-react-app "프로젝트명" --template typescript
```

### tsx
Typescript file writtern using JSX syntax<br />

### tsx 파일 만들어보기
```javascript
// Textfield.tsx
import React from 'react'

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string;
  ok?: boolean;
  i?: number;
  fn?: (bob: string) => string;
  person: Person;
}

const Textfield: React.FC<Props> = () => {
  return (
    <div>
      <input />
    </div>
  )
}

export default Textfield
```

`React.FC` : 해당 컴포넌트가 리액트의 함수형 컴포넌트라는 것을 명시<br />

### useState with typescript
```javascript
// ...

interface TextNode {
  text: string
}

const Textfield: React.FC<Props> = () => {
  const [count, setCount] = useState<TextNode>({ text: 'hello'})
  
  setCount({text: 'test'})

  // ...
}
```

### useRef with typescript
```javascript
// ...

const inputRef = useRef<HTMLInputElement>(null)
const divRef = useRef<HTMLDivElement>(null)

return (
  <div ref={divRef}>
    <input ref={inputRef}/>
  </div>
)
```

### useReducer with typescript
시작하기 전 [useReducer란](https://react.vlpt.us/basic/20-useReducer.html)<br/>
reducer는 현재 상태와 액션 객체를 파라미터로 받아와서 새로운 상태를 반환해주는 함수.
```javascript
function reducer(state, action) {
  // 새로운 상태를 만드는 로직
  // const nextState = ...
  return nextState;
}
```
reducer에서 반환하는 상태는 곧 컴포넌트가 지닐 새로운 상태<br/>

**`useReducer`의 사용법**
```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```
`state`는 우리가 앞으로 컴포넌트에서 사용할 수 있는 상태, `dispatch`는 액션을 발생시키는 함수
***
typescript와 같이 사용을 위해서는 state와 action의 type을 정의해주면 된다. 자세한 내용은 [코드](./src/ReducerExample.tsx) 참고