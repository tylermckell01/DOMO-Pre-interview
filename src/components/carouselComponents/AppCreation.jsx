import stack2 from "../../pictures/xp-components/product-feature-platform-architecture-2023-app-creation-2x.webp";
import advocate from "../../pictures/xp-components/app-creation-advocate.webp";

const AppCreation = () => {
  return (
    <div className="app-creation-container">
      <div className="top">
        <div className="left-section">
          <img src={stack2} alt="stack" />
        </div>
        <div className="right-section">
          <div className="title">App Creation</div>
          <div className="text">
            Create low-code and pro-code Business Apps that automate processes
            and insights and streamline decision-making.
          </div>
          <div className="button-title">CAPABILITIES</div>
          <div className="button-container">
            <div className="link">Low code tools for simple design</div>
            <div className="link">Pro-code tools for fast development</div>
            <div className="link">Task automation</div>
            <div className="link">App distribution</div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="text">
          <div className="quote">
            "Building the healthcare metrics quick start app let us pull in data
            points from systems and departments. In doing so, we found new ways
            that we and other health care organizations can use data to solve
            problems, explore new ideas, make better decisions, and learn what
            works best for our staff and the patients and families we serve.”
          </div>
          <div>
            <div className="name">Niranjani Radhakrishnan</div>
            <div className="title">
              Director of the Center for Information and Analytics, Regional One
              Health
            </div>
          </div>
        </div>
        <div className="image">
          <img src={advocate} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AppCreation;
