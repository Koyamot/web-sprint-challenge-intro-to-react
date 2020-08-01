// Write your Character component here
import React from 'react';
import axios from 'axios';

const SWData = () => {
    const [swData, setswData] = useState([]);
    const [swSearch, setswSearch] = useState('people');

    const effectFn = () => {
        // 4. the effect fn is pulled from the waiting room and fired!
        axios
            .get(`https://swapi.py4e.com/api/${swSearch}/`)
            .then(response => {
              console.log('success!', response)
              // 5. STATE CHANGE! update films to Array of film objs
              setswData(response.data) // response.data = Array[film objs]
            }) 
            .catch(error => console.log('error', error))
      }
    
      // 2. sees useEffect hook & queues like a waiting room the effect fn (first param)
      // 7. useEffect has dependency array of [], so effectFn IS NOT QUEUED.
      useEffect(effectFn, [swSearch])

    return (
        <div className="starwars">
             <input id='search' type="search" name="search" value={swSearch} onChange={e => setswSearch(e.target.value)} />
            <swData 
                name={swData.name}
                films={swData.films}
                starships={swData.starships}
                vehicles={swData.vehicles}
                />
           
        </div>
    )

}





export default Characters;