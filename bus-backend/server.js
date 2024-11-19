const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/busBooking", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const bookingSchema = new mongoose.Schema({
    name: String,
    date: String,
    seats: Number,
});

const Booking = mongoose.model("Booking", bookingSchema);

app.post("/book", async (req, res) => {
    const booking = new Booking(req.body);
    await booking.save();
    res.json({ message: "Ticket booked successfully!" });
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
