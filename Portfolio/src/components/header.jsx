import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1> My portfolio</h1>
      <nav>
        <Link to="/">About Me</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact" >Contact</Link>
        <Link to="/resume" >Resume</Link>
      </nav>
    </header>
  );
};

export default Header;