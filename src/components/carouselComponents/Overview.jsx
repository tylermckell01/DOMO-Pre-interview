import stack1 from "../../pictures/xp-components/product-feature-platform-architecture-2023-data-experience-platform-2x.webp";

const Overview = () => {
  return (
    <div className="overview-container">
      <div className="left-section">
        <img src={stack1} alt="stack" />
      </div>
      <div className="right-section">
        <div className="title">Domo Data Experience Platform</div>
        <div className="text">
          Put data to work for everyone with AI-powered experiences, intuitive
          analysis, and a secure foundation that connects your data systems.
        </div>
        <div className="button-title">PLATFORM OUTPUTS</div>
        <div className="button-container">
          <div className="link">icon Business Apps</div>
          <div className="link">icon Self-serve Reporting</div>
          <div className="link">icon Interactive Dashboards</div>
          <div className="link">icon Imbedded Analytics</div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
