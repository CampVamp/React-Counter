import { useState } from "react"

const Window = ({title}) => {
    return (
    <div className="window">
        <div className="topbar">
            <h2>{title}</h2>
        </div>
        <div className="mainframe">
            <h3>1</h3>
            <button>Add</button>
        </div>
    </div>
  )
}

export default Window