// import React from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import useStore from "../store";
// import "./header.css";  
// function Header() {
//   const { isAuthenticated, logout } = useStore();
//   const navigate = useNavigate();
//   const handleLogout = () => {
//     logout();
//     navigate("/login"); 
//   };
//   return (
//     <nav className="header">
//       <NavLink to="/">Bosh sahifa</NavLink>
//       <NavLink to="/maxsulotlarpage">Maxsulotlar</NavLink>
//       <NavLink to="/addpage">Sevimlilar</NavLink>
//       <NavLink to="/korzinkapage">Savatcha</NavLink>

//       {isAuthenticated ? (
//         <button onClick={handleLogout} className="logout-btn">Chiqish</button>
//       ) : (
//         <Link to="/login" className="login-btn">Kirish</Link>
//       )}
//     </nav>
//   );
// }
// export default Header;
import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useStore from "../store";
import "./header.css";  

function Header() {
  const { isAuthenticated, logout } = useStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login"); 
  };

  return (
    <nav className="header">
      <NavLink to="/">Bosh sahifa</NavLink>
      <NavLink to="/maxsulotlarpage">Products</NavLink>
      <NavLink to="/addpage">Sevimlilar</NavLink>
      <NavLink to="/korzinkapage">Savatcha</NavLink>
      {/* <NavLink to="/productspage">Products</NavLink> */}
      {isAuthenticated ? (
        <button onClick={handleLogout} className="login-btn">Chiqish</button>
      ) : (
        <Link to="/login" className="login-btn">Kirish</Link>
      )}
    </nav>
  );
}

export default Header;

