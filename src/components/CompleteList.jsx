import React from "react";

export const CompleteList = (props) => {
  const addBringItem = (e) => {
    const targetValue = e.target.closest("li").innerText;
    const targetIndex = props.BringItem.findIndex(
      (el) => el.name === targetValue
    );
    const EditBringItem = props.BringItem;
    EditBringItem[targetIndex].checked = true;
    props.setBringItem((prevState) =>
      prevState.map((obj) =>
        obj.name === targetValue ? { name: obj.name, checked: false } : obj
      )
    );
  };
  const allFalse = () => {
    props.setBringItem((prevState) =>
      prevState.map((obj) => {
        return { name: obj.name, checked: false };
      })
    );
  };
  return (
    <>
      <ul>
        {props.BringItem.filter((el) => el.checked === true).map(
          (el, index) => (
            <li key={index}>
              <input type="checkbox" onChange={addBringItem} checked></input>
              {el.name}
            </li>
          )
        )}
      </ul>
      <div className="bottomBrock">
        <button className="btn allLiftBtn" onClick={() => allFalse()}>
          全解除
        </button>
        <button
          className="btn choiceLiftBtn"
          onClick={() => props.pageChange("BringList")}
        >
          戻る
        </button>
      </div>
    </>
  );
};
