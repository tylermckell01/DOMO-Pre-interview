import stack3 from "../../pictures/xp-components/product-feature-platform-architecture-2023-bi-analytics-2x.webp";

const BiAndAnalytics = () => {
  return (
    <div className="bi-analytics-container">
      <div className="left-section">
        <img src={stack3} alt="stack" />
      </div>
      <div className="right-section">
        <div className="title">BI and Analytics</div>
        <div className="text">
          Our intuitive custom data views and reporting capabilities enable
          better, faster decision-making for all kinds of users.
        </div>
        <div className="button-title">Capabilities</div>
        <div className="button-container">
          <div className="link">Advanced Visualizations</div>
          <div className="link">AI and Data Science</div>
          <div className="link">Alerts</div>
          <div className="link">Collaboration</div>
          <div className="link">Data Storytelling</div>
          <div className="link">Mobile</div>
          <div className="link">Dashboard Interactivity & Customization</div>
        </div>
      </div>
    </div>
  );
};

export default BiAndAnalytics;
