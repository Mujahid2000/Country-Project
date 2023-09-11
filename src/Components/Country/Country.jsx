import { useState } from 'react';
import './Country.css'

const Country = ({ country , handleVisitedCountry, handleVisitedFlags}) => {
    console.log(country);
    const {name, flags, population, area, cca3} = country;

    const [Visited, setVisited] = useState(false);
    const handlevVisited = () => {
        setVisited(!Visited);
    }



    return (
        <div className={`country ${Visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{color: Visited ? 'purple': 'white'}}>Name: {name.common}</h3>
            <img className='img' src={flags.png}></img>
            <p>Population: {population}</p>
            <p>area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={() => handleVisitedCountry(country)}> Mark Visited  </button>
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Visited Flags</button>
            <br />
            <br />
            <button onClick={handlevVisited}>{Visited? 'visited': 'Going'} </button>
           
            
            {Visited?  ' I have visited this country.': ' I want to visit.'}
        </div>
    );
};

export default Country;