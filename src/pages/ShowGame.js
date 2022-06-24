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
        <div className='game'>
            {!props.user &&
            <>
            <div className='non-user-show'>
                <h1>{event.name}</h1>
                <p><b>Sport:</b><br/>{event.sport}</p>
                <p><b>Location:</b><br/>{event.location}</p>
                <p className='non-user-message'><b>LOGIN TO SEE MORE INFO ABOUT THE GAME!!</b><br/></p>
                </div>
            </>
            }
            {props.user &&
            <>
            <div className='show-game-background'>
                <h1>{event.name}</h1>
                <p><b>Sport:</b><br/>{event.sport}</p>
                <p><b>Location:</b><br/>{event.location}</p>
                <p><b>Date:</b><br/>{event.date}</p>
                <p><b>Time</b>:<br/>{event.time}</p>
                <p><b>Difficulty:</b><br/>{event.difficulty}</p>
                <p><b>Description:</b><br/>{event.description}</p>
                <button onClick={() => handleRemoveGame(event._id)}>Delete</button>
                
                </div>
            </>
} 

            {props.user &&
                    <section>
                        <div className='edit-container'>
                            <div className='edit-sidebar'></div>
                            <div className='edit'>
                                <h1 className='edit-header'>Edit Game</h1>
                        <form onSubmit={handleSubmit}>
                            <fieldset className='edit-info'>
                            <input className="edit-input"
                            value={editGame.name} 
                            onChange={handleChange} 
                            placeholder="name"
                            name="name" 
                            type="text" 
                            />
                            <input className="edit-input"
                            value={editGame.sport} 
                            onChange={handleChange}
                            placeholder="sport" 
                            name="sport" 
                            type="text" 
                            />
                            <input className="edit-input"
                            value={editGame.difficulty}
                            onChange={handleChange}
                            placeholder="difficulty"
                            name="difficulty" 
                            type="text" 
                            />
                            <input className="edit-input"
                            value={editGame.location}
                            onChange={handleChange}
                            placeholder="location"
                            name="location" 
                            type="text" 
                            />
                            <input className="edit-input"
                            value={editGame.description}
                            onChange={handleChange}
                            placeholder="description"
                            name="description" 
                            type="text"
                            />
                            <input className="edit-input"
                            value={editGame.date}
                            onChange={handleChange}
                            placeholder="date"
                            name="date" 
                            type="text"
                            />
                            <input className="edit-input"
                            value={editGame.time}
                            onChange={handleChange}
                            placeholder="time"
                            name="time" 
                            type="text"
                            />
                            <input className="edit-input"
                            type="submit" 
                            value="Update Changes" />
                            </fieldset>
                        </form>
                        </div>
                        </div>
                    </section>   
              }
        </div>
    )
}
export default ShowGame