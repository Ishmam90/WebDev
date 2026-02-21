import express from "express";
const app=express();
const port=4500;

app.get("/", (req, res) =>{
    res.send("Hello World");
});

app.get("/about", (req, res) =>{
    res.send("About Section");
});

app.get("/contact", (req, res) =>{
    res.send("Contact Info");
});

app.listen(port, () =>{
    console.log(`Server running on ${port}`);
});