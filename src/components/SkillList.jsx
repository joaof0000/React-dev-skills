import React from 'react';
import "./SkillListItem.css";

function SkillListItem({ skill }) {
  return (
    <li>
      {skill.name} - Level {skill.level}
    </li>
  );
}

export default SkillListItem;