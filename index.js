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

app.get("/about", (req,res)=>{
    res.render("about.ejs");
})

app.get("/portfolio", (req,res)=>{
    res.render("portfolio.ejs");
})

app.get("/contact", (req,res)=>{
    res.render("contact.ejs");
})



app.listen(port, ()=>{
    console.log("server running at port " + port);
})