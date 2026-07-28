import './Header.css'

function Header() {
  return(
    <header className="Header">
      <h1>
        TODAY | {new Date().toDateString()}
      </h1>
    </header>
  );
}

export default Header;