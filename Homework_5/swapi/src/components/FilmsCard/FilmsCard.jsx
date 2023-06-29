import "./FilmsCard.scss";

export const FilmsCard = ({ films }) => {
  return (
    <div className="">
      <h3>{films.title}</h3>
      <div>
        <p>{films.opening_crawl}</p>
        <p>{films.director}</p>
        <p>{films.producer}</p>
        <p>{films.release_date}</p>
      </div>
    </div>
  );
};
