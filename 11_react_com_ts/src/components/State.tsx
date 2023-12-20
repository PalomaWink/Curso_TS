import {useState, ChangeEvent} from 'react'


const State = () => {
  const [text, setText] = useState<string | null>('testando o hook')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  };

  return (
    <div>
      <p>O texto e: {text}</p>
      <input type='text' onChange={handleChange}/>
    </div>
  )
}

export default State