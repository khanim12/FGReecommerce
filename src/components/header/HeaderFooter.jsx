import logo from "../../assets/images/logo 1.png";
import "./Header.css";
import instagram from "../../assets/images/instagram 1.png";
import facebook from "../../assets/images/facebook 1.png";
function HeaderFooter() {
  return (
    <div>
      <div className="footer">
        <div className="foot-left">
          <img src={logo} alt="" />
        </div>
        <div className="foot-center">
          <ul>
            <li>FOLLOW US</li>
            <li>
              <img className="social-img" src={instagram} alt="" />
            </li>
            <li>
              <img className="social-img" src={facebook} alt="" />
            </li>
          </ul>
        </div>
        <div className="foot-right">
          <p className="text-white	text-sm font-normal	">
            © 2023 F & R cycle inc. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeaderFooter;
