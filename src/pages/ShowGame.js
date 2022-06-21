

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
        const { name, sport, difficulty, location, description, _id } = editGame;
        props.updateGame({ name, sport, difficulty, location, description }, _id);
    }

    const handleRemoveGame = (id) => {
        props.deleteGame(id);
        props.history.push('/search')
    }

    return(
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
                value={editGame.description}
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
    )
}

export default ShowGame