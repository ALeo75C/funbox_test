function Card(props) {
  const message = props.taste;

  let className = "";

  let footer = (
    <footer>
      Чего сидишь? Порадуй котэ, <span>купи.</span>
    </footer>
  );
  if (props.isActive) {
    className = "active";
    footer = <footer>{props.taste}</footer>;
  } else {
    className = props.inStock ? "" : "inactive";
  }
  if (!props.inStock) {
    footer = (
      <footer className="yellow">Печалька, {props.title} закончился.</footer>
    );
  }

  return (
    <div
      className={"Card " + className}
      onClick={() => props.onClick(props.id)}
    >
      <div className="CardBody">
        <div className="header">
          <p>Сказочное заморское яство</p>
          <p>Котэ не одобряет?</p>
        </div>
        <h1>Нямушка</h1>
        <h2>{props.title}</h2>
        <p>
          <span>{props.count}</span> порций
        </p>
        <p>
          <span>{props.present}</span> в подарок
        </p>
        <div className="weight">
          <p>{props.weight}</p>
          <span>кг</span>
        </div>
        <div className="photo"></div>
        <div className="null"></div>
      </div>
      {footer}
    </div>
  );
}

export default Card;
