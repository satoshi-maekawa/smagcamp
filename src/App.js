import './App.css';
import { ItemList } from './components/ItemList';
import { useEffect, useState } from 'react';
import { ItemRegistration } from './components/ItemRegistration';
import { BringList } from './components/BringList';
import { CompleteList } from './components/CompleteList';

function App() {
  const [view, setView] = useState("ItemList")
  const [completeItem, setCompleteItem] = useState([]);

  useEffect(() => {
    console.log(view)
  }, [view])

  if (view === "ItemList") {
    return (
      <div className="App">
        <ItemList view={view} setView={setView} />
      </div>
    );
  } else if (view === "ItemRegistration") {
    return (
      <div className="App">
        <ItemRegistration view={view} setView={setView} />
      </div>
    )
  } else if (view === "BringList") {
    return (
      <div className="App">
        <BringList view={view} setView={setView} />
      </div>
    )
  } else if (view === "CompleteList") {
    return (
      <div className="App">
        <CompleteList view={view} setView={setView} completeItem={completeItem} setCompleteItem={setCompleteItem} />
      </div>
    )
  }
}

export default App;
