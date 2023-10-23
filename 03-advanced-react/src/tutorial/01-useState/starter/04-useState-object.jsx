import { useState } from "react";

const UseStateObject = () => {
  const [person,setPerson]  = useState({
    name:'peter',
    age:24,
    hobby:'read books'
  })
  let updatePerson = (event) => {
    event.preventDefault();
    let [username,userage,userHobby] = event.target;
    setPerson({
      name:username.value,
      age:userage.value,
      hobby:userHobby.value
    })
  };
  return (
    <>
      <div>
        <h1>{person.name}</h1>
        <h2>{person.age}</h2>
        <h3>{person.hobby}</h3>
      </div>
      <br />
      <form onSubmit={updatePerson}>
        <input type="text" name="username" placeholder="Enter new name" />
        <input type="number" name="userage" placeholder="new age" />
        <input type="text" name="userHobby" placeholder="new hobby" />
        <button type="submit">update</button>
      </form>
    </>
  );
};

export default UseStateObject;
