import React from "react";
import "./Breadcrumb.css";
import { Link } from "react-router-dom";

function Breadcrumb() {
  return (
    <div className="breadcrumb">
      <div className="breadcrumb-container">

        <span>Home</span>

       <Link to="/" className="h">
  <span className="breadcrumb-arrow">›</span>
</Link>

        <span>Shop</span>

       <Link to="./Shop" className="h"> <span className="breadcrumb-arrow">›</span></Link>

        <span className="breadcrumb-current">
          Asgaard sofa
        </span>

      </div>
    </div>
  );
}

export default Breadcrumb;