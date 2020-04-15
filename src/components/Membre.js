import React, {Fragment} from 'react'

const Membre = ({ nom, age, children }) => {
    return (
        (
            <React.Fragment>
                <h2 style={{
                backgroundColor: age < 10 ? 'yellow' : 'purple', 
                color:'white'}}>Membre : {nom.toUpperCase()} et {age} ans</h2>
                <p>{children}</p>
            </React.Fragment>
        )
    )
}
export default Membre