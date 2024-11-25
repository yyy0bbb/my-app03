import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="header">
      <h1>
        {/* // {" "} */}
        <Link to="/">토익 영단어 (고급)</Link>
      </h1>
      <div className="menu">
        <Link className="link">단어추가</Link>
        <Link className="link">day추가</Link>
      </div>
    </div>
  );
}

export default Header;
