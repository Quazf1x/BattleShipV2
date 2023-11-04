import logo from '../img/Ship.png';

function Header() {
  return (
    <header>
      <div>
        <img src={logo}/>
        <h1 id='website-name'>Battleship</h1>
      </div>
    </header>
  );
}

export default Header;