// import React from "react";
// import ReactDom from "react-dom";


// class App extends React.Component {
//   render() {
//     return (
//       <>
//       <div className="container">
        


//       </div>
//       </>
//     );
//   }
// }

// export default App;

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Product from"./components/Product";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Product />
      </div>
    );
  }
}

export default App;

