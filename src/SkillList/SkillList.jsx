import SkillListItem from '../SkillListItem/SkillListItem'

export default function SkillList({ skills }) {
  return (
    <ul>
      {skills.map((s, idx) => (
        <SkillListItem key={idx} skill={s} />
      ))}
    </ul>
  )
}