import React from "react";
import campImg from "../image/campIcon.svg";
import picture from "../image/picture.svg";
export const ItemList = (props) => {
  let user = localStorage.getItem("user");
  const logout = () => {
    props.pageChange("Login");
    localStorage.removeItem("user");
  };

  const showTable = (e) => {
    const targetTable = e.target.nextElementSibling;
    targetTable.classList.toggle("none");
  };

  // const putBringList = async()=>{
  //   try {

  //   } catch (error) {

  //   }
  // }

  return (
    <>
      <div className="headerBrock">
        <p>Welcome {user}</p>
        <button className="btn logOutBtn" onClick={logout}>
          Log out
        </button>
      </div>
      <div className="mainBrock">
        {props.allItems.map(
          (el, index) =>
            el.length !== 0 && (
              <>
                <p className="categoryTitle" onClick={showTable}>
                  {index === 0
                    ? "ギア"
                    : index === 1
                    ? "食材"
                    : index === 2
                    ? "調理器具"
                    : "日用品"}
                </p>
                <table border="1" key={index} className="none">
                  <thead>
                    <tr>
                      <th>写真</th>
                      <th>名前</th>
                      <th>持ってく？</th>
                    </tr>
                  </thead>

                  <tbody>
                    {el.map((el2, index2) => (
                      <tr key={index2}>
                        <td align="center">
                          <img
                            src={picture}
                            alt="pictureImg"
                            className="btn pictureBtn"
                          ></img>
                        </td>
                        <td align="center">
                          <p className="allItemName">{el2.itemName}</p>
                        </td>
                        <td align="center">
                          <label className="toggle-button-001">
                            <input
                              type="checkbox"
                              className="allItemBringCheck"
                            />
                          </label>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )
        )}
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
