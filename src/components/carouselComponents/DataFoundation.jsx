import stack4 from "../../pictures/xp-components/product-feature-platform-architecture-2023-data-foundation-2x.webp";
const DataFoundation = () => {
  return (
    <div className="data-foundation-container">
      <div className="left-section">
        <img src={stack4} alt="stack" />
      </div>
      <div className="right-section">
        <div className="title">Domo Foundation</div>
        <div className="text">
          Our secure data foundation provides the infrastructure, data
          integration, and governance that underpins your data experiences.
        </div>
        <div className="button-title">Capabilities</div>
        <div className="button-container">
          <div className="link">Data Integration From Any Source</div>
          <div className="link">Data Governance</div>
          <div className="link">Cloud Data Warehouse Integration</div>
          <div className="link">Data Writeback</div>
          <div className="link">Drag and Drop ETL tools</div>
          <div className="link">Security</div>
        </div>
      </div>
    </div>
  );
};

export default DataFoundation;
