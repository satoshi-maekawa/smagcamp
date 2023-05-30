import React from "react";

export const BringList = (props) => {
  const editItemList = () => {
    props.setView("ItemList");
  };
  const pageChange = (name) => {
    props.setView(name);
  };
  return (
    <>
      <div>BringList</div>
      <button onClick={() => pageChange("CompleteList")}>完了済アイテム</button>
      <button onClick={editItemList}>戻る</button>
    </>
  );
};
