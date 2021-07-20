import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

let Albums = () => {
    const [albums, setAlbums] = useState(null);

    useEffect(() => {
        let retrieve = async () => {
            let response = await fetch('http://localhost:4000/api/getAlbums.php');
            setAlbums(await response.json());
        }
        retrieve();
    }, []);

    if(albums) {
        return (
            <div>
                {albums.map((album) => 
                <Link to={() => `/album/${album.id}`} key={album.id}>
                    <h2>{album.name}</h2>
                    <img src={album.cover_small} />
                </Link>
                )}
            </div>
        )
    }
    return <div></div>
}

export default Albums;