const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app=express();

const port = process.env.PORT || 800;
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname,"../templates/views")
const partials_path = path.join(__dirname,"../templates/partials")
app.set('view engine', 'hbs');
app.set('views',template_path);
hbs.registerPartials(partials_path);
app.use(express.static(static_path));

app.get("", (req, res) => {
   res.render("index")
});
app.get("/Student", (req, res) => {
   res.render("Student")
});
app.get("/Submit",(req, res) => {
   res.render("Submit")
});
app.listen(port,()=>{
    console.log(`listening to the port http://localhost:${port}`)
})