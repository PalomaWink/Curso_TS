interface Props {
  name: string
  age: number
}

const SecondComponent = (props: Props) => {
  return (
    <div>
      <h1>Segundo componente com props</h1>
      <p>{props.age}</p>
      <p>{props.name}</p>
    </div>
  )
}

export default SecondComponent