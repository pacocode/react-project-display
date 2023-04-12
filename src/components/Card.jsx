const Card = ({ skillSet }) => {
  return (
    <>
      <div className="card-container">
        <h3>{skillSet.skill}</h3>
        <p>{skillSet.description}</p>
      </div>
    </>
  );
};

export default Card;
