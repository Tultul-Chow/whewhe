import './App.css';

import Header from "./components/Header"
import SelectionView from "./components/SelectionView"
import { useState } from "react"
import Modal from "./components/Modal";
import CashButton from "./components/ActionButton";

import num from "./images/num.jpg";



function App() {
  const [mark, setMark] = useState([]);
  const [turn, setTurn] = useState(0);
  const [amount, setAmount] = useState([]);
  const [isEnable, setIsEnable] = useState(false);
  const [buttonStatus, setButtonStatus] = useState([])
  const [modal, setModal] = useState({
    msg: '',
    visible: false,
  })

  const cashView = (id) => {
    setModal({
      msg: '',
      visible: true
    })

  }

  const hideCash = (id) => {
    setModal({
      msg: '',
      visible: false

    })
  }
  const unSelect=(id)=>{
    setTurn({
      turn:turn-1,
  })
}

  for (let i = 0; i <= 19; i++) {

    buttonStatus.push(false);
  }

  return (

    <div >
      <Modal hideModal={hideCash} dollar={amount} modals={modal} />
      <Header />
      <div className="game">
        <div id="row">
          <div>
          <button onClick={() => { setAmount([...amount, 1]) }} className="money" type="button" >$1</button>
          <button onClick={() => { setAmount([...amount, 5]) }} className="money" type="button" >$5</button><br></br>
          <button onClick={() => { setAmount([...amount, 10]) }} className="money" type="button" >$10</button>
          <button onClick={() => { setAmount([...amount, 20]) }} className="money" type="button" >$20</button>
          </div>
          <img src={num} id="img" alt="num"></img>
        </div>

        <div >
          <button onClick={() => {
            setMark([...mark, 1]); setTurn(turn + 1); buttonStatus[0] = true;

            if (turn === 4) { setIsEnable(true) }


          }} style={{ backgroundColor: buttonStatus[0] === true ? 'red' : 'black' }} disabled={isEnable} className="number" type="button" >1</button>

          <button onClick={() => {
            setMark([...mark, 2]); setTurn(turn + 1); buttonStatus[1] = true;

            if (turn === 4) { setIsEnable(true) }

          }} style={{ backgroundColor: buttonStatus[1] === true ? 'red' : 'black' }} disabled={isEnable} className="number" type="button" >2</button>

          <button onClick={() => {
            setMark([...mark, 3]); setTurn(turn + 1); buttonStatus[2] = true;

            if (turn === 4) { setIsEnable(true) }

          }} style={{ backgroundColor: buttonStatus[2] === true ? 'red' : 'black' }} disabled={isEnable} className="number" type="button" >3</button>

          <button onClick={() => {
             setMark([...mark, 4]); setTurn(turn + 1); buttonStatus[3] = true;

            if (turn === 4) { setIsEnable(true) }

          }} style={{ backgroundColor: buttonStatus[3] === true ? 'red' : 'black' }} disabled={isEnable} className="number" type="button" >4</button>

          <button onClick={() => {
             setMark([...mark, 5]); setTurn(turn + 1); buttonStatus[4] = true;

            if (turn === 4) { setIsEnable(true) }

          }} style={{ backgroundColor: buttonStatus[4] === true ? 'red' : 'black' }} disabled={isEnable} className="number" type="button" >5</button>

          <button onClick={() => {
             setMark([...mark, 6]); setTurn(turn + 1); buttonStatus[5] = true;

            if (turn === 4) { setIsEnable(true) }

          }} style={{ backgroundColor: buttonStatus[5] === true ? 'red' : 'black' }} disabled={isEnable} className="number" type="button" >6</button>

          <button onClick={() => {
             setMark([...mark, 7]); setTurn(turn + 1); buttonStatus[6] = true;


            if (turn === 4) { setIsEnable(true) }

          }} style={{ backgroundColor: buttonStatus[6] === true ? 'red' : 'black' }} disabled={isEnable} className="number" type="button" >7</button>

          <button onClick={() => {
             setMark([...mark, 8]); setTurn(turn + 1); buttonStatus[7] = true;


            if (turn === 4) { setIsEnable(true) }

          }} style={{ backgroundColor: buttonStatus[7] === true ? 'red' : 'black' }} disabled={isEnable} className="number" type="button" >8</button>

          <button onClick={() => {
             setMark([...mark, 9]); setTurn(turn + 1); buttonStatus[8] = true;


            if (turn === 4) { setIsEnable(true) }

          }} style={{ backgroundColor: buttonStatus[8] === true ? 'red' : 'black' }} disabled={isEnable} className="number" type="button" >9</button>

          <button onClick={() => {
             setMark([...mark, 10]); setTurn(turn + 1); buttonStatus[9] = true;


            if (turn === 4) { setIsEnable(true) }

          }} style={{ backgroundColor: buttonStatus[9] === true ? 'red' : 'black' }} disabled={isEnable} className="number" type="button" >10</button>

          <button onClick={() => {
             setMark([...mark, 11]); setTurn(turn + 1); buttonStatus[10] = true;


            if (turn === 4) { setIsEnable(true) }

          }} style={{ backgroundColor: buttonStatus[10] === true ? 'red' : 'black' }} disabled={isEnable} className="number" type="button" >11</button>

          <button onClick={() => {
             setMark([...mark, 12]); setTurn(turn + 1); buttonStatus[11] = true;


            if (turn === 4) { setIsEnable(true) }

          }} style={{ backgroundColor: buttonStatus[11] === true ? 'red' : 'black' }} disabled={isEnable} className="number" type="button" >12</button>

          <button onClick={() => {
             setMark([...mark, 13]); setTurn(turn + 1); buttonStatus[12] = true;


            if (turn === 4) { setIsEnable(true) }

          }} style={{ backgroundColor: buttonStatus[12] === true ? 'red' : 'black' }} disabled={isEnable} className="number" type="button" >13</button>

          <button onClick={() => {
             setMark([...mark, 14]); setTurn(turn + 1); buttonStatus[13] = true;


            if (turn === 4) { setIsEnable(true) }

          }} style={{ backgroundColor: buttonStatus[13] === true ? 'red' : 'black' }} disabled={isEnable} className="number" type="button" >14</button>

          <button onClick={() => {
             setMark([...mark, 15]); setTurn(turn + 1); buttonStatus[14] = true;


            if (turn === 4) { setIsEnable(true) }

          }} style={{ backgroundColor: buttonStatus[14] === true ? 'red' : 'black' }} disabled={isEnable} className="number" type="button" >15</button>

          <button onClick={() => {
             setMark([...mark, 16]); setTurn(turn + 1); buttonStatus[15] = true;


            if (turn === 4) { setIsEnable(true) }

          }} style={{ backgroundColor: buttonStatus[15] === true ? 'red' : 'black' }} disabled={isEnable} className="number" type="button" >16</button>

          <button onClick={() => {
             setMark([...mark, 17]); setTurn(turn + 1); buttonStatus[16] = true;


            if (turn === 4) { setIsEnable(true) }

          }} style={{ backgroundColor: buttonStatus[16] === true ? 'red' : 'black' }} disabled={isEnable} className="number" type="button" >17</button>

          <button onClick={() => {
             setMark([...mark, 18]); setTurn(turn + 1); buttonStatus[17] = true;


            if (turn === 4) { setIsEnable(true) }

          }} style={{ backgroundColor: buttonStatus[17] === true ? 'red' : 'black' }} disabled={isEnable} className="number" type="button" >18</button>

          <button onClick={() => {
             setMark([...mark, 19]); setTurn(turn + 1); buttonStatus[18] = true;


            if (turn === 4) { setIsEnable(true) }

          }} style={{ backgroundColor: buttonStatus[18] === true ? 'red' : 'black' }} disabled={isEnable} className="number" type="button" >19</button>

          <button onClick={() => {
             setMark([...mark, 20]); setTurn(turn + 1); buttonStatus[19] = true;


            if (turn === 4) { setIsEnable(true) }

          }} style={{ backgroundColor: buttonStatus[19] === true ? 'red' : 'black' }} disabled={isEnable} className="number" type="button" >20</button>

          <CashButton onPress={cashView} unselect={unSelect} /></div>{console.log(turn)}
        <div></div>

        <SelectionView numbers={mark} dollar={amount} />

      </div>
    </div>



  );
}


export default App;
