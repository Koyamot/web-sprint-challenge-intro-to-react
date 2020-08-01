// Write your Character component here
import React from 'react';
import axios from 'axios';

const APOD = () => {
    const [swData, setswData] = useState([]);
    const [swSearch, setswSearch] = useState('people');

    const effectFn = () => {
        // 4. the effect fn is pulled from the waiting room and fired!
        axios
            .get(`https://swapi.py4e.com/api/${swSearch}/`)
            .then(response => {
              console.log('success!', response)
              // 5. STATE CHANGE! update films to Array of film objs
              setpicOTD(response.data) // response.data = Array[film objs]
            }) 
            .catch(error => console.log('error', error))
      }
    
      // 2. sees useEffect hook & queues like a waiting room the effect fn (first param)
      // 7. useEffect has dependency array of [], so effectFn IS NOT QUEUED.
      useEffect(effectFn, [swSearch])

    return (
        <div className="picOTD">
             <input className='date'type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
            <APODCard 
                photo={picOTD.hdurl}
                title={picOTD.title}
                explanation={picOTD.explanation}
                date={picOTD.date}
                />
           
        </div>
    )

}





export default Characters;