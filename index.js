import Express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import  BodyParser  from "body-parser";
import bodyParser from "body-parser";
const dir = dirname(fileURLToPath(import.meta.url));

const app = Express();
const port = 3000;



app.use(Express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


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


app.post("/submit", (req,res)=>{
    console.log(req.body);
    res.redirect("/contact")
})



app.listen(port, ()=>{
    console.log("server running at port " + port);
})