import React from 'react'

export default function Results(props) {
    return (
        <div className="card card1" >
            <i onClick={(ev)=>props.delete(ev,props.user)} className='bx bx-x-circle close-btn' ></i>
            <div className="card-body">
                <h5 className="card-title"> {props.user.fName} {props.user.lName}</h5>
                <h6 className="card-subtitle mb-2 text-muted"> {props.user.age} Years old </h6>
                <p className="card-text"> {props.user.about}</p>
            </div>
        </div>
    )
}
