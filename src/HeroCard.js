import React,{useEffect,useState} from 'react';
import "./HeroCard.css";
import SkillLevelBar from './SkillLevelBar';

function HeroCard({id, name, image, powerStats, appearance, setCurrentHeroPageID, setCurrentHeroPageActive}) {

    const overall=getOverallAverageSkill();


    function getOverallAverageSkill(){
        let skillTotal=(powerStats.intelligence+powerStats.strength+powerStats.speed+powerStats.durability+powerStats.power+powerStats.combat);
        let skillAverage=(Math.round(skillTotal/6));
        
        return skillAverage;
    }


    return (
        <div className="hero-card" onClick={()=>{
            setCurrentHeroPageID(id);
            setCurrentHeroPageActive(true);
        }}>
            <h1 className="hero-card-name">{name}</h1>
            <img className="hero-card-image" src={image} alt="" /> 
            <div className="hero-card-skill">
                <ul className="hero-card-skill-levels">
                    <li>
                        <p>OVERALL: {overall}</p>
                        <SkillLevelBar
                            level={overall}
                        />
                    </li>
                    <li>
                        <p>INTELLIGENCE: {powerStats.intelligence}</p>
                        <SkillLevelBar
                            level={powerStats.intelligence}
                        />
                    </li>
                    <li>
                        <p>STRENGTH: {powerStats.strength}</p>
                        <SkillLevelBar
                            level={powerStats.strength}
                        />
                    </li>
                    <li>
                        <p>SPEED: {powerStats.speed}</p>
                        <SkillLevelBar
                            level={powerStats.speed}
                        />
                    </li>
                    <li>
                        <p>DURABILITY: {powerStats.durability}</p>
                        <SkillLevelBar
                            level={powerStats.durability}
                        />
                    </li>
                    <li>
                        <p>POWER: {powerStats.power}</p>
                        <SkillLevelBar
                            level={powerStats.power}
                        />
                    </li>
                    <li>
                        <p>COMBAT: {powerStats.combat}</p>
                        <SkillLevelBar
                            level={powerStats.combat}
                        />
                    </li>
                </ul>
            </div>
            
            
        </div>
    )
}

export default HeroCard
