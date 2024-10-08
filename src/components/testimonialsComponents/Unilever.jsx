import logo from "../../pictures/unilever logo.webp";
import headShot from "../../pictures/testimonials-component/download.jpg";

const Unilever = () => {
  return (
    <div>
      <div className="title ">
        <img src={logo} alt="logo" />
      </div>
      <div className="quote">
        "We've seen the game-changing impact that immediate access to great data
        can have on teams and organizations"
      </div>
      <div className="head-shot">
        <img src={headShot} alt="head shot" />
      </div>
      <div className="name">Alessandro Ventura</div>
      <div className="title">Chief Information Officer, Unilever</div>
    </div>
  );
};

export default Unilever;
