
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import ReactUpperLower from './reactPractice/ReactUpperLower'
import About from './reactPractice/About';
import Contact from './reactPractice/Contact';

function App() {

  return (
    <>
      <div className='w-full h-full'>
        <ReactUpperLower/>
        <Contact />
        <About />
        {/* <Router> */}
          {/* <Routes> */}
            {/* <Route path="/" element={<ReactUpperLower />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
            {/* <Route path="/about" element={<About />} /> */}
          {/* </Routes> */}
        {/* </Router> */}
      </div>
    </>
  )
}

export default App
