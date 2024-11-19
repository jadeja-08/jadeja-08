import React, { useState } from "react";

const App = () => {
    const [form, setForm] = useState({ name: "", date: "", seats: 1 });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/book", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });
        const data = await response.json();
        alert(data.message);
    };

    return (
        <div>
            <h1>Bus Ticket Booking</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
                <input type="date" name="date" onChange={handleChange} required />
                <input type="number" name="seats" placeholder="Seats" onChange={handleChange} required />
                <button type="submit">Book</button>
            </form>
        </div>
    );
};

export default App;
