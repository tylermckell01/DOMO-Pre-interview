import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandPointUp,
  faChartSimple,
  faTableCellsRowLock,
} from "@fortawesome/free-solid-svg-icons";
import { faAppStoreIos } from "@fortawesome/free-brands-svg-icons";

import stack1 from "../../pictures/xp-components/product-feature-platform-architecture-2023-data-experience-platform-2x.webp";
import advocate from "../../pictures/xp-components/overview-advocate.webp";

const Overview = () => {
  return (
    <div className="overview-container">
      <div className="top">
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
            <div className="link">
              <div>
                <FontAwesomeIcon icon={faAppStoreIos} className="icon" />
              </div>
              <div>Business Apps</div>
            </div>
            <div className="link">
              <div>
                <FontAwesomeIcon icon={faHandPointUp} className="icon" />
              </div>
              <div>Self-serve Reporting</div>
            </div>
            <div className="link">
              <div>
                <FontAwesomeIcon icon={faChartSimple} className="icon" />
              </div>
              <div>Interactive Dashboards</div>
            </div>
            <div className="link">
              <div>
                <FontAwesomeIcon icon={faTableCellsRowLock} className="icon" />
              </div>
              <div>Imbedded Analytics</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="text">
          <div className="quote">
            “Domo allows us to react and pivot on a daily basis. We can see what
            is happening in real time & make changes within a week, which is
            unheard of for us. The opportunity to iterate and make quick
            decisions is very powerful.”
          </div>
          <div className="name">Amber McMillan</div>
          <div className="title">
            Senior Vice President of Fitness and Weight Loss
          </div>
        </div>
        <div>
          <img src={advocate} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Overview;
