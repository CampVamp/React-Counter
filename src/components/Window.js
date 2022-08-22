import { useState } from "react"

const Window = ({title}) => {
    const [number,setNumber] = useState(0)
    function increment(){
        setNumber(prevn=>prevn+1)
    }
    function reset(){
        setNumber(prevn=>prevn=0)
    }
    return (
    <div className="window">
        <div className="topbar">
            <h2>{title}</h2>
        </div>
        <h3 className="counter">{number}</h3>
        <div className="mainframe">
            <button className="btn" onClick={increment}>Add</button>
            <button className="btn" onClick={reset}>Reset</button>
        </div>
    </div>
  )
}

export default Window
