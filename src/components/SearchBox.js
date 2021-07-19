import React, { useState } from "react";
import searchicon from '../static/search-icon.svg';

export default function SearchBox(props){
    const { 
        onSearch 
    } = props;

    const [searchText, setSearchText] = useState('');

    const handleInput = (event) => {
        const text = event.target.value;
        setSearchText(text);
    }

    const handleSubmit = () => {
        onSearch(searchText);
    }

    const handleKeyPress = (event) => {
        if(event.key=== 'Enter') {
            onSearch(searchText)
        }
    }

    return (
        <div className = "search-app-container">
            <input className = "search-input" 
                type = "text" 
                value = {searchText}
                onChange={handleInput}
                onKeyPress={handleKeyPress}
                placeholder = 'Start your search now'
            />
            <button onClick = {handleSubmit} className = "c-btn c-btn--primary search-submit-button">
                <img className="c-btn__icon search-icon" src={searchicon} alt="search icon" />
            </button>
        </div>
    )
}
