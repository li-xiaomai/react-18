export default function Book({ title, img, author, id }) {
  const clickHandler = (e, param) => {
    console.log(e, e.target, param);
  };
  const complexExample = (id) => {
    console.log(id);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        // console.log(title);
      }}
    >
      <img src={img} alt={title} />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4 onClick={(e) => clickHandler(e, author)}>{author}</h4>
      <button type="button" onClick={clickHandler}>
        reference example
      </button>
      <button type="button" onClick={() => complexExample(id)}>
        more complex example
      </button>
    </article>
  );
}
