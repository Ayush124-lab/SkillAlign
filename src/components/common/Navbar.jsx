import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <span className="navbar-logo">⬡</span>
          <span className="navbar-title">SkillAlign</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
