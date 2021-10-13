import { useState } from "react";
import styled from 'styled-components';
import { containerSize } from "../../alljsfiles/breakpoint";
import { FaBars } from 'react-icons/fa';
import { Link } from "react-router-dom";
const Container = styled.div`
  margin : 0 ${containerSize.marginhorizontal};
`


function Navbar() {
  return (
    <Container>
      <div className="nav_bar">
        <Link className="logo" to="/">
          Humanity
        </Link>
        <Navbar1 />
        <Link className="donate" to="/">
          Donate
        </Link>
        <Navbar2 />
      </div>
    </Container>
  );
}
function Navbar1() {
  return (
    <div className="nav_items">
      <Link to="/" className="nav_link">Home</Link>
      <Link to="/store" className="nav_link">Store</Link>
      <Link to="/available" className="nav_link">Available</Link>
      <Link to="/about" className="nav_link">About us</Link>
      <Link to="/signup" className="nav_link">Sign up</Link>
    </div>
  );
}
function Navbar2() {
  const [toggle, settoggle] = useState(true);
  const togglebtn = ()=>{
      settoggle(!toggle);
  }
//   "nav_items1"
  return (
    <div className={toggle?"nav_items2":"nav_items1"} onClick={togglebtn}>
      {/* <FontAwesomeIcon icon={faBars} size="2x" className="bars" /> */}
      <FaBars size="30px" className="bars"/>
      <Link to="/" className="nav_link1">Home</Link>
      <Link to="/store" className="nav_link1">Store</Link>
      <Link to="/available" className="nav_link1">Available</Link>
      <Link to="/about" className="nav_link1">About us</Link>
      <Link to="/signup" className="nav_link1">Sign up</Link>
    </div>
  );
}


export default Navbar
