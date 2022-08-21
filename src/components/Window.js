import { useState } from "react"

const Window = ({title}) => {
    const [n,setn] = useState(1)
    function increment(){
        setn(prevn=>prevn+1)
    }
    function reset(){
        setn(prevn=>prevn=0)
    }
    return (
    <div className="window">
        <div className="topbar">
            <h2>{title}</h2>
        </div>
        <div className="mainframe">
            <h3 className="counter">{n}</h3>
            <button className="btn" onClick={increment}>Add</button>
            <button className="btn" onClick={reset}>Reset</button>
        </div>
    </div>
  )
}

export default Window