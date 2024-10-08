import logo from "../../pictures/taylormade2.png";
import headShot from "../../pictures/testimonials-component/download-1.jpg";

const Taylormade = () => {
  return (
    <div>
      <div className="title big">
        <img src={logo} alt="logo" />
      </div>
      <div className="quote">
        "We use Domo through the entire organization, from the people that build
        the work in the warehouse all the way up to our executives.""
      </div>
      <div className="head-shot">
        <img src={headShot} alt="head shot" />
      </div>
      <div className="name">David Damitz</div>
      <div className="title">
        Global Business Intelligence Team Lead, TaylorMade Golf
      </div>
    </div>
  );
};

export default Taylormade;
