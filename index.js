import Express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const dir = dirname(fileURLToPath(import.meta.url));

const app = Express();
const port = 3000;

app.get("/", (req,res)=>{
    res.sendFile( dir + "/public/index.html");
})




app.listen(port, ()=>{
    console.log("website running at port " + port);
})