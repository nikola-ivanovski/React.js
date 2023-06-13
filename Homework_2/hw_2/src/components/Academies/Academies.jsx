import "./Academies.scss";

export const Academy = ({ academies, name }) => {
  return (
    <div>
      <h2>{name}</h2>
      <div className="academies">
        {academies.map((academy) => (
          <div key={academy.id}>
            <h3>{academy.name}</h3>
            <p>{academy.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
