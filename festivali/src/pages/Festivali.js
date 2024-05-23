import Headerline from "../components/Headerline";
import FestivaliOrganizatoraBlok from "../components/FestivaliOrganizatoraBlok";

const Festivali = ({festivaliOrganizatora, organizatori}) => {

	return (
	<>
	<Headerline naslov="Festivali" />
	{organizatori.map(organizator => {
		const festivali = festivaliOrganizatora.filter((festivali) => {
			return organizator.festivali === festivali.id; 
		});
		return <FestivaliOrganizatoraBlok organizator={organizator} festivaliOrganizatora={festivali[0]} key={organizator.id}/>
	})}

	</>
	);
}


export default Festivali;

