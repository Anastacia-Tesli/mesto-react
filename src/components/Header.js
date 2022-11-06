import logo from '../images/Vector.svg';

function Header() {
    return (
    <header className="header">
           <img className="header__logo" src={logo} alt="Логотип приложения Место" />
    </header>
    )
}

export default Header