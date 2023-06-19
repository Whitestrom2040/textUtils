
// import React from 'react'
// import NavBar from './components/NavBar'
// import NewsUpdate from './components/NewsUpdate'

// const App = () => {
//   return (
//     <div>
//       <NavBar />
//       <NewsUpdate />

//     </div>
//   )
// }

// export default App


import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import NewsUpdate from './components/NewsUpdate';


export default class App extends Component {
  render() {
    return (
      <div>
          <NavBar/>
          <NewsUpdate/>
      </div>
    )
  }
}
