import React,{useEffect, useState} from 'react';
import "./App.css";
import HeroCard from './HeroCard';
import HeroPage from './HeroPage';
import Searchbar from './Searchbar';
import Filters from './Filters';



function App() {
  const [heroList, setHeroList]=useState();
  const [loaded, setLoaded]=useState(false);
  const [heroListDisplayed, setHeroListDisplayed]=useState();

  //filters
  const [searchInput, setSearchInput]= useState('');
  const [intelligenceLevelRange, setIntelligenceLevelRange]= useState(0);
  const [strengthLevelRange, setStrengthLevelRange]= useState(0);
  const [speedLevelRange, setSpeedLevelRange]= useState(0);
  const [durabilityLevelRange, setDurabilityLevelRange]= useState(0);
  const [powerLevelRange, setPowerLevelRange]= useState(0);
  const [combatLevelRange, setCombatLevelRange]= useState(0);

  const [currentHeroPageID, setCurrentHeroPageID]=useState();
  const [currentHeroPageActive, setCurrentHeroPageActive]=useState(false);

  

  useEffect(async ()=>{
    const url="https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json";
    const response = await fetch(url);
    const data = await response.json();
    setHeroList(data);
    setLoaded(true);

    
  },[])


  

  useEffect(()=>{
    if(loaded){
      setHeroListDisplayed(filterHeroList());
    }
    
    
  },[searchInput,intelligenceLevelRange,strengthLevelRange,speedLevelRange,
  durabilityLevelRange,powerLevelRange,combatLevelRange,loaded])


  function filterHeroList(){
    return heroList.filter((hero)=>{
              
      const searchFilter=new RegExp('^'+searchInput,'i');
      if(searchFilter.test(hero.name)&&
        (hero.powerstats.intelligence>=intelligenceLevelRange)&&
        (hero.powerstats.strength>=strengthLevelRange)&&
        (hero.powerstats.speed>=speedLevelRange)&&
        (hero.powerstats.durability>=durabilityLevelRange)&&
        (hero.powerstats.power>=powerLevelRange)&&
        (hero.powerstats.combat>=combatLevelRange)
      )
      {
        return hero;
      }
      
      
    }).map((hero)=>{

              return (
                
                <HeroCard
                  key={hero.id}
                  id={hero.id}
                  name={hero.name}
                  image={hero.images.sm}
                  powerStats={hero.powerstats}
                  appearance={hero.appearance}
                  setCurrentHeroPageID={setCurrentHeroPageID}
                  setCurrentHeroPageActive={setCurrentHeroPageActive}
                />
                

              )

      })
  }



  

  


  return (
    <div className="app">
    
    <Searchbar
      searchInput={searchInput}
      setSearchInput={setSearchInput}
    />

    <Filters
      intelligenceLevelRange={intelligenceLevelRange}
      setIntelligenceLevelRange={setIntelligenceLevelRange}
      strengthLevelRange={strengthLevelRange}
      setStrengthLevelRange={setStrengthLevelRange}
      speedLevelRange={speedLevelRange}
      setSpeedLevelRange={setSpeedLevelRange}
      durabilityLevelRange={durabilityLevelRange}
      setDurabilityLevelRange={setDurabilityLevelRange}
      powerLevelRange={powerLevelRange}
      setPowerLevelRange={setPowerLevelRange}
      combatLevelRange={combatLevelRange}
      setCombatLevelRange={setCombatLevelRange}
      
    />
      
      <div className="main-window">

        
        
        {!heroList?<h1>loading...</h1>:heroListDisplayed}
        
        
        
        
            
          
        
      </div>
      
      <HeroPage
          id={currentHeroPageID}
          setCurrentHeroPageActive={setCurrentHeroPageActive}
      />

    </div>
  )
}

export default App

