import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    // setting the state on eavery change in the search bar
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // calling the function which sends a fetch request
    const handleSearch = () => {
        onSearch(searchTerm);
    };

    // searching with the help of the enter key
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div style={{marginTop: '20px'}}>
            <input
                className='searchInput'
                type="text"
                placeholder="Enter your interest"
                value={searchTerm}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />
            <button className='searchButton' onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;
