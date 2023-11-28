import Credits from './pages/Credits';
import Watch from './pages/Watch';
import Similler from './pages/Similler';
import Upcoming from './pages/Upcoming';
import "../MoviesPage/Styles/Header.css";
import Header from "../MoviesPage/Components/Header";
import Footer from '../MoviesPage/Components/Footer';

function WatchPage() {
    return (
        <div>
            <Header />
        
            <Watch />
            <Credits/>
            <Similler/>
            <Upcoming/>
            <Footer/>
        </div>
    );
}

export default WatchPage;