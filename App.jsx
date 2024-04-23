import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import MovieList from './components/movielist/MovieList'
import Movie from './components/moviedetail/Movie'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
    <Router>
      <Header />
      <Routes>
        <Route index element = {<Home/>}></Route>
        <Route path="movie/:id" element ={<h1>{<Movie/>}</h1>}></Route>
        <Route path="movies/:type" element ={<h1>{<MovieList/>}</h1>}></Route>
        <Route path = "/*" element ={<h1>Error page</h1>} ></Route>
      </Routes>
    </Router>
    </div>
  )
}

export default App
