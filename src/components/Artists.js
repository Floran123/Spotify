import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

let Artists = () => {
    const [artists, setArtists] = useState(null);

    useEffect(() => {
        let artists = require('./artists.json');
        setArtists(artists);
    }, []);

    if(artists) {
        return (
            <div>
                {artists.map(art => (
                    <Link to={() => `/artist/${art.id}`} key={art.id}>
                        <div>
                            <img src={art.photo} style={{height: '100px'}}/>
                            <p>{art.name}</p>
                        </div>
                    </Link>
                ))}
            </div>
        )
    }
    return <div></div>
}

export default Artists;