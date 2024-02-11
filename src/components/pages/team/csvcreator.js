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

import React, { useState, useEffect } from 'react';
import { createClient } from 'mongoose-browser';
import csvtojson from 'csvtojson';
import Settings from '../../../../src/backend/json/database/settings.json';
import '../../css/csvcreator.css';

const CsvEditor = () => {
  const [client, setClient] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const mongoClient = createClient(Settings.MongoDBUri);
    setClient(mongoClient);

    return () => {
      mongoClient.close();
    };
  }, []);

  const checkMongoDBConnection = async () => {
    try {
      await client.connect();
      setIsConnected(true);
    } catch (error) {
      setIsConnected(false);
      console.error('Error connecting to MongoDB:', error);
    }
  };

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

  const SaveToDB = async () => {
    try {
      if (!client.isConnected()) {
        alert('Not connected to MongoDB. Please check your connection.');
        return;
      }

      const jsonData = await csvtojson().fromString(
        tableData.map(row => row.join(',')).join('\n')
      );

      const dataSchema = new client.Schema({
        teamName: String,
        teamNumber: String,
        robotHeight: String,
        robotWeight: String,
        prosAndCons: String,
        robotCapabilities: String,
      });

      const DataModel = client.model('Data', dataSchema);

      await DataModel.insertMany(jsonData);

      alert('Data saved to MongoDB successfully!');
    } catch (error) {
      console.error('Error saving data to MongoDB:', error);
      alert('Error saving data to MongoDB. Please check the console for details.');
    } finally {
      setIsConnected(false);
      await client.close();
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
      <h2 className="csv-editor-title">CSV Editor</h2>
      <h2>All logs will be posted publicly from the Database</h2>

      <h3>{isConnected ? 'Connected to MongoDB' : 'Not connected to MongoDB'}</h3>

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
        <button className="add-row-button" onClick={SaveToDB}>
          Save to Database
        </button>
        <button className="download-csv-button" onClick={downloadCsv}>
          Download CSV
        </button>
      </div>
    </div>
  );
};

export default CsvEditor;
