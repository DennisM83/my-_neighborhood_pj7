import React from 'react' 

const VenueList = (props) => {
    return (
        <li onClick={() => props.sideBarClick(props)}>{props.name}</li>
    )
}

export default VenueList;