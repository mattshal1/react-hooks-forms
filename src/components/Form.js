import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");

  const handleFirstName = (event) => {setFirstName(event.target.value)};
  const handleLastName = (event) => {setLastName(event.target.value)};

  return (
    <form>
      <input type="text" value={firstName} onChange={handleFirstName}/>
      <input type="text" value={lastName} onChange={handleLastName}/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;