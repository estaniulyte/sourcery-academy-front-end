import React from "react";
import PropTypes from "prop-types";
import { useLocation, NavLink } from "react-router-dom";

import "./breadcrumbs.scss";

const Breadcrumbs = ({ lastLevel }) => {
  const location = useLocation();
  const locationPathname = location.pathname;
  const pathnameArr = locationPathname.split("/");
  const secondLevel = pathnameArr[1];
  const linkSecondlvl = "/" + secondLevel.toLowerCase();

  return (
    <nav className="breadcrumbs">
      <NavLink to="/" className="breadcrumbs__link">
        <span>Dashboard</span>
      </NavLink>
      <NavLink to={linkSecondlvl} className="breadcrumbs__link">
        <span>{secondLevel}</span>
      </NavLink>
      {lastLevel && (
        <NavLink to={locationPathname} className="breadcrumbs__link">
          <span>{lastLevel}</span>
        </NavLink>
      )}
    </nav>
  );
};

Breadcrumbs.propTypes = {
  lastLevel: PropTypes.string,
};

Breadcrumbs.defaultProps = {
  lastLevel: null,
};

export default Breadcrumbs;
