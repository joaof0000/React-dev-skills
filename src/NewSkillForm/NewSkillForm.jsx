import React, { useState } from 'react';
import './NewSkillForm.css';

const NewSkillForm = (props) => {
  const [skill, setSkill] = useState({
    name: '',
    level: 3,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSkill((prevSkill) => ({ ...prevSkill, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addNewSkill(skill);
    setSkill({ name: '', level: 3 });
  };

  return (
    <form className="NewSkillForm" onSubmit={handleSubmit}>
      <label>Skill</label>
      <input
        type="text"
        name="name"
        value={skill.name}
        placeholder="Enter name..."
        onChange={handleChange}
      />
      <label>Level</label>
      <select id="levels" name="level" onChange={handleChange} value={skill.level}>
        {[1, 2, 3, 4, 5].map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
      <button type="submit">ADD SKILL</button>
    </form>
  );
};

export default NewSkillForm;
