import { useState } from 'react';
import './App.css';
import data from './data'
import List from './List'
console.log(data);

function App() {
  const [people, setPeople] = useState(data)

  return (
    <section className="container">
      <h3> {people.length} birthdays today</h3>
      <List people={people} />
      <button onClick={() => setPeople([])}>Limpar tudo</button>
    </section>
  );
}

export default App;
