import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

let Artist = () => {
    const [artist, setArtist] = useState(null);
    let { id } = useParams();

    useEffect(() => {
        let artist = require('./artists.json');
        setArtist(artist.find((e) => e.id === id));
    }, []);

    if(artist) {
        return (
            <div>
                <h2>{artist.name}</h2>
                <img src={artist.photo} />
                <p>{artist.description}</p>
                <p>{artist.bio}</p>
                <h3>List of albums :</h3>
                {artist.albums.map(album => (
                    <Link to={() => `/album/${album.id}`} key={album.id}>
                        <img src={album.cover_small} />
                        <p>{album.name}</p>
                    </Link>
                ))}
            </div>
        )
    }
    else return <div></div>
}

export default Artist;