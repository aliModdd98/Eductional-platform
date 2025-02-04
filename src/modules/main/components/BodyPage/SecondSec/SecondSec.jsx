import img from "./../../../../../assets/girl.webp";
import "./SecondSecStyle.css";
import Description from "./Description.jsx";
function SecondSec() {
  const title2 = "Become an Instructor";
  return (
    <div className="sec-container">
      <Description title={title2} />
      <button className="btn1">GET STARTED</button>
      <div className="right-sec">
        <img src={img} />
      </div>
    </div>
  );
}

export default SecondSec;
