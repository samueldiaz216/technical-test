import React from 'react'
import './Range.css'

function Range({label,level,setLevel}) {
    return (
        <div className="range">
            <label>{label}</label>
            <input onChange={(e)=>{
                setLevel(e.target.value);
            }} type="range" id="volume" name="volume" value={level}
                    min="0" max="100"/><span>{'>'}= {level}</span>
        </div>
    )
}

export default Range;
