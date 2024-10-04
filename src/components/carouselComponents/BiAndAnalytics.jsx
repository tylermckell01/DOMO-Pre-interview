import stack3 from "../../pictures/xp-components/product-feature-platform-architecture-2023-bi-analytics-2x.webp";
import advocate from "../../pictures/xp-components/bi-analytics-advocate.webp";

const BiAndAnalytics = () => {
  return (
    <div className="bi-analytics-container">
      <div className="top">
        <div className="left-section">
          <img src={stack3} alt="stack" />
        </div>
        <div className="right-section">
          <div className="title">BI and Analytics</div>
          <div className="text">
            Our intuitive custom data views and reporting capabilities enable
            better, faster decision-making for all kinds of users.
          </div>
          <div className="button-title">CAPABILITIES</div>
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
      <div className="bottom">
        <div className="text">
          <div className="quote">
            "I think the best parts of our day are spent in Domo, exploring
            data. Finding new ways to understand the data and then visualizing
            the data so that we can add value across the organization."
          </div>
          <div>
            <div className="name">Dominic Blosil</div>
            <div className="title">CFO, Traeger</div>
          </div>
        </div>
        <div className="image">
          <img src={advocate} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BiAndAnalytics;
