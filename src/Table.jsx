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
            <td onClick={() => handleTdClick('WorkFlow Designer Page Of  Faith Franey')} id="name">
              Faith Franey
            </td>
            <td>d</td>
            <td>5</td>
            <td>2023-04-06</td>
          </tr>
          <tr>
            <td onClick={() => handleTdClick('WorkFlow Designer Page Of Nelson Ruecker')} id="name">
              Nelson Ruecker
            </td>
            <td>g</td>
            <td>7</td>
            <td>2023-04-07</td>
          </tr>

          <tr>
            <td onClick={() => handleTdClick('WorkFlow Designer Page Of Winifred Bogisich')} id="name">
            Winifred Bogisich
            </td>
            <td>m</td>
            <td>9</td>
            <td>2023-04-07</td>
          </tr>

          <tr>
            <td onClick={() => handleTdClick('WorkFlow Designer Page Of Kim Will')} id="name">
            Kim Will
            </td>
            <td>h</td>
            <td>10</td>
            <td>2023-04-06</td>
          </tr>

          <tr>
            <td onClick={() => handleTdClick('WorkFlow Designer Page Of Mrs. Ismael Torphy')} id="name">
            Mrs. Ismael Torphy
            </td>
            <td>j</td>
            <td>12</td>
            <td>2023-04-07</td>
          </tr>

          <tr>
            <td onClick={() => handleTdClick('WorkFlow Designer Page Of Tonya Hettinger')} id="name">
            Tonya Hettinger
            </td>
            <td>z</td>
            <td>13</td>
            <td>2023-04-07</td>
          </tr>

          <tr>
            <td onClick={() => handleTdClick('WorkFlow Designer Page Of Ramona Bednar')} id="name">
            Ramona Bednar
            </td>
            <td>i</td>
            <td>14</td>
            <td>2023-04-07</td>
          </tr>

          <tr>
            <td onClick={() => handleTdClick('WorkFlow Designer Page Of Damon Schuppe')} id="name">
            Damon Schuppe
            </td>
            <td>r</td>
            <td>15</td>
            <td>2023-04-07</td>
          </tr>

          <tr>
            <td onClick={() => handleTdClick('WorkFlow Designer Page Of Miss Cheryl Aufderhar')} id="name">
            Miss Cheryl Aufderhar
            </td>
            <td>w</td>
            <td>16</td>
            <td>2023-04-07</td>
          </tr>

          <tr>
            <td onClick={() => handleTdClick('WorkFlow Designer Page Of Whitney Swaniawski')} id="name">
            Whitney Swaniawski
            </td>
            <td>n</td>
            <td>17</td>
            <td>2023-04-07</td>
          </tr>

          <tr>
            <td onClick={() => handleTdClick('WorkFlow Designer Page Of Don Feeney')} id="name">
            Don Feeney
            </td>
            <td>a</td>
            <td>18</td>
            <td>2023-04-07</td>
          </tr>
          

          <tr>
            <td onClick={() => handleTdClick('WorkFlow Designer Page Of Mr. Camille Sauer')} id="name">
            Mr. Camille Sauer
            </td>
            <td>z</td>
            <td>19</td>
            <td>2023-04-07</td>
          </tr>

          


        </tbody>
      </table>
      {selectedName && <h1>{selectedName}</h1>}
      {selectedName && <Flow name={selectedName} />}
    </>
  );
}

export default Table;
