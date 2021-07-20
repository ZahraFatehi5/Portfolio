import React, { Component } from "react";
import Lang from "./lang";
class Language extends Component {
  state = {
    Language: [
      { lang: "Persian", value: 100 },
      { lang: "English", value: 60 },
    ],
  };
  render() {
    return (
      <div className="progress-grid">
        {this.state.Language.map((lang) => (
          <Lang lang={lang} />
        ))}
      </div>
    );
  }
}

export default Language;
