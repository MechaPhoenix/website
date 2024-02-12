// import React, { useState } from 'react';
// import '../../css/csvcreator.css';
// const mongoose = require("mongoose")
// const csvtojson = require('csvtojson');

// const CsvEditor = () => {
//   const initialTableData = [['Team Name', 'Team Number', 'Robot Height', 'Robot Weight', 'Pros and Cons', 'What can the robot do']];
//   const [tableData, setTableData] = useState([...initialTableData]);

//   const addRow = () => {
//     const teamName = prompt('Enter the team name:');
//     if (teamName) {
//       const newRow = [teamName, '', '', '', '', ''];
//       setTableData((prevTableData) => [...prevTableData, newRow]);
//     }
//   };

//   const removeRow = (index) => {
//     const updatedTableData = [...tableData];
//     updatedTableData.splice(index, 1);
//     setTableData(updatedTableData);
//   };

//   const updateCell = (rowIndex, columnIndex, value) => {
//     const updatedTableData = [...tableData];
//     updatedTableData[rowIndex][columnIndex] = value;
//     setTableData(updatedTableData);
//   };

//   const downloadCsv = () => {
//     const csvContent = tableData.map(row => row.join(',')).join('\n');
//     const blob = new Blob([csvContent], { type: 'text/csv' });
//     const link = document.createElement('a');
//     link.href = window.URL.createObjectURL(blob);
//     link.download = 'scouting_data.csv';
//     link.click();
//   };

//   return (
//     <div className="csv-editor-container">
//       <h2 className="csv-editor-title">CSV Editor</h2>
//       <h2>All logs will be posted publicly from the Database</h2>

//       <table className="csv-editor-table">
//         <thead>
//           <tr>
//             {initialTableData[0].map((header, index) => (
//               <th key={index}>{header}</th>
//             ))}
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tableData.map((row, rowIndex) => (
//             <tr key={rowIndex}>
//               {row.map((cell, cellIndex) => (
//                 <td key={cellIndex}>
//                   <input
//                     type="text"
//                     value={cell}
//                     onChange={(e) =>
//                       updateCell(rowIndex, cellIndex, e.target.value)
//                     }
//                   />
//                 </td>
//               ))}
//               <td>
//                 <button onClick={() => removeRow(rowIndex)}>Remove</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div className="buttons-container">
//         <button className="add-row-button" onClick={addRow}>
//           Add Row
//         </button>
//         <button  className="add-row-button" onClick={SaveToDB}>
//           Save to Database
//         </button>
//         <button className="download-csv-button" onClick={downloadCsv}>
//           Download CSV
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CsvEditor;

import React, { useState } from 'react';
import csvtojson from 'csvtojson';
import '../../css/csvcreator.css';
import '../../css/dots.css'

const CsvEditor = () => {
  const [tableData, setTableData] = useState([]);

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

  const SaveToJSON = () => {
    try {
      const jsonData = tableData.map(row => ({
        teamName: row[0],
        teamNumber: row[1],
        robotHeight: row[2],
        robotWeight: row[3],
        prosAndCons: row[4],
        robotCapabilities: row[5],
      }));

      const jsonString = JSON.stringify(jsonData, null, 2); // Stringify JSON with indentation for better readability

      // Save the JSON data to localStorage
      localStorage.setItem('scouting_data', jsonString);

      alert('Data saved to JSON file successfully!');
    } catch (error) {
      console.error('Error saving data to JSON file:', error);
      alert('Error saving data to JSON file. Please check the console for details.');
    }
  };

  const downloadCsv = () => {
    try {
      const csvContent = tableData.map(row => row.join(',')).join('\n');
      const blob = new Blob([csvContent], { type: 'text/csv' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'scouting_data.csv';
      link.click();
    } catch (error) {
      console.error('Error creating CSV file:', error);
      alert('Error creating CSV file. Please check the console for details.');
    }
  };

  return (
    
    <div className="csv-editor-container">
      <div class="dot green"><span><span></span></span></div>
      <table className="csv-editor-table">
        <thead>
          <tr>
            <th>Team Name</th>
            <th>Team Number</th>
            <th>Robot Height</th>
            <th>Robot Weight</th>
            <th>Pros and Cons</th>
            <th>What can the robot do</th>
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
        <button className="add-row-button" onClick={SaveToJSON}>
          Save to JSON
        </button>
        <button className="download-csv-button" onClick={downloadCsv}>
          Download CSV
        </button>
      </div>
      
    </div>
    
  );
};

export default CsvEditor;
