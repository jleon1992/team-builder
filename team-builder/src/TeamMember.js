import React from 'react'

export const TeamMember = (props) => {
    const {details} = props
    return (
        <div className="card">
            <h2>UserName: {details.userName}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
        </div>
    )
}
 export default TeamMember
