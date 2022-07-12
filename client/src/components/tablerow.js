import { useState } from "react";
import Axios from "axios";

function TableRow({ row, handleDataChange, deleteRow }) {
  const [name, handleChangeName] = useState(row.name);
  const [email, handleChangeEmail] = useState(row.email);

  const updateValues = (e) => {
    var inputName = e.target.name;
    var inputValue = e.target.value;
    if (inputName === "name") {
      handleChangeName(inputValue);
    } else if (inputName === "email") {
      handleChangeEmail(inputValue);
    }

    handleDataChange({
      index: row.index,
      name: name,
      email: email,
    });
  };

  const learner = {
    name: name,
    email: email,
  };

  const removeRow = () => {
    Axios.post(`http://localhost:5000/learners/addStudent`, learner).then(
      (response) => {
        handleChangeName("");
        handleChangeEmail("");
        //deleteRow(index);
      }
    );
  };

  return (
    <tr>
      <td>
        <input
          type='text'
          name='name'
          className='name'
          placeholder='Name'
          value={name}
          onChange={updateValues}
        ></input>
      </td>
      <td>
        <input
          type='text'
          name='email'
          className='email'
          placeholder='Email'
          value={email}
          onChange={updateValues}
        ></input>
      </td>
      <td>
        <button type='button' onClick={removeRow}>
          Save
        </button>
      </td>
    </tr>
  );
}

export default TableRow;
