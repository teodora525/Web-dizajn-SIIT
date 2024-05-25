
import { useLocation } from 'react-router-dom';
import Headerline from '../components/Headerline';

import './Festival.css';

const Festival = ({festivaliOrganizatora}) => {

    const location = useLocation().pathname.replace("/festival/","");

    const festival = [];

    festivaliOrganizatora.forEach(element => {
        const l = element[location];
        if (l !== null && l !==undefined)  festival.push(l); });

    if (typeof festival[0] !== "undefined") {
    return (
        <>
        <header>
        <Headerline naslov={festival[0].naziv} />
    </header>
    
    <div className='festival' style={{maxWidth:"650px"}}>
    <div><span className='labela'>Cena:</span><span>{festival[0].cena}</span></div>
            <div><span className='labela'>Maksimalan broj osoba:</span><span>{festival[0].maxOsoba}</span></div>
            <div><span className='labela' >Naziv:</span><span>{festival[0].naziv}</span></div>
            <div><span className='labela'>Opis:</span><span>{festival[0].opis}</span></div>
            <div><span className='labela'>Prevoz:</span><span>{festival[0].prevoz}</span></div>
      </div>

      <h2>Galerija slika:</h2>

      <div className='galerija'>
      {festival[0].slike.map((slika) => {
        return (<div key={slika} className="gallery-item"> <img src={slika} alt=""></img></div>)
      })}
      </div>
      
        </>
    )
  } else {
    return (
      <Headerline naslov="Učitavam..." />
    )
  }
}

export default Festival;

