import React, { Component } from "react";
import Info from "./info";

class Infos extends Component {
  Skills = [
    { skill: "CSS", value: 80 },
    { skill: "HTML", value: 85 },
    { skill: "JavaScript", value: 70 },
    { skill: "React", value: 20 },
    { skill: "C++", value: 60 },
    { skill: "Python", value: 70 },
  ];

  render() {
    return (
      <div>
        {this.Skills.map((skill, index) => (
          <Info skill={skill} key={index} />
        ))}
      </div>
    );
  }
}

export default Infos;
