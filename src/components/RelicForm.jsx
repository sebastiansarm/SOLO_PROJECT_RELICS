import React, { useState } from 'react';

const RelicForm = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [origin, setOrigin] = useState("");
    const [shape, setShape] = useState("");
    
    const origins = ["MERCURY", "VENUS", "MIAMI", "MARS", "JUPITER", "SATURN", "URANUS", "PLUTO", "NEPTUNE"];
    const shapes = ["CUBE", "CYLINDER", "AMULET", "FIGURINE", "OTHER SOMESUCH"]

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({
            name: name,
            description: description,
            origin: origin,
            shape: shape
        })
    };

    return (
        <div>
            <h1>Let's Make A Record of That Relic, BABY!!!</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder=""/>
                </label>
                <label>
                    Description:
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                </label>
                <label>
                    Origin: 
                    <select value={origin} onChange={e => setOrigin(e.target.value)}>
                        {origins.map((o, i) => <option key={i} value={o}>{o}</option>)}
                    </select>
                </label>
                <label>
                    Shape: 
                    <select value={shape} onChange={e => setShape(e.target.value)}>
                        {shapes.map((o, i) => <option key={i} value={o}>{o}</option>)}
                    </select>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}


export default RelicForm;