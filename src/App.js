import {useEffect, useState} from "react";
import './App.css'
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

//66b304f9

const API_URL ="http://www.omdbapi.com/?apikey=66b304f9"

const App = () => {
    const [movies, setMovies] = useState([])
    const [searchValue, setSearchValue] = useState([])


    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json()
        console.log(data.Search)
        setMovies(data.Search)
        
    }
    useEffect(() => {
        
        // if(searchValue.length>=3)
        // {
        //     searchMovies(searchValue)
        // }

        searchMovies("batman");
    }, []);
    
    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <form onSubmit={(e)=>{e.preventDefault()
                    searchMovies(searchValue)}}>
                <input placeholder="Search for movies"
                value={searchValue}
                onChange={(e)=>setSearchValue(e.target.value)}
                // onChange={(e)=> { setSearchValue(e.target.value)}}
                />
                <img
                    src={SearchIcon}
                    alt="Search"
                    onClick={() =>{searchMovies(searchValue)}}
                />
                </form>
            </div>
            {
                    movies.length > 0 ? (
                        <div className="container">
                            {movies.map((movie)=>(
                            <MovieCard movie1={movie}/>
                            ))}
                        </div>
                    ):
                    (
                        <div className="empty">
                        <h2>No movies Found</h2>
                        </div>
                    )
            }
        </div>
    );
}


export default App;