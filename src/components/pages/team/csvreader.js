// CSV Reader
import React, { useState } from 'react';
import CSVReader from 'react-csv-reader';
import '../../css/csv.css';

const CsvUploader = () => {
  const [csvDataArray, setCsvDataArray] = useState({});

  // Set Column Titles
  const columnTitles = ['Team Name', 'Team Number', 'Robot Height', 'Robot Weight', 'Pros and Cons', 'What can the robot do'];

  const handleFileUpload = (data, fileInfo) => {
    const headers = columnTitles;

    const formattedData = data.map(row => {
      const teamObj = {};
      headers.forEach((header, index) => {
        teamObj[header] = row[index];
      });
      return teamObj;
    });

    const newDataSet = {
      title: 'Scout CSV Data Set ' + (Object.keys(csvDataArray).length + 1),
      headers,
      data: formattedData,
    };

    setCsvDataArray(prevData => ({ ...prevData, [newDataSet.title]: newDataSet }));
  };

  return (
    <div className="csv-uploader-container">
      <h2 className="csv-uploader-title">CSV File Uploader</h2>

      <CSVReader
        onFileLoaded={handleFileUpload}
        inputStyle={{ color: 'red' }}
        cssClass="csv-input"
        style={{
          chooseFileButton: {
            color: 'white',
            backgroundColor: 'blue',

          },
        }}
      />

      {Object.keys(csvDataArray).length > 0 && (
        <div>
          {Object.keys(csvDataArray).map((key, index) => (
            <div key={index} className="csv-data-container">
              <h3 className="csv-data-title">{csvDataArray[key].title}</h3>
              <table className="csv-table">
                <thead>
                  <tr>
                    {csvDataArray[key].headers.map((header, headerIndex) => (
                      <th key={headerIndex}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {csvDataArray[key].data.map((team, rowIndex) => (
                    <tr key={rowIndex}>
                      {csvDataArray[key].headers.map((header, cellIndex) => (
                        <td key={cellIndex}>{team[header]}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CsvUploader;
