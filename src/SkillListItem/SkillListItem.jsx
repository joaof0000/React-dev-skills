import App from '../App'
import './SkillListItem.css'

export default function SkillListItem({ skill }) {
  return (
    <li className="SkillListItem">
      <p>{skill.name}</p>
      <p className="level">LEVEL {skill.level}</p>
    </li>
  )
}