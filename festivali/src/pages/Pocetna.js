
import Headerline from '../components/Headerline';
import ListaOrganizatora from "../components/ListaOrganizatora";
import './Pocetna.css';

const Pocetna =  ({organizatori}) => {
	return (
	<>

		<Headerline naslov="Lista organizatora festivala" />

		<div className="container">
        
		<ListaOrganizatora organizatori={organizatori} />
		
    	</div>

	</>


	);
}


export default Pocetna;

