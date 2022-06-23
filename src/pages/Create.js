import { useState } from 'react'


const Create = (props) => {
    const [ newGame, setNewGame ] = useState({
        name: "",
        sport: "",
        difficulty: "",
        location: "",
        date: "",
        time: "",
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

            <div className="container">
            <div className="sidebar"></div>
            <div className="new">
                <h1 className="create-header">CREATE NEW GAME</h1>
            { props.user &&
            <form onSubmit={handleSubmit}>
                <fieldset className="game-info">
                <input className="create-input"
                value={newGame.name} 
                onChange={handleChange} 
                placeholder="name"
                name="name" 
                type="text" 
                />
                <input className="create-input"
                value={newGame.sport} 
                onChange={handleChange}
                placeholder="sport" 
                name="sport" 
                type="text" 
                />
                <input className="create-input"
                value={newGame.difficulty}
                onChange={handleChange}
                placeholder="difficulty"
                name="difficulty" 
                type="text" 
                />
                <input className="create-input"
                value={newGame.location}
                onChange={handleChange}
                placeholder="location"
                name="location" 
                type="text" 
                />
                <input className="create-input"
                value={newGame.date}
                onChange={handleChange}
                placeholder="date"
                name="date" 
                type="text" 
                />
                <input className="create-input"
                value={newGame.time}
                onChange={handleChange}
                placeholder="time"
                name="time" 
                type="text" 
                />
                <input className="create-input"
                value={newGame.description}
                onChange={handleChange}
                placeholder="description"
                name="description" 
                type="text"
                />
                <input className="create-input"
                type="submit" 
                value="Create Game" />
                </fieldset>
            </form>
       
}
        </div>
        </div>
   </section>  
    );
};

export default Create