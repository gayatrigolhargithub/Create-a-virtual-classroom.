import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch('/classes')
      .then(response => response.json())
      .then(data => setClasses(data))
      .catch(error => console.error('Error fetching classes:', error));
  }, []);

  return (
    <div className="App">
      <h1>Virtual Classroom</h1>
      <ul>
        {classes.map(cls => (
          <li key={cls.id}>{cls.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
