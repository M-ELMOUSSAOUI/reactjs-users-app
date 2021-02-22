import React,{useState} from 'react'

export default function Form(props) {
    //================ States ================
    const [person, setPerson] = useState({
        fName: '',
        lName: '',
        age:'' ,
        about: ''
    })
    const clearInputs = ()=>{
        setPerson({
            fName: '',
            lName: '',
            age:'' ,
            about: ''
        })
    }
    return (
        <form onSubmit={(ev)=>{
            ev.preventDefault()
            clearInputs()
            props.onSubmit(person)
        }}>
        <div className="mb-3">
          <label className="form-label"> First name </label>{" "}
          <input
          
            value={person.fName}
            onChange={(ev) => setPerson({ ...person, fName: ev.target.value })}
            className="form-control"
            type="text"
            placeholder="First name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label"> Last name </label>{" "}
          <input  value={person.lName}  onChange={(ev) => setPerson({ ...person, lName: ev.target.value })} className="form-control" type="text" placeholder="Last name" />
        </div>
        <div className="mb-3">
          <label className="form-label"> Age </label>{" "}
          <input value={person.age} onChange={(ev) => setPerson({ ...person,age: ev.target.value })} className="form-control" type="text" placeholder="Age" />
        </div>
        <div className="mb-3">
          <label className="form-label"> About </label>
          <input value={person.about} onChange={(ev) => setPerson({ ...person, about: ev.target.value })} className="form-control" stype="text" placeholder="About" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <button disabled={!person.fName || !person.lName || !person.age || !person.about} style={{ width: "120px" }} className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    )
}
