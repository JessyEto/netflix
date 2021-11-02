import films from '../assets/films.json';

const Section = (props) => {
  const tab = [];
  for (let i = 0; i < films[props.index].images.length; i++) {
    tab.push(<img key={i} src={films[props.index].images[i]} alt="" />);
  }

  return (
    <div className="section">
      <div className="category">
        <h2>{films[props.index].category}</h2>
      </div>
      <div className="section-img">{tab}</div>
    </div>
  );
};

export default Section;
