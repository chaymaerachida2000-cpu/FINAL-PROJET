const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Booking = require('./Booking'); 

const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// الميدل وير ديال التيست (باش نعرفو شنو كيوقع في التيرمينال)


// الاتصال بـ MongoDB
const dbURI = 'mongodb://chaymaerachida2000_db_user:said2020@ac-ujor9df-shard-00-00.vjgi61x.mongodb.net:27017,ac-ujor9df-shard-00-01.vjgi61x.mongodb.net:27017,ac-ujor9df-shard-00-02.vjgi61x.mongodb.net:27017/?ssl=true&replicaSet=atlas-8i93bp-shard-0&authSource=admin&appName=Cluster0';

mongoose.connect(dbURI)
  .then(() => console.log("✅ Connected to Database successfully!"))
  .catch((err) => console.error("❌ Database Connection Error:", err.message));
  app.use((req, res, next) => {
    console.log(`📥 Received ${req.method} request to ${req.url}`);
    next();
});

// 1. الـ Route ديال تسجيل الحجوزات (POST)
app.post('/add-booking', async (req, res) => {
    try {
        const newBooking = new Booking(req.body);
        await newBooking.save();
        res.status(201).send("✅ Booking added successfully!");
    } catch (err) {
        res.status(400).send("❌ Error: " + err.message);
    }
});

// 2. الـ Route ديال عرض الحجوزات (GET)
app.get('/bookings', async (req, res) => {
    try {
        const allBookings = await Booking.find();
        res.status(200).json(allBookings);
    } catch (err) {
        res.status(500).send("❌ Error fetching bookings: " + err.message);
    }
});

// الـ Route الرئيسي
app.get('/', (req, res) => {
    res.send("Server is running!");
});

const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});