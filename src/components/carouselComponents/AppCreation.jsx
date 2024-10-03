import stack2 from "../../pictures/xp-components/product-feature-platform-architecture-2023-app-creation-2x.webp";

const AppCreation = () => {
  return (
    <div className="app-creation-container">
      <div className="left-section">
        <img src={stack2} alt="stack" />
      </div>
      <div className="right-section">
        <div className="title">App Creation</div>
        <div className="text">
          Create low-code and pro-code Business Apps that automate processes and
          insights and streamline decision-making.
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
  );
};

export default AppCreation;
