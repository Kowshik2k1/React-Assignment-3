import React from "react";
import "./style.scss";

function Footer() {
  return (
    <div className="footer-wrap bg-black">
      <p className="copy-text">© 2025 Nike, Inc. All rights reserved</p>
      <ul className="footer-list site-container">
        <li>Guides</li>
        <li>
          <a href="https://www.eshopworld.com/shoppers/help/retailer/nike/terms-and-conditions-of-sale-en/">
            Terms of Sale
          </a>
        </li>
        <li>
          <a href="https://agreementservice.svs.nike.com/in/en_gb/rest/agreement?agreementType=termsOfUse&amp;uxId=com.nike&amp;country=IN&amp;language=en&amp;requestType=redirect">
            Terms of Use
          </a>
        </li>
        <li>
          <a href="https://agreementservice.svs.nike.com/sg/en_gb/rest/agreement?agreementType=privacyPolicy&amp;uxId=com.nike.unite&amp;country=SG&amp;language=en&amp;requestType=redirect">
            Nike Privacy Policy
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
