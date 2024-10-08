import logo from "../../pictures/daltile.png";
import headShot from "../../pictures/testimonials-component/download-2.jpg";

const Daltile = () => {
  return (
    <div>
      <div className="title big">
        <img src={logo} alt="" />
      </div>
      <div className="quote">
        "What I love about Domo is that it's really democratizing data across
        the enterprise"
      </div>
      <div className="head-shot">
        <img src={headShot} alt="head shot" />
      </div>
      <div className="name">Josh Stan</div>
      <div className="title">
        Director of Corporate Development & Reporting, Dal-Tile
      </div>
    </div>
  );
};

export default Daltile;
