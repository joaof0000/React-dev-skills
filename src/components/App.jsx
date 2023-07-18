import React, { useState } from 'react';
import SkillList from './SkillList';

const initialSkills = [
  { name: "HTML", level: 5 },
  { name: "CSS", level: 3 },
  { name: "JavaScript", level: 4 },
  { name: "Python", level: 2 },
];

function App() {
  const [skills, setSkills] = useState(initialSkills);

  return (
    <div>
      <h1>React Dev Skills</h1>
      <SkillList skills={skills} />
    </div>
  );
}

export default App;
