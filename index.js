const express=require('express')
const cors=require('cors')
const app= express()
app.use(cors())

app.get("/", function(req,res){
    res.send("działa")
})

var tab=[
    {"imie":"imie","nazwisko":"nazwisko"}
]

app.get("/:imie/:nazwisko",function(req,res){
const imie=req.params.imie
const nazwisko=req.params.nazwisko
var o={"imie2":imie,"nazwisko2":nazwisko}
tab.push(o)
console.log(tab)
})


app.listen(3000)