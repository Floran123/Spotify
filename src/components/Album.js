import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

let Album = () => {
    const [album, setAlbum] = useState(null);
    let { id } = useParams();

    useEffect(() => {
        let retrieve = async () => {
            let response = await fetch('http://localhost:4000/api/getAlbum.php?id=' + id);
            console.log(response);
            setAlbum(await response.json());
        }
        retrieve();
    }, []);

    console.log(album);
    if(album) {

        let audioControl = (audio) => {
            let audios = document.querySelectorAll('audio');
            audios.forEach(e => e != audio ? e.pause() : null);
        }

        return (
            <div>
                <h2>
                    {album.name} by <Link to={() => `/artist/${album.artist_id}`}>{album.artist.name}</Link>
                    ({new Date(album.release_date * 1000).toDateString()})
                </h2>
                <img src={album.cover} />
                <p>Genre : <Link to={() => `/genre/${album.genre_id}`}>{album.genre_name}</Link></p>
                <p>Description : {album.description}</p>
                <p>Popularity : {album.popularity}</p>
                <h3>All {album.tracks.length} Tracks :</h3>
                {album.tracks.map((track, i) =>
                <div key={i}>
                    <p>{i +1}. {track.name}</p>
                    <audio
                        controls
                        src={track.mp3}
                        onPlay={(e) => audioControl(e.target)}
                    >
                    </audio>
                </div>
                )}
            </div>
        )
    }
    else return <div></div>
}

export default Album;