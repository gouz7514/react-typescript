import React, { useState, useRef } from 'react'

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
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextNode {
  text: string
}

const Textfield: React.FC<Props> = ({ handleChange }) => {
  // useState
  const [count, setCount] = useState<TextNode>({ text: 'hello'})

  setCount({text: 'test'})

  // useRef
  const inputRef = useRef<HTMLInputElement>(null)
  const divRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={divRef}>
      <input ref={inputRef} onChange={handleChange}/>
    </div>
  )
}

export default Textfield
