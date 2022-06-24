const Home = (props) => {
    return (
        <div className="homepage">
            <div class="box">
                    <h2>Welcome to Dynamix360</h2>
                <p className="home-info">
                      This was app made to connect people and sport with local pick-up games promoting physical activities in your community!
                </p>
            </div>

            <h1 className="team">The Team</h1>

            <div className="Picture">

                <div className="members">
                    <h2 >Davis Shoup</h2>
                    <img
                        src="https://avatars.githubusercontent.com/u/102043547?v=4"
                        className="box-img"
                        alt="..."
                    />

                    <div className="links">
                        <a href="https://github.com/DavisShoup" target="_blank" rel="noopener noreferrer">
                            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968866.png" className="git" alt="..." />
                        </a>
                        <a href="https://www.linkedin.com/in/davisshoup/" target="_blank" rel="noopener noreferrer">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png" className="linked" alt="..." type="button" />
                        </a>
                    </div>
                </div>

                <div className="members">
                    <h2 >Ahmed Almusawi</h2>
                    <img
                        src="https://avatars.githubusercontent.com/u/99525608?v=4"
                        className="box-img"
                        alt="..."
                    />

                    <div className="links">
                        <a href="https://github.com/Ahmeda99" target="_blank" rel="noopener noreferrer">
                            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968866.png" className="git" alt="..." />
                        </a>
                        <a href="https://www.linkedin.com/in/ahmedalmusawi/" target="_blank" rel="noopener noreferrer">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png" className="linked" alt="..." type="button" />
                        </a>
                    </div>
                </div>

                <div className="members">
                    <h2 >Anasemos Kassahun</h2>
                    <img
                        src="https://avatars.githubusercontent.com/u/91226782?v=4"
                        className="box-img"
                        alt="..."
                    />

                    <div className="links">
                        <a href="https://github.com/anasemo234" target="_blank" rel="noopener noreferrer">
                            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968866.png" className="git" alt="..." />
                        </a>
                        <a href="https://www.linkedin.com/in/anasemos-kassahun/" target="_blank" rel="noopener noreferrer">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png" className="linked" alt="..." type="button" />
                        </a>
                    </div>
                </div>

                <div className="members">
                    <h2 >Benjamin Nyarko</h2>
                    <img
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                        className="box-img"
                        alt="..."
                    />

                    <div className="links">
                        <a href="https://github.com/bnyarko06" target="_blank" rel="noopener noreferrer">
                            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968866.png" className="git" alt="..." />
                        </a>
                        <a href="https://www.linkedin.com/in/benjamin-nyarko-40027b23b/" target="_blank" rel="noopener noreferrer">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png" className="linked" alt="..." type="button" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;