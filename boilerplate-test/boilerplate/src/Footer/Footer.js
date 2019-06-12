import React from 'react';

import './footer.scss'

function Footer(props) {
  return (
    <div className="footer-wrapper center-content">
      <div className="lang-button" onClick={()=>props.switchLang('en')}>English</div>
      <div className="lang-button" onClick={()=>props.switchLang('jp')}>Japanese</div>
    </div>
  );
}

export default Footer;
