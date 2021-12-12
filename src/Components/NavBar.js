import React, { Component } from 'react';


export default class NavBar extends Component {
    
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/" >Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
        
       
      </ul>
     
    </div>
  </div>
</nav>
            </div>
        )
    }
}




















// import "./styles.css";

// import React, { useState } from "react";
// import Header from "./header";
// import Input from "./input";

// /**
//  * React.createElement("div")
//  * */
// export default function App() {
//   const [inputValue, setInputValue] = useState();
//   const [list, setList] = useState([]);
//   const onSubmitClickHandler = () => {
//     setList([...list, inputValue]);
//   };

//   const removeItem = (listItem) => {
//     let newList = list.filter((list) => list !== listItem);
//     setList(newList);
//   };

//   const UpdateItem = (listItem) => {
//      setList([inputValue]);
    
//   };

//   return (
//     <div className="App">
//       <Header text="My second Application Header " />
//       <Input
//         value={inputValue}
//         setInputValue={setInputValue}
//         placeholder="Type name of your student"
//         type="text"
//       />
//       <button onClick={onSubmitClickHandler}>Submit</button>

//       <div>
//         Show all the student names:
//         <ul>
//           {list.map((listItem) => {
          
//             return (
//               <li key={listItem}>
//                 {listItem} <button onClick = {() => removeItem(listItem)}>Delete This Item</button>
//                 <button onClick = {() => UpdateItem(listItem)}>Update This Item</button>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// }
