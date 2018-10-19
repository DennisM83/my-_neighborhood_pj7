import React from 'react' 

const VenueList = (props) => {
    return (
        <li tabindex="1" onClick={() => props.sideBarClick(props)}>{props.name}</li>
    )
}

export default VenueList;