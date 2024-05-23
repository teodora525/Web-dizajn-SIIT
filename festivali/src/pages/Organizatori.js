import Headerline from "../components/Headerline";
import OrganizatorThumb from "../components/OrganizatorThumb";
import "./Organizatori.css";


const Organizatori = ({organizatori}) => {
	
	return (
		<>
		<Headerline naslov="Organizatori" />

		<div className="organizatori-grid" >
		{organizatori.map( (organizatorItem) => {
		return (
			<OrganizatorThumb key={organizatorItem.id} organizatorItem={organizatorItem} />
		);
		})}
		</div>
	</>
	);
}


export default Organizatori;

