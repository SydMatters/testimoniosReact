import React from "react";
import '../stylesheets/heroButton.css';

export function HeroButton(props) {
  return (
  <a href={`#${props.name}`} className="hero-button">{`${props.name}`}
  </a>
    );
}
