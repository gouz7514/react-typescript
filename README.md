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