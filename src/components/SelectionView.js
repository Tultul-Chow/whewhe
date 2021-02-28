import React from 'react'



const SelectionView = (props) => {
    let sum = 0;
    props.dollar.map((amt) => (
        sum = sum + amt))
    return (

        <div id="selection">
             <h2 className="calculation">Numbers Selected:</h2>
        
                {props.numbers.map((num) => (
                <p className="num">Mark: {num}</p>))}
               <p id="total"style={{ textDecoration: "bold" ,fontSize:"20px",fontWeight:"bold",lineHeight:"180%",  padding:"0 10px"}}>Total:${sum}</p>
            </div>
                
    )
}

export default SelectionView
