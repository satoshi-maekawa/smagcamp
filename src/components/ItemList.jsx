import React from "react";
import campImg from "../image/campIcon.svg";

export const ItemList = (props) => {
  return (
    <>
      <div className="mainBrock">
        {/* datebaseから取ってきたデータをmapでかく */}
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
