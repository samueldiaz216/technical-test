import React from 'react';
import './Filters.css';
import Range from "./Range"

function Filters({
    intelligenceLevelRange,
    setIntelligenceLevelRange,
    strengthLevelRange,
    setStrengthLevelRange,
    speedLevelRange,
    setSpeedLevelRange,
    durabilityLevelRange,
    setDurabilityLevelRange,
    powerLevelRange,
    setPowerLevelRange,
    combatLevelRange,
    setCombatLevelRange}) {
    return (
        <div className="filters">
            <Range 
                label="Intelligence"
                level={intelligenceLevelRange}
                setLevel={setIntelligenceLevelRange}

            />
            <Range 
                label="Strength"
                level={strengthLevelRange}
                setLevel={setStrengthLevelRange}

            />
            <Range 
                label="Speed"
                level={speedLevelRange}
                setLevel={setSpeedLevelRange}

            />
            <Range 
                label="Durability"
                level={durabilityLevelRange}
                setLevel={setDurabilityLevelRange}

            />
            <Range 
                label="Power"
                level={powerLevelRange}
                setLevel={setPowerLevelRange}

            />
            <Range 
                label="Combat"
                level={combatLevelRange}
                setLevel={setCombatLevelRange}

            />
  
        </div>
    )
}

export default Filters;
