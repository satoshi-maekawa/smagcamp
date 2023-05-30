import React from "react";
import campImg from "../image/campIcon.svg";
import "../ItemList.css";

export const ItemList = (props) => {
  const pageChange = (name) => {
    props.setView(name);
  };
  return (
    <>
      <div className="mainBrock">
        {/* datebaseから取ってきたデータをmapでかく */}
      </div>
      <div className="bottomBrock">
        <button className="btn liftBtn">全解除</button>
        <button onClick={() => pageChange("ItemRegistration")} className="btn">
          アイテム追加
        </button>
        <img
          src={campImg}
          alt="campImage"
          className="campImg"
          onClick={() => pageChange("BringList")}
        ></img>
      </div>
    </>
  );
};
