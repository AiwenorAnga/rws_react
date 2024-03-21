/**
 * Table component
 * @param {object} data - Data to be displayed in the table. Each key-value pair represents a row and its corresponding data.
 * @param {string[]} [data[].key] - Optional array of keys representing the order of columns in the table header. If not provided, keys from the first row's data will be used.
 * @returns {JSX.Element} A React table element.
 * @example
 * ```jsx
 * const tableData = [
 *   { name: 'Alice', age: 30 },
 *   { name: 'Bob', age: 25 },
 * ];
 *
 * return <Table data={tableData} />;
 * ```
 */
import React, { useState } from 'react';
import {s_table} from './table.module.css'

const Table = ({ data }) => {

    let test = true
    if (Array.isArray(data) && data.length === 0) {
        test = false
    } else if (typeof data === 'object' && Object.keys(data).length === 0) {
        test = false
    }

    const renderRows = () =>
        data.map((row, index) => (
            <tr key={index}>
                {Object.keys(row).map((key) => (
                    <td key={key}>{row[key]}</td>
                ))}
            </tr>
        ));

    return (
        <div>  
        {!test ? (
            <></>
        ) : (
            <table className={s_table}>
                <thead>
                    <tr>
                        {Object.keys(data[0] || {}).map((key) => (
                            <th key={key}>{key}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>{renderRows()}</tbody>
            </table>
         )}
        </div>       
    );
};

export default Table;