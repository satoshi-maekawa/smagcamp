const knex = require("./knex.js");
const express = require("express");
const app = express();
const cors = require("cors")

const PORT = 8080;

app.use(cors())
app.use("/", express.static("../public"));

// ↓local環境で開発時ブラウザのセキュリティ機能により異なるオリジン間のリクエストが制限されている。
// npm install corsでミドルウェアを入れ、以下のように使用することでエラーを回避できるそです。
app.use(cors());

// ↓受信されるリクエストボディに 'application/json'というContent-Type headerがあるときにJSONをパースするミドルウェアが追加される。
// このミドルウェアが使われるときは、JSON.parseやJSON.stringifyをしなくてもよい。
app.use(express.json());

// 登録されているアイテムを全て取得するAPI
app.get("/allItems", async (req, res) => {
    const allItems = await function () {
        return knex
            .select({
                id: "id",
                itemName: "itemName",
                isBring: "isBring",
                accunt_id: "accunt_id",
                categoryName_id: "categoryName_id",
                itemPhoto_id: "itemPhoto_id",
                isComp: "isComp",
            })
            .from("itemTbl");
    };
    const result = await allItems();
    console.log("result:", result);
    res.send(result);
});

// アイテムを新規登録するAPI
app.post("/addItems", async (req, res) => {
    const { itemName, categoryName_id, accunt_id, itemPhoto } = req.body;
    //ここにあとでitemphotoTblにPostするAIPを走らせて、IDを取得する
    const addItemObj = {
        itemName: itemName,
        isBring: false,
        accunt_id: accunt_id,
        categoryName_id: categoryName_id,
        itemPhoto_id: 1, //写真の取り込み方決まってないのでとりあえずID振っちゃう
        isComp: false,
    }
    await knex("itemTbl").insert(addItemObj)
    res.send("アイテム登録完了")
});

// itemTblのisBringの値をPUTするAPI
app.put("/bringItems", async (req, res) => {


})



app.listen(PORT, () => {
    console.log(`Server is running http://localhost:${PORT}/ ⭐️⭐️`);
});
