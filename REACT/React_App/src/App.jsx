import './App.css'
import Navbar from './Navbar'
import Course from './Course'
import Footer from './Footer'
import html from './assets/HTML.png'
import css from './assets/CSS.png'
import js from './assets/JS.png'



function App() {

  return (
    <>
    <Course name='HTML' price='$199' image={html}/>
    <Course name='CSS' price='$199' image={css}/>
    <Course name='JS' price='$499' image={js} />
    </>

  )
}

export default App
