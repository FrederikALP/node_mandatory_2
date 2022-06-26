import mongoose from "mongoose";
import Shop from "../schema/shop.js";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect("mongodb+srv://"+process.env.MONGO_USER+":"+process.env.MONGO_PASSWORD+"@"+process.env.MONGO_CONNECTSTRING+"?retryWrites=true&w=majority");
const db = mongoose.connection;
db.on('Error', console.log.bind(console, "DB connection error"));
db.once('open', function(callback) {
    console.log("DB connection established");
});

const seedShop = [
{
    itemname: "banana",
    category: "fruit",
    Price: 50
},
{
    itemname: "apple",
    category: "fruit",
    Price: 25
 },
 {
    itemname: "tshirt",
    category: "merch",
    Price: 100
 },
 {
    itemname: "keychain",
    category: "merch",
    Price: 45
},
{
    itemname: "good grades",
    category: "course",
    Price: 50000
 },
 {
    itemname: "bad grades",
    category: "course",
    Price: 1
 }
];


const seedDB = async () => {
    await Shop.deleteMany({});
    await Shop.insertMany(seedShop);
};

seedDB().then(() => {
    mongoose.connection.close();
})