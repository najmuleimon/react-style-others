import { useState } from 'react'

const Todo = () => {
    const [employees, setEmployees] = useState([]);

    const handleForm = (e) => {
        e.preventDefault();
        const employee = {
            name: e.target.empName.value,
            designation: e.target.designation.value,
            date: e.target.date.value
        }
        setEmployees([...employees, employee])
    }
    
    return (
        <>
            <form onSubmit={handleForm}>
                <input type="text" placeholder='name' name="empName"/>
                <input type="text" placeholder='designation' name="designation"/>
                <input type="date" placeholder='date' name="date"/>
                <button type='submit'>Submit</button>
            </form>
            <ul>
                {
                    employees.length > 0 ? employees.map((item, i) => (<li key={i}>{item.date}</li>)) : "No Items to show"
                }
            </ul>
        </>
    )
}

export default Todo