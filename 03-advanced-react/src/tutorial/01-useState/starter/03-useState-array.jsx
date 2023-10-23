import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  //function to remove 1 person
  const removePerson = (id) => {
    let newPeople = people.filter((person) => {
      return person.id != id;
    }); 
    setPeople(newPeople);
  };
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button onClick={() => removePerson(id)}>remove</button>
          </div>
        );
      })}
      <button
        className="btn"
        style={{ marginTop: "2rem" }}
        onClick={()=>setPeople([])}
      >
        clear
      </button>
    </div>
  );
};

export default UseStateArray;
