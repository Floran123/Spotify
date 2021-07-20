import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

let Genres = () => {
    const [genres, setGenres] = useState(null);

    useEffect(() => {
        const genres = require('./genres.json');
        setGenres(genres);
    }, []);

    if(genres) {
        return (
            <div>
                {genres.map(gen => 
                    <Link to={() => `/genre/${gen.id}`} key={gen.id}>
                        <h2>{gen.name}</h2>
                    </Link>
                )}
            </div>
        )
    }
    return <div></div>
}

export default Genres;