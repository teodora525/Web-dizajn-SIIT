import Headerline from "../components/Headerline";
import "./Kontakt.css";

const Kontakt = () => {
	return (
	<>
	<Headerline naslov="Kontaktirajte nas" />
    <p>Imate pitanja ili želite da nas kontaktirate? Popunite formular ispod ili nas pozovite na navedeni broj telefona.</p>
    <div className="kontaktForm">
        <label htmlFor="ime">Ime:</label>
        <input type="text" id="ime" name="ime" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="poruka">Poruka:</label>
        <textarea id="poruka" name="poruka" rows="4" cols="50" required></textarea>
        <button>Pošalji</button>
    </div>
    
	</>
	);
}


export default Kontakt;

