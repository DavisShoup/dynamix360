import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <div>
            <nav className='nav'>
                <Link to="/" >
                    <div>Home</div>
                </Link>
                <Link to="/create" >
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