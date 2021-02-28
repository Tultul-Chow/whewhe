import React from 'react'

const ActionButton = (props) => {
    const clickUnSelect=()=>props.unselect();
    const clickHandler=()=>props.onPress();
    return (
        <div>
            <button className="action" onClick={clickHandler}>CASH</button>
            <button className="action" onClick={clickUnSelect} >CLEAR</button>
        </div>
    )
}

export default ActionButton

