import './App.css';
import React from 'react';
import PersonCard from "./components/PersonCard"

function App() {
  const [personsList, setPersonsList] = React.useState([
    { id: 1, lName: "Doe", fName: "Jane", age: 45, hairColor: "Black" },
    { id: 2, lName: "Smith", fName: "John", age: 88, hairColor: "Brown" },
    { id: 3, lName: "Fillmore", fName: "Millard", age: 50, hairColor: "Brown" },
    { id: 4, lName: "Smith", fName: "Marie", age: 62, hairColor: "Brown" }
  ])

  function handleClick(id) {
    setPersonsList(personsList.map(p => p.id == id ? {...p, age: p.age+1} : p))
  }

  return (
    <div className='App'>
      {personsList.map((person) => <PersonCard key={person.id}
        person={person}
        handleClick={handleClick}
      />
      )}
    </div>
  );
}

export default App;
