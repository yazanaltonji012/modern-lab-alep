const express = require('express');
const mongose = require('mongoose')
const app = express();
const Product  = require('./module/shema.js')
const cors = require('cors')
const fs = require('fs')
const functions = require('firebase-functions');
app.use(express.json());
app.use(cors({
    origin: '*', // يسمح بالوصول من أي مصدر. يمكنك استبدال * بمصدر محدد.  
})); 
/*exports.app = functions.https.onRequest(app);
const admin = require('firebase-admin');
const serviceAccount = require('C:\Users\yazan\Desktop\Projects\waraalsyahi\firebase.json'); // Replace with your service account key file

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://modern-lab-alepp.firebaseio.com' // Replace with your Firebase project ID
});
*/
let url = "mongodb+srv://yazanaltonji:yazanaltonji0123@cluster0.fz4b9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongose.connect(url,{
})
.then(()=>{
    console.log("connected to mongoose succesfully")
}).catch((err)=>{
console.log("an error when conected to date base : "+err)
})

app.listen("https://modern-lab-alepp.web.app", () => {
    console.log("connected to server 3000 succesfully")
})
// الحصول على جميع المنتجات  
exports.getproduct = functions.https.onRequest(async (req, res)=> {
    const products = await Product.find();
    res.send(products);
});

// إضافة منتج جديد  
exports.newProduct = functions.https.onRequest( async(req, res)=> {
    const { name, price, description,storage } = req.body;

    try {
        const newProduct = new Product({ name, price, description, storage });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error adding product', error });
    } 
});
//البحث عن المنتج بواسطة الاسم 
exports.findproduct = functions.https.onRequest(async (req, res) => {
    const name = req.params.nam;
    const spectifyid = "66f4293c73764c2e4ad765a6"
        const products = await Product.findOne({name});
        if(!products){
            res.send("no file there")
        }
        else{
            res.json(products);
        }
})

// معالجة إعجاب لمنتج  
exports.likes = functions.https.onRequest(async (req, res) => {
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
exports.deleteproduct =  app.functions.https.onRequest(async (req, res) =>{
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

exports.storage = app.functions.https.onRequest(async (req, res) => {
const updatedproduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
    runValidators: true
});  
    res.json(updatedproduct);
});
/*هام جدا للمشروع

*/