import { useState } from "react";
import TableRow from "./tablerow";

var tableRowIndex = 0;
function Dashboard() {
  const [talbeRows, setRows] = useState([
    {
      index: 0,
      name: "",
      email: "",
    },
  ]);

  // Receive data from TableRow
  const handleChange = (data) => {
    talbeRows[data.index] = data;
  };

  // Add New Table Row
  const addNewRow = () => {
    tableRowIndex = parseFloat(tableRowIndex) + 1;
    var updatedRows = [...talbeRows];
    updatedRows[tableRowIndex] = {
      index: tableRowIndex,
      name: "",
      email: "",
    };
    setRows(updatedRows);
  };

  // Remove Table row if rows are count is more than 1
  const deleteRow = (index) => {
    if (talbeRows.length > 1) {
      var updatedRows = [...talbeRows];
      var indexToRemove = updatedRows.findIndex((x) => x.index === index);
      if (indexToRemove > -1) {
        updatedRows.splice(indexToRemove, 1);
        setRows(updatedRows);
      }
    }
  };

  return (
    <div>
      <h3>Learner Dashboard</h3>
      <table>
        <thead>
          <tr>
            <th> Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {talbeRows.map((row, index) => {
            return (
              <TableRow
                key={index}
                row={row}
                handleDataChange={handleChange}
                deleteRow={deleteRow}
              ></TableRow>
            );
          })}
        </tbody>
      </table>
      <div>
        <button className='btn-add' onClick={addNewRow}>
          Add
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
