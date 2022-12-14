import React, { useState, useEffect } from 'react';
import Movies from '../components/Movies'
function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const json = await (await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year')).json();
        setMovies(json.data.movies);
        setLoading(false);
    }
    useEffect(() => {
        getMovies()
    }, []);
    return (
        <div className='App'>
            <div id='container'>
                {loading ?
                    <h1>로딩중...</h1> :
                    <div className="movies">
                        {movies.map((movie) =>
                            <Movies key={movie.id} smallCoverIimage={movie.small_cover_image} mediumCoverIimage={movie.medium_cover_image} title={movie.title} genres={movie.genres} summary={movie.summary} />
                        )}
                    </div>
                }
            </div>
        </div>
    )
}
export default Home;