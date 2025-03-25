import React, { useState } from "react";  // ✅ Import useState

const ControlledForm = () => {
    const [name, setName] = useState("");  // State to track input

    const handleChange = (event) => {
        setName(event.target.value);  // Updates state on typing
    };

    const handleSubmit = (event) => {
        event.preventDefault();  // Prevents page refresh
        alert(`Form submitted with name: ${name}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input type="text" value={name} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default ControlledForm;
