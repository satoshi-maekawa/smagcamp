import React, { useState } from "react";

export const ItemRegistration = (props) => {
  const [itemName, setItemName] = useState("");
  const [categoryNameId, setCategoryNameId] = useState("");

  const itemDataPost = async () => {
    //データベースにPOSTする処理
    try {
      const data = {
        itemName: itemName,
        categoryName_id: categoryNameId,
        accunt_id: 1,
        itemPhoto: null,
      };
      const res = await fetch("http://localhost:8080/addItems", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await res.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="mainBrock">
        <label>カテゴリー</label>
        <select
          className="input"
          value={categoryNameId}
          onChange={(e) => setCategoryNameId(e.target.value)}
        >
          <option value={1}>ギア</option>
          <option value={2}>食材</option>
          <option value={3}>調理器具</option>
          <option value={4}>日用品</option>
        </select>

        <label>アイテム名</label>
        <input
          type="text"
          className="input"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        ></input>
      </div>
      <div className="bottomBrock">
        <button onClick={itemDataPost}>追加</button>
        <button onClick={() => props.pageChange("ItemList")}>戻る</button>
      </div>
    </>
  );
};
