import React, { useState } from 'react';
import './Table.css';
import Flow from './Flow';

function Table() {
  const [selectedName, setSelectedName] = useState(null);

  const handleTdClick = (name) => {
    setSelectedName(name);
  };

  return (
    <>
      <table className="my-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Input type</th>
            <th>id</th>
            <th>Created at</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td onClick={() => handleTdClick('Faith Franey')} id="name">
              Faith Franey
            </td>
            <td>d</td>
            <td>5</td>
            <td>2023-04-06</td>
          </tr>
          <tr>
            <td onClick={() => handleTdClick('Nelson Ruecker')} id="name">
              Nelson Ruecker
            </td>
            <td>g</td>
            <td>7</td>
            <td>2023-04-07</td>
          </tr>
          {/* Add more <tr> elements here as needed */}
        </tbody>
      </table>
      {selectedName && <h1>{selectedName}</h1>}
      {selectedName && <Flow name={selectedName} />}
    </>
  );
}

export default Table;
