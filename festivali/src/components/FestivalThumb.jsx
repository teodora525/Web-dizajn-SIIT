import { Link } from "react-router-dom";
import "./FestivalThumb.css";

const FestivalThumb = ({festivalItem}) => {

	const festivalLink = "/festival/" + festivalItem.id;
    return (

    <div className="organizator-item">
		<Link to={festivalLink}>
			<img src={(festivalItem.slike)} alt="slika"/> 
			<h5>{(festivalItem.naziv)}</h5>
		</Link>
	</div>
    );
}

export default FestivalThumb;
