import Express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const dir = dirname(fileURLToPath(import.meta.url));

const app = Express();
const port = 3000;



app.use(Express.static("public"));



app.get("/", (req,res)=>{
    res.render("index.ejs");
    // res.sendFile(dir + "/views/main.html");
})




app.listen(port, ()=>{
    console.log("server running at port " + port);
})