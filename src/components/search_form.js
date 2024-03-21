/**
 * Search form component
 *
 * @param {function} onSearch - Callback function called when the user submits the search with the entered keywords. The function receives the trimmed keywords as an argument.
 * @param {function} changeMessage - Callback function used to update a message displayed elsewhere in the application. This function is provided by the parent component.
 * @returns {JSX.Element} A React form element.
 *
 * @example
 * ```jsx
 * const handleSearch = (keywords) => {
 *   console.log('Searched for:', keywords);
 * };
 *
 * const updateMessage = (message) => {
 *   console.log('Updated message:', message);
 * };
 *
 * return (
 *   <SearchForm onSearch={handleSearch} changeMessage={updateMessage} />
 * );
 * ```
 */
import React, { useState } from 'react';

const SearchForm = ({ onSearch, changeMessage }) => {
    const [keywords, setKeywords] = useState('');
    const [message, setMessage] = useState('');

    const handleSearchClick = (event) => {
        event.preventDefault();
        const trimmedKeywords = keywords.trim();
    
        if (trimmedKeywords) {
            onSearch(trimmedKeywords);
        } else {
            changeMessage('Please enter some keywords to search.');
        }
    };

    const handleResetClick = () => {
        setKeywords('');
    };

    const handleInputChange = (event) => {
        const newKeywords = event.target.value; 
        setKeywords(newKeywords);
    };

    return (
        <form onSubmit={handleSearchClick}>
            <label htmlFor="keywords">Keywords: </label>
            <input
                type="text"
                id="keywords"
                value={keywords}
                onChange={handleInputChange}
            />
            <button type="submit">Search</button>
            <button type="button" onClick={handleResetClick}>Reset</button>
        </form>
    );
};

export default SearchForm;