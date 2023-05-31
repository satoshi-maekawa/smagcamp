import "./App.css";
import { ItemList } from "./components/ItemList";
import { useEffect, useState } from "react";
import { ItemRegistration } from "./components/ItemRegistration";
import { BringList } from "./components/BringList";
import { CompleteList } from "./components/CompleteList";

function App() {
  const [view, setView] = useState("ItemList");
  const pageChange = (name) => {
    setView(name);
  };
  const [completeItem, setCompleteItem] = useState([]);
  const [allItems, setAllItem] = useState([]);
  const [BringItem, setBringItem] = useState([
    { name: "テント", checked: false },
    { name: "いす", checked: false },
    { name: "焚き火台", checked: false },
  ]);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await fetch("/allItems");
        const data = await res.json();
        setItems(data);
      } catch {
        console.error(error);
      }
    };
    fetchItem();
  }, []);

  useEffect(() => {
    console.log(view);
    console.log(BringItem);
  }, [view, BringItem]);

  const displayView = () => {
    switch (view) {
      case "ItemList":
        return (
          <div>
            <ItemList
              view={view}
              pageChange={pageChange}
              allItems={allItems}
              setAllItem={setAllItem}
            />
          </div>
        );
      case "ItemRegistration":
        return (
          <div>
            <ItemRegistration view={view} pageChange={pageChange} />
          </div>
        );
      case "BringList":
        return (
          <div>
            <BringList
              view={view}
              pageChange={pageChange}
              BringItem={BringItem}
              setBringItem={setBringItem}
            />
          </div>
        );
      case "CompleteList":
        return (
          <div>
            <CompleteList
              view={view}
              pageChange={pageChange}
              completeItem={completeItem}
              setCompleteItem={setCompleteItem}
              BringItem={BringItem}
              setBringItem={setBringItem}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return <div className="App">{displayView()}</div>;
}

export default App;
