import { useState } from 'react'

const Create = (props) => {
    const [ newGame, setNewGame ] = useState({
        name: "",
        sport: "",
        difficulty: "",
        location: "",
        description: "",
    })

    const handleChange = (e) => {
        setNewGame({
            ...newGame,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.createGame(newGame);
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input 
                value={newGame.name} 
                onChange={handleChange} 
                placeholder="name"
                name="name" 
                type="text" 
                />
                <input 
                value={newGame.sport} 
                onChange={handleChange}
                placeholder="sport" 
                name="sport" 
                type="text" 
                />
                <input 
                value={newGame.difficulty}
                onChange={handleChange}
                placeholder="difficulty"
                name="difficulty" 
                type="text" 
                />
                <input 
                value={newGame.location}
                onChange={handleChange}
                placeholder="location"
                name="location" 
                type="text" 
                />
                <input 
                value={newGame.date}
                onChange={handleChange}
                placeholder="date"
                name="date" 
                type="text" 
                />
                <input 
                value={newGame.time}
                onChange={handleChange}
                placeholder="time"
                name="time" 
                type="text" 
                />
                <input 
                value={newGame.description}
                onChange={handleChange}
                placeholder="description"
                name="description" 
                type="text"
                />
                <input 
                type="submit" 
                value="Create Game" />
            </form>
        </section>   
    );
};

export default Create