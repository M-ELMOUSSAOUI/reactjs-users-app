import "./App.css";
import React, { useState } from "react";
import Result from './Components/Results'
import Form from './Components/Form'

function App() {
  const [persons, setPersons] = useState([
    {
      fName: 'Mohamed',
      lName: 'EL-MOUSSAOUI',
      age: 25,
      about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
    }
  ])


  const addUser = (user) => {
    setPersons(prev => [...prev, user])
  }

  const removeUser = (ev,user)=>{
    ev.preventDefault()
    var newArr =  persons.filter(p => p.fName!=user.fName) 
    setPersons(newArr) 
  }

  return (
    <div className="container cont">
      <Form onSubmit={(person)=>addUser(person)} />
      <div className="results-container">
        {
          persons.map((p,index) => (
            <Result user={p} key={index} delete={(ev,user)=>removeUser(ev,user)} />
          ))
        }

      </div>
    </div>
  );
}

export default App;
