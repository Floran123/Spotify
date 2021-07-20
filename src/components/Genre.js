import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

let Genre = () => {
    const [genre, setGenre] = useState(null);
    const { id } =  useParams();

    useEffect(() => {
        const genres = require('./genres.json');
        setGenre(genres.find((e) => e.id === id));
    }, []);

    if(genre) {
        return (
            <div>
                <h2>{genre.name}</h2>
                {genre.albums.map(album => (
                    <Link to={() => `/album/${album.id}`} key={album.id}>
                        <h3>{album.name}</h3>
                        <img src={album.cover_small} />
                    </Link>
                ))}
            </div>
        )
    }
    return <div></div>
}

export default Genre;