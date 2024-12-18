const express = require('express');
const mongose = require('mongoose')
const app = express();
const Product  = require('./module/shema.js')
const cors = require('cors')
const fs = require('fs')
const path = require('path'); 
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); 
app.use(cors({
    origin: '*', // يسمح بالوصول من أي مصدر. يمكنك استبدال * بمصدر محدد.  
})); 
let url = "mongodb+srv://yazanaltonji:yazanaltonji0123@cluster0.fz4b9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongose.connect(url,{
})
.then(()=>{
    app.listen("3000", () => {
        console.log("connected to server 3000 succesfully")
    })
    console.log("connected to mongoose succesfully")
}).catch((err)=>{
console.log("an error when conected to date base : "+err)
})


//app.get("/product/:nam",async (req,res)=>{
    /*
    const name = req.params.nam;
    const products = await Product.findOne({ name });
    if (!products) {
        res.send("no file there")
    }
    else {*/
        //        res.json(products);
  //      res.sendFile(path.join(__dirname, 'product.html')); 
    //}
    
//})
app.get("/:id", async (req, res) => {
    
    const name = req.params.id;
    const nameproduct = await Product.findOne({ name });
    if (!nameproduct) {
        res.send("no file there")
    }
    else{
    console.log("products", nameproduct)
    res.sendFile(path.join(__dirname, 'public','product.html')); 
    }
})

app.get("/",async (req,res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
})

// الحصول على جميع المنتجات  
app.get("/products/all",async (req, res)=> {
    const products = await Product.find();
    res.send(products);
});

// إضافة منتج جديد  
app.post("/newproduct",async(req, res)=> {
    const { name, price, description, storage, ps1, ps2, ps3, ps4, ps5,video,count } = req.body;
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error adding product', error });
    } 
});
//البحث عن المنتج بواسطة الاسم 
app.get("/productbyname/:nam",async (req, res) => {
    const name = req.params.nam;
        const products = await Product.findOne({name});
        if(!products){
            res.send("no file there")
        }
        else{
            res.json(products);
        }
})

// معالجة إعجاب لمنتج  
app.post("/:name/like",async (req, res) => {
    try {
        const product = await Product.findOneAndUpdate(
            { name: req.params.name }, // البحث باستخدام الاسم  
            { $inc: { likes: 1 } },    // زيادة عدد الإعجابات  
            { new: true }              // إعادة الوثيقة المحدثة  
        );

        if (!product) {
            return res.status(404).send({ message: "Product not found" }); // إذا لم يوجد منتج  
        }

        res.send(product); 
    } catch (error) {
        res.status(500).send({ message: "Error updating likes" }); // معالجة الأخطاء  
    }
}); 

// حذف المنتج
app.delete("/delete/:id",async (req, res) =>{
    const product = await Product.findByIdAndDelete(
        req.params.id
    );
    if(!product){
        return res.status(404).send('no file there');
    }
    else {
        res.send(product)
        console.log(`the product ${product.name} has been succesfully deleted`)
    }
});
//تخزين اسم المنتج بشكل موقت

app.patch("/nameproduct/:id",async (req, res) => {
    const spectifyid = "66f44068479291389f1819fa";
const updatedproduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
    runValidators: true
});  
    res.json(updatedproduct);
});
/*هام جدا للمشروع

*/