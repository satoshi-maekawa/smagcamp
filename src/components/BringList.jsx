import React from "react";

export const BringList = (props) => {
  const removeBringItem = (e) => {
    const targetValue = e.target.closest("li").innerText;
    const targetIndex = props.BringItem.findIndex(
      (el) => el.name === targetValue
    );
    const EditBringItem = props.BringItem;
    EditBringItem[targetIndex].checked = true;
    props.setBringItem((prevState) =>
      prevState.map((obj) =>
        obj.name === targetValue ? { name: obj.name, checked: true } : obj
      )
    );
  };
  return (
    <>
      <ul>
        {props.BringItem.filter((el) => el.checked === false).map(
          (el, index) => (
            <li key={index}>
              <input type="checkbox" onChange={removeBringItem}></input>
              {el.name}
            </li>
          )
        )}
      </ul>
      <div className="bottomBrock">
        <button onClick={() => props.pageChange("CompleteList")}>
          完了済アイテム
        </button>
        <button onClick={() => props.pageChange("ItemList")}>戻る</button>
      </div>
    </>
  );
};
