import { useLocation } from "react-router-dom";
import "./Organizator.css"
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
      // console.log(typeof festivali);

      console.log(organizator);
      if (typeof festivali !== "undefined") {
      return (
        <>
        <Headerline naslov={organizator.naziv} />
      
         <table className="tabela">
        <tbody>
        <tr>
            <th>Naziv</th>
            <td>{organizator.naziv}</td>
        </tr>
        <tr>
          <th>Adresa</th>
          <td>{organizator.adresa}</td>
        </tr>
        <tr>
          <th>Godina osnivanja</th>
          <td>{organizator.godinaOsnivanja}</td>
        </tr>
        <tr>
          <th>Logo</th>
          <td>
            <img src={organizator.logo} alt={slikaAlt}/>
            </td>
        </tr>
        <tr>
          <th>Kontakt</th>
          <td>{organizator.kontaktTelefon}</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>{organizator.email}</td>
        </tr>
        </tbody>
      </table>
  
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
