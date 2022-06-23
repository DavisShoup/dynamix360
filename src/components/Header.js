import { Link } from 'react-router-dom';
import { login, logout } from '../services/firebase'; 



function Header(props) {
    const photoStyles = {
        borderRadius: '50%',
        height: '2.5rem',
        margin: '0.1rem'
    }
    return (
        <div>
            <nav className='nav'>
                <Link to="/" >
                    <div>Home</div>
                </Link>
                <Link to="/game" >
                    <div>Create</div>
                </Link>
                <Link to="/search" >
                    <div>Search</div>
                </Link>
                <div className='logo'>
                    Dynamix360
                </div>
                <ul>
                    {
                        props.user 
                        ?  (
                            <>
                                <li className='profile-list'>Welcome, {props.user.displayName}
                                <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' style={photoStyles} alt={props.user.displayName}></img>
                                </li>
                                <li onClick={logout}>Logout</li>
                            </>
                         )
                        :   <li onClick={login}>Login</li>  
                    }
                </ul>
            </nav>
        </div>
    );
}

export default Header;