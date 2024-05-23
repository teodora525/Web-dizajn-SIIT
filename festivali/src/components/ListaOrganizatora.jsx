import { Link } from "react-router-dom";
import "./ListaOrganizatora.css";


const ListaOrganizatora = ({organizatori}) => {

    return (
    <div className="organizatori-lista">

   {organizatori.map( 
        (organizator) => {
            const tolink = 'organizator/' + organizator.id;
		    return (
		            <li key={organizator.id}><Link id={organizator.id} to={tolink} > {organizator.naziv}</Link></li>
            );
        }
    )
    }

    </div>
    );
}


export default ListaOrganizatora;