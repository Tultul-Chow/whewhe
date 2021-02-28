import React from 'react'
import { useState,useEffect } from "react"

const Modal = (props) => {
    var [sum, setSum] = useState(0);
   
    props.dollar.map((amt) => (
        sum = sum + amt))
    const [recieved, setRecieved] = useState('')
    const [result, setResult] = useState('please confirm')
    useEffect(() => {
        
        
    }, [])

    return (

        <div className={props.modals.visible === true ? "" : "hide"}  >
            <div className="modal" >
                <div className="modal-container">
                    <h6 style={{ textAlign: "left", color:"black",fontWeight:"bold",fontSize: "30px", backgroundColor: "orange",padding:"5px 30px 5px 5px" }}> Cash </h6>
                    <br></br>

                    <div id="cal">

                        <div className="part1">
                            <h5 style={{ textAlign: "left", fontSize: "20px" }}>Enter Amount Recieved <br></br></h5>
                            <label for="rcv" type="text" >Total :$ {sum}</label><br></br>
                            <label for="rcv" type="text" >Recieved :</label>
                            <input type="text" id="rcv" style={{ width: "100px" ,textAlign:"right"}} onChange={(evt) => {

                                setRecieved(evt.target.value);


                            }}></input><br></br><br></br>
                            {console.log(recieved + "," + sum)}
                            <label for="chn">Change   :</label>
                            <input type="text" id="chn" style={{ width: "100px",textAlign:"right" }} value={result} >
                            </input><br></br><br></br><br></br>
                            <button id="btn" onClick={() => {
                                setResult(recieved - sum)


                            }}>Confirm</button>
                            <button id="btn" onClick={() => {

                                props.hideModal();

                            }}>Close</button>
                        </div>
                        <div className="part2">
                            <button id="btn1">7</button>
                            <button id="btn1">8</button>
                            <button id="btn1" >9</button>
                            <button id="btn1">4</button>
                            <button id="btn1">5</button>
                            <button id="btn1" >6</button>
                            <button id="btn1" >1</button>
                            <button id="btn1" >2</button>
                            <button id="btn1">3</button>
                            <button id="btn1" >0</button>
                            <button id="btn1" >.</button>
                           
                            <button id="btn1" style={{backgroundColor:"red"}} onClick={()=>{
                               
                            }}>cl</button>
                        </div>
                    </div>
                </div></div></div>



    )

}

export default Modal
