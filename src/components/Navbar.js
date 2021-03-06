import "../App.css";
import dotalogo from "../dotalogo.png";
import { Nav, Navbar } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";

export default function NavbarComponent() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" sticky="bottom" expand="sm">
        <Navbar.Brand>
          <img className="logo" src={dotalogo} />
          Dota-React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="heroes">Heroes</Nav.Link>
            <Nav.Link href="items">Items</Nav.Link>
            <Nav.Link href="playerstats">Player Stats</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
