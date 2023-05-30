import { ItemList } from './components/ItemList';
import './App.css';
import { useState } from 'react';

function App() {
  const [view, setView] = useState("ItemList")
  return (
    <div className="App">
      <ItemList view={view} setView={setView} />
    </div>
  );
}

export default App;
