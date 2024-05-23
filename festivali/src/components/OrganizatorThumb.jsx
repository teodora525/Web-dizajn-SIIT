import "./OrganizatorThumb.css";

const OrganizatorThumb = ({organizatorItem}) => {

	const orgref = '/organizator/' + organizatorItem.id;
	const altSlika = "Slika - " + organizatorItem.naziv;

    return (
    <div className="organizator-item">
		<a href={orgref}>
			<img src={(organizatorItem.logo)} alt={altSlika} />
			<h2>{(organizatorItem.naziv)}</h2>
		</a>
	</div>
    );
}

export default OrganizatorThumb;