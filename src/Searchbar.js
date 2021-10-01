import React,{useState} from 'react';
import "./Searchbar.css";

function Searchbar({searchInput, setSearchInput}) {


    return (
        <form className="searchbar">
            
            <input value={searchInput} onChange={e => setSearchInput(e.target.value)}  type="text"/>

        </form>
    )
}

export default Searchbar
