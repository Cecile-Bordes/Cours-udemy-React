import React, {Fragment} from 'react'

const Membre = ({ nom, children }) => {
    return (
        (
            <React.Fragment>
                <h2>Membre : {nom.toUpperCase()}</h2>
                <p>{children}</p>
            </React.Fragment>
        )
    )
}
export default Membre