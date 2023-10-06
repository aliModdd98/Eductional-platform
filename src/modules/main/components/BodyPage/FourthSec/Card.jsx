
function Card({ cources }) {
 

  return (
    <div className="cources">
      {cources.map((e, index) => (
        <div
          className="card"
          key={index}
              >
          <div className="image">
            <img src={e.src} alt="no" />
          </div>
          <div className="title">
            <div className="f1">
              <span>{e.icon1}</span>
              <h5>{e.num}</h5>
            </div>
            <div className="rate">
              <span>{e.icon2}</span>
              {e.rate}
            </div>
          </div>
          <div className="desc">
            <h3>{e.title}</h3>
            {e.desc}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;