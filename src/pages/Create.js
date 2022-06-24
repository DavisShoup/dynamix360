import { useState } from 'react'
import { useHistory } from 'react-router-dom'


const Create = (props) => {
    const errorStyles = {
        marginTop: '6em'
         
        
    }
    const [ newGame, setNewGame ] = useState({
        name: "",
        sport: "",
        difficulty: "",
        location: "",
        date: "",
        time: "",
        description: "",
    })

const history = useHistory()

    const handleChange = (e) => {
        setNewGame({
            ...newGame,
            [e.target.name]: e.target.value
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        props.createGame(newGame);
        history.push("/search")
    }

    return (
        
        <section>

            <div className="container">
            <div className="sidebar"></div>
            <div className="new">
                {props.user &&
                <h1 className="create-header">CREATE NEW GAME</h1>
                }
                {!props.user &&
                <>                   
                    <h1>LOGIN TO CREATE A GAME!!</h1>
                    <div className="error">
                        <img  src="https://media2.giphy.com/media/l0FeaAqTD4l8fMR68/200.webp?cid=ecf05e476y2ra6oeg2l3qnkv6mcpxma52abizeuottjskvkw&rid=200.webp&ct=g" style={errorStyles} alt="" />
                    </div>
                 </>
                }
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