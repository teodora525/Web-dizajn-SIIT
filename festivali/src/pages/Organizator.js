import { useLocation } from "react-router-dom";
import Headerline from "../components/Headerline";
import FestivaliOrganizatoraBlok from "../components/FestivaliOrganizatoraBlok";


const Organizator = function({festivaliOrganizatora, organizatori}) {

    const location = useLocation().pathname.replace("/organizator/","");
    const organizator = organizatori.find((o) => o.id === location);

    if (typeof organizator !== "undefined") {
      const slikaAlt = "logo-" + organizator.naziv;
      
        const festivali = festivaliOrganizatora.filter((festivali) => {
        return organizator.festivali === festivali.id; 
      });

      if (typeof festivali !== "undefined") {
      return (
        <>
        <Headerline naslov={organizator.naziv} />
      
        <div className='organizator' style={{maxWidth:"650px"}}>
            <div>
             <span className='label'>Naziv:</span><span>{organizator.naziv}</span>
            </div>
            <div>
              <span className='label'>Adresa:</span><span>{organizator.adresa}</span>
            </div>
            <div>
              <span className='label'>Godina osnivanja:</span><span>{organizator.godinaOsnivanja}</span>
            </div>
            <div >
              <span className='label'>Logo:</span><span><img src={organizator.logo} alt={organizator.email}  /></span>
            </div>
            <div>
              <span className='label'>Kontakt telefon:</span><span>{organizator.kontaktTelefon}</span>
            </div>
            <div>
             <span className='label'>Email:</span><span>{organizator.email}</span>           
            </div>
          </div>
	      <FestivaliOrganizatoraBlok organizator={organizator} festivaliOrganizatora={festivali[0]} key={organizator.id}/>
        </>
      );
      }
    } else {
    return (
    <Headerline naslov="Učitavam..." />
    )
  }
}

export default Organizator;
