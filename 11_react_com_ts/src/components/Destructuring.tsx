interface Props {
  title: string;
  content: string;
  commentQtd: number;
  tags: string[];
}

const Destructuring = ({commentQtd, content, tags, title}: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
      <p>Quantidade de comentarios: {commentQtd}</p>
      {
        tags.map((tag, index) => (
          <ul key={index}>
            <li>{tag}</li>
          </ul>
        ))
      }
    </div>
  )
}

export default Destructuring