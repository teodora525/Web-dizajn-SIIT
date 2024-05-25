import Headerline from "../components/Headerline";
import FestivaliOrganizatoraBlok from "../components/FestivaliOrganizatoraBlok";
import './Festivali.css';

const Festivali = ({festivaliOrganizatora, organizatori}) => {

	return (
	<>
	<Headerline naslov="Festivali" />
	<div>
	{organizatori.map(organizator => {
		const festivali = festivaliOrganizatora.filter((festivali) => {
			return organizator.festivali === festivali.id; 
		});
		return <FestivaliOrganizatoraBlok organizator={organizator} festivaliOrganizatora={festivali[0]} key={organizator.id}/>
	})}
	</div>
	</>
	);
}


export default Festivali;

