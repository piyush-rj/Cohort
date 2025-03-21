import express from "express";
// @ts-ignore
import { BACKEND_URL } from "@repo/typescript-config/common"
console.log(BACKEND_URL);

const app = express();

app.get("/", (req, res)=> {
    res.json({
        msg: "hello world"
    })
})

app.listen(3000, () => {
    console.log("running on 3000")
})