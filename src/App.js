import "./App.css";
import { ItemList } from "./components/ItemList";
import { useEffect, useState } from "react";
import { ItemRegistration } from "./components/ItemRegistration";
import { BringList } from "./components/BringList";
import { CompleteList } from "./components/CompleteList";
// import { Login } from "./components/Login";
import { UserRegistration } from "./components/UserRegistration";
// const API_URL = process.env.DATABASE_URL || 'http://localhost:8080';
// const API_URL = "postgres://maekawa:GU33nODuU6EjZ3Fm2CqNueJFrNhf7Agx@dpg-chskl0m4dad9mubeur9g-a/smugcamp";
// const API_URL = process.env.DATABASE_URL;
const API_URL = "https://maekawa-smagcamp1.onrender.com";
console.log("process.env.DATABASE_URL:",API_URL);

function App() {
  // const [view, setView] = useState("Login");
  const [view, setView] = useState("ItemList");
  const pageChange = (name) => {
    setView(name);
  };
  const [completeItem, setCompleteItem] = useState([]);
  const [allItems, setAllItem] = useState([]);
  const [putBringItem, setPutBringItem] = useState([]);
  const [BringItem, setBringItem] = useState([
    { name: "テント", checked: false },
    { name: "いす", checked: false },
    { name: "焚き火台", checked: false },
  ]);
  // ユーザーがログイン済みか判定
  useEffect(() => {
    const user = localStorage.getItem("user");
    // user ? setView("ItemList") : setView("Login");
    user ? setView("ItemList") : setView("ItemList");
  }, []);
  // 全アイテム取得
  const fetchItem = async () => {
    try {
      const res = await fetch(`${API_URL}/allItems`);
      // const res = await fetch("http://localhost:8080/allItems");
      const data = await res.json();
      console.log("data:",data)
      const gearItem = data.filter((el) => el.categoryName_id === "1");
      const ingredientsItem = data.filter((el) => el.categoryName_id === "2");
      const kitchenwareItem = data.filter((el) => el.categoryName_id === "3");
      const dailyNecessitiesItem = data.filter(
        (el) => el.categoryName_id === "4"
      );
      setAllItem([
        gearItem,
        ingredientsItem,
        kitchenwareItem,
        dailyNecessitiesItem,
      ]);
      setPutBringItem(
        data.map((el) => {
          return { id: el.id, isBring: el.isBring };
        })
      );
      // console.log(allItems);
    } catch (error) {
      console.error("error");
    }
  };
  useEffect(() => {
    fetchItem();
    fetchBringItem();
    // console.log(BringItem)
  }, [view]); //ここに、allItemsが設定されていたことが問題だった！

  // Bringアイテム取得
  const fetchBringItem = async () => {
    try {
      const res = await fetch(`${API_URL}/bringItems`);
      // const res = await fetch("http://localhost:8080/bringItems");
      const data = await res.json();
      // console.log(data);
      const gearItem = data.filter((el) => el.categoryName_id === "1");
      const ingredientsItem = data.filter((el) => el.categoryName_id === "2");
      const kitchenwareItem = data.filter((el) => el.categoryName_id === "3");
      const dailyNecessitiesItem = data.filter(
        (el) => el.categoryName_id === "4"
      );
      setBringItem([
        gearItem,
        ingredientsItem,
        kitchenwareItem,
        dailyNecessitiesItem,
      ])

    } catch (error) {
      console.log(error);
    }
  }

  // 確認用ログ出力
  useEffect(() => {
    console.log("view :", view);
    console.log("bringItem :", BringItem);
    console.log("API_URL",API_URL);
    // console.log(putBringItem);
  }, [view, BringItem]);

  const displayView = () => {
    switch (view) {
      case "Login":
        return (
          <div>
            {/* <Login view={view} pageChange={pageChange} /> */}
          </div>
        );
      case "UserRegistration":
        return (
          <div>
            <UserRegistration view={view} pageChange={pageChange} />
          </div>
        );
      case "ItemList":
        return (
          <div>
            <ItemList
              view={view}
              pageChange={pageChange}
              allItems={allItems}
              setAllItem={setAllItem}
              putBringItem={putBringItem}
              setPutBringItem={setPutBringItem}
            />
          </div>
        );
      case "ItemRegistration":
        return (
          <div>
            <ItemRegistration
              view={view}
              pageChange={pageChange}
              fetchItem={fetchItem}
            />
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
