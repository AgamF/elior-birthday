import './Navbar.css';

const Navbar = ({ gotoDevHistory, gotoHome, gotoSecretMessage }) => {
    return (
        <div className="navbar">
            <a onClick={gotoHome}>Home</a>
            <a onClick={gotoDevHistory}>Dev History</a>
            <a onClick={gotoSecretMessage}>Secret Message</a>
        </div>
    )
}

export default Navbar;