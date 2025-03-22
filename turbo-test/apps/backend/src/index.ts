import express from "express"
import { BACKEND_URL } from "@repo/common/config"

const app = express();
console.log(BACKEND_URL)

app.get("/", (req, res) => {
    res.json({
        msg: "hi there"
    })
})

app.listen(3000, () => {
    console.log("server running on port 3000")
})