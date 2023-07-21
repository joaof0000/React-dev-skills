import './NewSkillForm.css'
import { useState } from 'react'

export default function NewSkillForm(props) {
  const [skill, setSkill] = useState({
    name: '',
    level: 3
  })

  function handleChange(e) {
    console.log(e.target.value)
    setSkill({ ...skill, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    // this ensures tha the form does not trigger a full-page refresh when the button is clicked
    e.preventDefault()
    props.addNewSkill(skill)

    setSkill({
      name: '',
      level: 3
    })
  }

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
      <select
        id="levels"
        name="level"
        onChange={handleChange}
        value={skill.level}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <button>ADD SKILL</button>
    </form>
  )
}