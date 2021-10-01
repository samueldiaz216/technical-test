import React,{useEffect, useRef} from 'react';
import "./SkillLevelBar.css";

function SkillLevelBar({level}) {
    const skillLevel=useRef();
    useEffect(()=>{
        skillLevel.current.style.width=`${level}%`
    },[])
    return (
        <div className="skill-level-bar">
            <div ref={skillLevel} className="skill-level-bar-level">
                
            </div>
            
        </div>
    )
}

export default SkillLevelBar
