/**
 * Articles component for browsing and searching articles
 *
 * This component allows users to search for articles based on keywords and displays the fetched data in a table.
 *
 * @returns {JSX.Element} A React element representing the Articles component with search and table functionality.
 * @see {@link ./table.js} for details about the Table component used for displaying fetched articles.
 */
import React, { useState } from 'react';
import Table from './table';
import SearchForm from './search_form';
import {container,heading,navLinks,navLinkItem,navLinkText, siteTitle} from './layout.module.css'
import {smessage, sarticle} from './articles.module.css'

const config = require('../config.json');
const url = config.url;

const Articles = () => {
    const [tableData, setTableData] = useState([]);
    const [isLoading, setIsLoading] = useState(false); 
    const [message, setMessage] = useState('Enter keywords to search for, separated by gap.');
    
    /**
    * Fetches article data from a server API based on provided keywords.
    *
    * This function handles user-submitted keywords, prepares the API request, fetches data,
    * and updates the component state with the fetched articles or error messages.
    *
    * @param {string} keywords - The user-entered keywords to search for articles.
    */
    const loadData = async (keywords) => {
        keywords =  keywords.trim().split(' ');
        keywords = keywords.map(str => str.trim().toString()).filter(Boolean);;
        keywords = [...new Set(keywords)];
        
        let timeout = 5000;                        
        var data = new Object({keywords:  keywords})             
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeout);            
        const options = {
            mode: 'cors',
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=UTF-8",
            },
            body: JSON.stringify(data),
        };
                    
        try {
            setMessage('')
            setIsLoading(true);
            setTableData();
            fetch(url, options)
                .then(response => {
                    if (!response.ok) {
                        throw Error(`HTTP error: ${response.status}`);
                    }
                    return response.json();
                })
                .then((data) => {
                    if ('articles' in data) {                    
                        if (data['articles'].length<1) {
                            setMessage('Uploaded articles: 0')
                        } else {
                            setMessage('Uploaded articles:'+data['articles'].length)
                            setTableData(data['articles']);
                        }
                    } else {
                        throw Error(`Any key articles in data.`);
                    } 
                    setIsLoading(false);                                       
                })
                .catch(error => {            
                    console.error('Error fetching data:', error)
                    setMessage('Error fetching data.')
                    setIsLoading(false);                               
                }
            );
        } catch (error) {
            console.error('Error fetching data:', error);
            setMessage('Error fetching data.')
            setIsLoading(false);
        }   
    };

    const changeMessage =  (new_message) => {
        setMessage(new_message)
    }

    return (
        <div className={sarticle}>      
            {isLoading ? (
                <p>Loading data...</p>
            ) : (
                <>              
                    <div className={smessage}>{message}</div>
                    <SearchForm onSearch={loadData} changeMessage={changeMessage} />
                    {tableData && tableData.length > 0 ? (
                            <Table data={tableData} />
                    ) : (
                        <>
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default Articles;