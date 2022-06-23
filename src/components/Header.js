import { Link } from 'react-router-dom';

function Header(props) {
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
            </nav>
        </div>
    );
}

export default Header;