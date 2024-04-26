// src/components/Card.jsx
import React from "react";
import Link from "@docusaurus/Link";

const Card = ({ title, description, link, linkText }) => (
  <div className="card" onClick={() => window.open(link, "_blank").focus()}>
    <div className="card-content">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
    <Link
      className="card-link"
      to={link}
      onClick={(event) => event.stopPropagation()}
    >
      {linkText}
    </Link>
  </div>
);

const CardContainer = ({ children }) => (
  <div className="card-container">{children}</div>
);

export { Card, CardContainer };
