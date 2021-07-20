import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

let randomArray = (array, number) => {
  let newArray = [];
  let out = [];

  do {
    let rIndex =  Math.floor(Math.random() * array.length);
    if(!out.find((e) => e === rIndex)) {
      out.push(rIndex);
      newArray.push(array[rIndex]);
    };

  } while(out.length < number)

  return newArray;
}

let Home = () => {
  const [albums, setAlbums] = useState(null);

    useEffect(() => {
      let getResponse = async () => {
        const response = await fetch("http://localhost:4000/api/getAlbums.php");
        setAlbums(randomArray(await response.json(), 10));
      }
  
      getResponse();
    }, []);

    if(albums) {
      return (
        <div>
          <h2>Welcome</h2>
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

export default Home;