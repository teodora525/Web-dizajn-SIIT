
import { useLocation } from 'react-router-dom';
import Headerline from '../components/Headerline';

import './Festival.css';

const Festival = ({festivaliOrganizatora}) => {

    const location = useLocation().pathname.replace("/festival/","");
    //console.log(location);

    //console.log(festivaliOrganizatora);

    const festival = [];

    festivaliOrganizatora.forEach(element => {
        const l = element[location];
        if (l !== null && l !==undefined)  festival.push(l); });

    //console.log(festival);
    if (typeof festival[0] !== "undefined") {
    return (
        <>
        <header>
        <h1>{festival[0].naziv}</h1>
    </header>
    
    <table className="tabela">
        <tr>
            <th>Cena</th>
            <td>{festival[0].cena}</td>
          </tr>
        <tr>
          <th>Maksimalan broj osoba</th>
          <td>{festival[0].maxOsoba}</td>
        </tr>
        <tr>
          <th>Naziv</th>
          <td>{festival[0].naziv}</td>
        </tr>
        <tr>
          <th>Opis</th>
          <td>{festival[0].opis}</td>
        </tr>
        <tr>
          <th>Prevoz</th>
          <td>{festival[0].prevoz}</td>
        </tr>
      </table>

      <h2>Galerija slika:</h2>

      <div className='gallery'>
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

