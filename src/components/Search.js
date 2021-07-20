import { useState, useEffect } from 'react';

let Search = () => {
    const [value, setValue] = useState('');
    const [results, setResults] = useState([]);

    let send = () => {
        if(value != '') {
            console.log(value);
        }
    }


    return (
        <div>
            <input type='text' placeholder='Search an album, artist or genre' onInput={(e) => setValue(e.target.value)}/>
            <button onClick={send}>Go !</button>
            {
                results.map((e) => {
                    <p>e.name</p>
                })
            }
        </div>
    )
}

export default Search;