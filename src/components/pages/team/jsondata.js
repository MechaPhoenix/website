import React, { useEffect, useState } from 'react';

const JsonDisplay = () => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const storedJsonData = localStorage.getItem('scouting_data');
    if (storedJsonData) {
      setJsonData(JSON.parse(storedJsonData));
    }
  }, []);

  return (
    <div>
      <h2>JSON Data</h2>
      {jsonData ? (
        <table className="json-table">
          <thead>
            <tr>
              {Object.keys(jsonData[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {jsonData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {Object.values(row).map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No JSON data available. Please save data in the CSV editor first.</p>
      )}
    </div>
  );
};

export default JsonDisplay;
