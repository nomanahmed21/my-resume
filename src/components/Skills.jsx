import React, { useState } from "react";
import "./Skills.css";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = {
    Frontend: [
      { name: "HTML", level: 90, code: "<p>Hello, World!</p>" },
      { name: "CSS", level: 85, code: "body { background-color: blue; }" },
      { name: "JavaScript", level: 80, code: "console.log('Hello World');" },
      { name: "React", level: 75, code: "const App = () => <h1>Hello</h1>;" },
    ],
    Backend: [
      { name: "Node.js", level: 80, code: "const express = require('express');" },
      { name: "Express", level: 75, code: "app.get('/', (req, res) => res.send('Hello'));" },
    ],
    DataBase: [
      { name: "MongoDB", level: 70, code: "db.collection.find({});" },
    ],
  };

  return (
    <div className="skills-container">
      {Object.keys(skills).map((category) => (
        <div key={category} className="skill-category">
          <h3>{category}</h3>
          <div className="skill-list">
            {skills[category].map((skill) => (
              <div key={skill.name} className="skill-item" onClick={() => setSelectedSkill(skill)}>
                <span>{skill.name}</span>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      {selectedSkill && (
        <div className="code-display">
          <h4>Code for {selectedSkill.name}</h4>
          <pre>{selectedSkill.code}</pre>
        </div>
      )}
  <div className="click">click on the skills </div>
    </div>
  );
};

export default Skills;

