import React from "react";
export const ItemRegistration = (props) => {
  const itemDataPost = () => {
    // データベースにPOSTする処理
  };
  return (
    <>
      <div className="mainBrock">
        <label>カテゴリー</label>
        <select className="input">
          <option value={1}>ギア</option>
          <option value={2}>食材</option>
          <option value={3}>調理器具</option>
          <option value={4}>日用品</option>
        </select>

        <label>アイテム名</label>
        <input type="text" className="input"></input>
      </div>
      <div className="bottomBrock">
        <button onClick={itemDataPost}>追加</button>
        <button onClick={() => props.pageChange("ItemList")}>戻る</button>
      </div>
    </>
  );
};
