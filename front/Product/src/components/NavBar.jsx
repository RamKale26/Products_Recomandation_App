// import React, { Component } from "react";
// import { FaUser, FaHeart, FaShoppingBag, FaSearch } from "react-icons/fa";


// class NavBar extends Component {
//   render() {
//     const menuItems = [
//       "MEN",
//       "WOMEN",
//       "KIDS",
//       "HOME",
//       "BEAUTY",
//     ];

//     return (
//       <nav className="navbar navbar-expand-lg bg-white shadow-sm px-4 py-2">
//         {/* Logo */}
//         <a className="navbar-brand me-4" href="#">
         

//             <h2>QuikCart</h2>

//         </a>

//         {/* Menu Items */}
//         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//           {menuItems.map((item, index) => (
//             <li className="nav-item mx-2" key={index}>
//               <a className="nav-link fw-bold text-dark" href="#">
//                 {item}
//                 {item === "STUDIO" && (
//                   <sup className="text-danger ms-1 fw-semibold">NEW</sup>
//                 )}
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* Search Bar */}
//         <form className="d-flex align-items-center mx-3 flex-grow-1" style={{ maxWidth: "400px" }}>
//           <div className="input-group">
//             <span className="input-group-text bg-light border-0">
//               <FaSearch />
//             </span>
//             <input
//               type="text"
//               className="form-control border-0 bg-light"
//               placeholder="Search for products, brands and more"
//             />
//           </div>
//         </form>

//         {/* Icons */}
//         <div className="d-flex gap-4">
//           <div className="text-center">
//             <FaUser className="icon-size mb-1" />
//             <div className="icon-label">Profile</div>
//           </div>
//           <div className="text-center">
//             <FaHeart className="icon-size mb-1" />
//             <div className="icon-label">Wishlist</div>
//           </div>

//         </div>
//       </nav>
//     );
//   }
// }

// export default NavBar;

import React, { Component } from "react";
import { FaUser, FaHeart, FaShoppingBag, FaSearch } from "react-icons/fa";

class NavBar extends Component {
  constructor(props) {
    super(props);
    // Hardcoded role for now (can be 'user' or 'admin')
    this.state = {
      role: "user", // Change this to 'admin' to test admin dropdown
      showDropdown: false,
    };
  }

  toggleDropdown = () => {
    this.setState((prevState) => ({
      showDropdown: !prevState.showDropdown,
    }));
  };

  render() {
    const menuItems = ["MEN", "WOMEN", "KIDS", "BEAUTY"];
    const { role, showDropdown } = this.state;

    return (
      <nav className="navbar navbar-expand-lg bg-white shadow-sm px-4 py-2">
        {/* Logo */}
        <a className="navbar-brand me-4" href="#">
          <h2>QuikCart</h2>
        </a>

        {/* Menu Items */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {menuItems.map((item, index) => (
            <li className="nav-item mx-2" key={index}>
              <a className="nav-link fw-bold text-dark" href="#">
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Search Bar */}
        <form
          className="d-flex align-items-center mx-3 flex-grow-1"
          style={{ maxWidth: "600px" }}
        >
          <div className="input-group">
            <span className="input-group-text bg-light border-0">
              <FaSearch />
            </span>
            <input
              type="text"
              className="form-control border-0 bg-light"
              placeholder="Search for products, brands and more"
            />
          </div>
        </form>

        {/* Icons */}
        <div className="d-flex gap-4 position-relative">
          {/* Profile Dropdown */}
          <div className="text-center" onClick={this.toggleDropdown} style={{ cursor: "pointer" }}>
            <FaUser className="icon-size mb-1" />
            <div className="icon-label">Profile</div>

            {/* Dropdown */}
            {showDropdown && (
              <div
                className="dropdown-menu show position-absolute"
                style={{
                  top: "100%",
                  right: 0,
                  zIndex: 999,
                  minWidth: "150px",
                  boxShadow: "0 0 5px rgba(0,0,0,0.2)",
                }}
              >
                {role === "admin" ? (
                  <>
                    <a className="dropdown-item" href="#">Admin Dashboard</a>
                    <a className="dropdown-item" href="#">Manage Users</a>
                    <a className="dropdown-item" href="#">Logout</a>
                  </>
                ) : (
                  <>
                    <a className="dropdown-item" href="#">admin</a>
                    <a className="dropdown-item" href="#">user</a>
                    {/* <a className="dropdown-item" href="#">Logout</a> */}
                  </>
                )}
              </div>
            )}
          </div>

          {/* Wishlist */}
          <div className="text-center">
            <FaHeart className="icon-size mb-1" />
            <div className="icon-label">Wishlist</div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;

