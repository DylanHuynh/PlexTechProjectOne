
const express = require("express")
const fs = require("fs")
const app = express()
const cors = require('cors')


const port = 7070
//array of recipe objects
let arrayOfFood = [
    {name: "Spaghetti", ingredient: ["Tomatoes","Noodles"]},
    {name: "Pizza", ingredient: ["Anchovies","Sausage","Mushrooms"]},
    {name: "Yogurt", ingredient: ["Milk","Bacteria"]},

]

app.get("/", (req,res) => {
    res.write("Yo whats up")
    res.end()
    //res.send = res.write + res.end in one
})



app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

//export json through app.post --> then you can have react fetch data
app.get('/getAllRecipes', cors(), (req,res) => {
    //create json here
    const jsonVar = arrayOfFood;
    res.send(JSON.stringify(jsonVar));
})
