import React, {useState} from 'react';
import TeamMember from './TeamMember'
import './App.css';
import Form from './Form'
import {v4 as uuid} from 'uuid'

const teamMemberList = [
  {
  userName: 'jfinity',
  email: 'jfinity1992@gmail.com',
  role: 'backend',
},
]

function App() {
  const [teamMembers, setTeamMembers] = useState(teamMemberList)
  const [formValues, setFormValues] = useState({
    username:'',
    email:'',
    role:'',
  })
  // function onChange(evt){

  // }
  const onChange = evt => {
    const {name, value} = evt.target
    setFormValues({
      ...formValues,
      [name]: value,
    })
   
  }

  const onSubmit = evt =>{
    evt.preventDefault()
    const newTeamMember = {...formValues}
    if(!formValues.username || !formValues.email || !formValues.role ){
      return
    }
    setTeamMembers(teamMembers => [...teamMembers, newTeamMember])
    
  }


  return (
    <div className="App">
      <h1>Team Members</h1>
      <Form
      values={formValues}
      onChange={onChange}
      onSubmit={onSubmit}
      />
      {
        teamMembers.map(teamMember=>{
          return(
            <TeamMember details={teamMember}  />
          )
        })
      }
    </div>
  );
}

export default App;
