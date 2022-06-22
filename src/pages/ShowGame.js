import { useState } from 'react';

const ShowGame = (props) => {
    const id = props.match.params.id;
    const event = props.game.find(p => p._id === id);

    const [ editGame, setEditGame ] = useState(event);

    const handleChange = (e) => {
        setEditGame({
            ...editGame,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, sport, difficulty, location, date, time, description, _id } = editGame;
        props.updateGame({ name, sport, difficulty, location, date, time, description }, _id);
    }

    const handleRemoveGame = (id) => {
        props.deleteGame(id);
        props.history.push('/search')
    }

    return(
        <>
        <h1>{editGame.name}</h1>
        <p>Sport: {editGame.sport}</p>
        <p>Difficulty: {editGame.difficulty}</p>
        <p>Location: {editGame.locaiton}</p>
        <p>Date: {editGame.date}</p>
        <p>Time: {editGame.time}</p>
        <p>Description: {editGame.description}</p>
        <section>
            <form onSubmit={handleSubmit}>
                <input 
                value={editGame.name} 
                onChange={handleChange} 
                placeholder="name"
                name="name" 
                type="text" 
                />
                <input 
                value={editGame.sport} 
                onChange={handleChange}
                placeholder="sport" 
                name="sport" 
                type="text" 
                />
                <input 
                value={editGame.difficulty}
                onChange={handleChange}
                placeholder="difficulty"
                name="difficulty" 
                type="text" 
                />
                <input 
                value={editGame.location}
                onChange={handleChange}
                placeholder="location"
                name="location" 
                type="text" 
                />
                <input 
                value={editGame.date}
                onChange={handleChange}
                placeholder="date"
                name="date" 
                type="text" 
                />
                <input 
                value={editGame.time}
                onChange={handleChange}
                placeholder="time"
                name="time" 
                type="text" 
                />
                <input 
                value={editGame.description}
                onChange={handleChange}
                placeholder="description"
                name="description" 
                type="text"
                />
                <input 
                type="submit" 
                value="Update" />
            </form>
        </section>
        </>  
    )
}

export default ShowGame