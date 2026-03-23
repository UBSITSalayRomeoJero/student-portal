import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <div className="container"> 
                <Link className="navbar-brand" to="/">Student Portal</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="contact">Contact</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="services">Services</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="bookrequest">Book Request</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="eventfeedback">Event Feedback</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>
    );
}

export default Navbar;