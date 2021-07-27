import React, { Component } from "react";
import Lang from "./lang";
class Language extends Component {
  Language = [
    { lang: "Persian", value: 100 },
    { lang: "English", value: 60 },
  ];
  render() {
    return (
      <div className="progress-grid">
        {this.Language.map((lang, index) => (
          <Lang lang={lang} key={index} />
        ))}
      </div>
    );
  }
}

export default Language;
