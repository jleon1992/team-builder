import React from 'react'

export const Form = (props) => {
    const {values, onChange, onSubmit} = props
    return (
        <div>
            <form className='formContainer' onSubmit={onSubmit}>
                <h2>Add Team Member</h2>
                <button>submit</button>
                <label>
                    Name:<input 
                    type='text'
                    name='username'
                    value={values.username}
                    onChange={onChange}
                    />
                </label>
                <label>
                    Email:<input    
                    type='text' 
                    name='email'
                    value={values.email}
                    onChange={onChange}

                    />
                </label>
                <label>
                    Role:<select
                    name='role'
                    values={values.role}
                    onChange={onChange}>
                        <option value=''>--- Select ---</option>
                        <option value='frontend'>Frontend</option>
                        <option value='backend'>Backend</option>
                        <option value='designer'>Designer</option>
                    </select>
                </label>
                
            </form>
            
        </div>
    )
}
export default Form