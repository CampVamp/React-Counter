import { useState } from "react"

const Window = ({title}) => {
    const [n,setn] = useState(1)
    function increment(){
        setn(n+1)
    }
    return (
    <div className="window">
        <div className="topbar">
            <h2>{title}</h2>
        </div>
        <div className="mainframe">
            <h3>{n}</h3>
            <button className="btn" onClick={increment}>Add</button>
            <button className="btn">Reset</button>
        </div>
    </div>
  )
}

export default Window