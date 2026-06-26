const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    clientName: { type: String, required: true },
    service: { type: String, required: true },
   // في ملف Booking.js
    date: { type: String, required: true }, // بدلي Date بـ String
    time: { type: String, required: true } // هاد السطر ضروري يكون هنا
});

module.exports = mongoose.model('Booking', bookingSchema);