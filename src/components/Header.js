import logo from '../images/logo.svg';

function Header() {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="логотип 'Mesto'" />
    </header>
  );
}

export default Header;
