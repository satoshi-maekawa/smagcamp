import React from "react";
import campImg from "../image/campIcon.svg";

export const ItemList = (props) => {
  let user = localStorage.getItem("user");
  const logout = () => {
    props.pageChange("Login");
    localStorage.removeItem("user");
  };
  return (
    <>
      <div className="headerBrock">
        <p>Welcome {user}</p>
        <button className="btn logOutBtn" onClick={logout}>
          Log out
        </button>
      </div>
      <div className="mainBrock">
        <ul>
          {/* datebaseから取ってきたデータをmapでかく */}
          {props.allItems.map((el, index) => (
            <li key={index}>
              <button>写真</button>
              <p>{el.itemName}</p>
              <button>必要</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="bottomBrock">
        <button className="btn liftBtn">全解除</button>
        <button
          onClick={() => props.pageChange("ItemRegistration")}
          className="btn"
        >
          アイテム追加
        </button>
        <img
          src={campImg}
          alt="campImage"
          className="campImg"
          onClick={() => props.pageChange("BringList")}
        ></img>
      </div>
    </>
  );
};
