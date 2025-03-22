import express from "express";
import { Request, Response} from "express";


const app = express();

app.get("/", (req: Request, res: Response) => {
    res.json({
        msg: "hello"
    })
})

app.listen(3000, () => {
    console.log("server running on port 3000")
})