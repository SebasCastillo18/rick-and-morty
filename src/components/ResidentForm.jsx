import React from 'react'
import "./styles/ResidentForm.css"

const ResidentForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" id='idLocation' placeholder='type a location id' />
            <button className="resident_button">Search</button>

        </form>
    )
}

export default ResidentForm
