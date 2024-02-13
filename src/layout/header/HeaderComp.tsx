import Logo from '../../common/logo/Logo';
import Login from '../../common/login/Login';
import './HeaderComp.css';

const Header = () => {
  return (
    <header>
      <nav className="nav-wrapper">
        <Logo />
        <Login />
      </nav>
    </header>
  );
};

export default Header;
