import { Link } from "react-router-dom";
import FestivalThumb from "../components/FestivalThumb";


const FestivaliOrganizatoraBlok = ({organizator, festivaliOrganizatora}) => {

    const organizatorLink = "/festivali/" + organizator.id;
    if (typeof festivaliOrganizatora !== "undefined") {
    return (
        <>
        <h3><Link to={organizatorLink}> {organizator.naziv}</Link></h3>
        <div className="festivali-grid">
        {Object.keys(festivaliOrganizatora).filter( k => k !== "id" ).map(k => {
            
            festivaliOrganizatora[k].id = k;
            //console.log(festivaliOrganizatora[k]);
            return <FestivalThumb key={k} festivalItem={festivaliOrganizatora[k]} />  
        })
        }  
        </div>
        </>
    );
    } else return (<div><h1>Učitavam...</h1></div>); 
}

export default FestivaliOrganizatoraBlok;