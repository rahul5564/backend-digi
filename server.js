
const express = require('express')
const mongoose = require('mongoose');
const Product = require("./models/productModel")
const cors = require("cors")
const app = express();

// app.use('/',Route)

app.use(cors());

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get("/", (req,res) => {
    res.send("Heyyyy mann")
})

app.get("/products", async (req,res) => {
    try{
        const products = await Product.find({})
        res.status(200).json(products)
    }catch(err){
        console.log(err,"errrrrrr")
        res.status(500).json({message:err.message})
    }
})

app.get("/products/:id", async (req,res) => {
    try{
        const {id} = req.params;
        const products = await Product.findById(id);
        res.status(200).json(products)
    }catch(err){
        console.log(err,"errrrrrr")
        res.status(500).json({message:err.message})
    }
})


app.post("/Products/post", async (req,res) => {
    try{
        const products = await Product.create(req.body)
        console.log("ppp",products);
        res.status(200).json(products)
    }catch(err){
        console.log(err,"errrrrrr")
        res.status(500).json({message:err.message})
    }
})

app.put("/products/:id", async (req,res) => {
    try{
        const {id} = req.params;
        const products = await Product.findByIdAndUpdate(id,req.body);
        if(!products){
         return res.status(404).json({message:`Cannot find an id with ${id}`})
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct)
    }catch(err){
        console.log(err,"errrrrrr")
        res.status(500).json({message:err.message})
    }
})


app.delete("/products/:id", async (req,res) => {
    try{
        const {id} = req.params;
        const products = await Product.findByIdAndDelete(id,req.body);
        if(!products){
         return res.status(404).json({message:`Cannot find an id with ${id}`})
        }
        res.status(200).json(products)
    }catch(err){
        console.log(err,"errrrrrr")
        res.status(500).json({message:err.message})
    }
})


mongoose.connect('mongodb+srv://root:Rahul3434@cluster0.bcxlflm.mongodb.net/testdata')
.then(() => {
    console.log("connected to Mongoooooo");

    app.listen(8000, () => {
        console.log("Hello Rahullllllllllllllllll");
    });
    
}).catch((err) => {
    console.log("error");
})

console.log("heyaa");