import "./Header.scss";
import logo from "../nhs-logo.png";

const Header = () => {
  return (
    <>
      <header>
        <div className="header-wrap page-width">
          <img src={logo} className="logo" />
          <span className="med-plan">MedPlan</span>
        </div>
      </header>
      <div class="banner">
        <div className="page-width">
            <h2>Important Advice</h2>
          <span>
            This tool should not be used in replacement of your doctor's advice.
            Please consult your doctor before using any medication.
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
