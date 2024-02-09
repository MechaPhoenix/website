import React, { useState } from 'react';
import '../../css/csvcreator.css';
const mongoose = require("mongoose")
const csvtojson = require('csvtojson');

const CsvEditor = () => {
  const initialTableData = [['Team Name', 'Team Number', 'Robot Height', 'Robot Weight', 'Pros and Cons', 'What can the robot do']];
  const [tableData, setTableData] = useState([...initialTableData]);

  const addRow = () => {
    const teamName = prompt('Enter the team name:');
    if (teamName) {
      const newRow = [teamName, '', '', '', '', ''];
      setTableData((prevTableData) => [...prevTableData, newRow]);
    }
  };

  const removeRow = (index) => {
    const updatedTableData = [...tableData];
    updatedTableData.splice(index, 1);
    setTableData(updatedTableData);
  };

  const updateCell = (rowIndex, columnIndex, value) => {
    const updatedTableData = [...tableData];
    updatedTableData[rowIndex][columnIndex] = value;
    setTableData(updatedTableData);
  };

  const downloadCsv = () => {
    const csvContent = tableData.map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'scouting_data.csv';
    link.click();
  };

  return (
    <div className="csv-editor-container">
      <h2 className="csv-editor-title">CSV Editor</h2>

      <table className="csv-editor-table">
        <thead>
          <tr>
            {initialTableData[0].map((header, index) => (
              <th key={index}>{header}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>
                  <input
                    type="text"
                    value={cell}
                    onChange={(e) =>
                      updateCell(rowIndex, cellIndex, e.target.value)
                    }
                  />
                </td>
              ))}
              <td>
                <button onClick={() => removeRow(rowIndex)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="buttons-container">
        <button className="add-row-button" onClick={addRow}>
          Add Row
        </button>
        <button className="download-csv-button" onClick={downloadCsv}>
          Download CSV
        </button>
      </div>
    </div>
  );
};

export default CsvEditor;
