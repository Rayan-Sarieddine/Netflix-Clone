import netflixImg from '../rachad assets/netflix-logo.png'

function Header() {
    return (
        <div className='R-header-container'>
            <img className='R-netflix-img' src={netflixImg} />
            <div className='R-nav'>
                <p className='R-unlimited'>UNLIMITED TV SHOWS & MOVIES</p>
                <button className='R-join-now'>JOIN NOW</button>
                <button className='R-sign-in'>SIGN IN</button>
            </div>
        </div>
    );
}

export default Header;