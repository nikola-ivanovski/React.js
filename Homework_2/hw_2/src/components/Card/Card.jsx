import "./Card.scss";

export const Card = (props) => {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <img src={props.imageUrl} alt="" />
    </div>
  );
};
