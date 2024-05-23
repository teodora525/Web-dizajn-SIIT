import Headerline from "../components/Headerline";
import "./Kontakt.css";

const Kontakt = () => {
	return (
	<>
	<Headerline naslov="Kontakt!" />
	<h2>Kontaktirajte nas</h2>
        <p>Imate pitanja ili želite da nas kontaktirate? Popunite formular ispod ili nas pozovite na navedeni broj telefona.</p>
        <form>
            <label htmlFor="ime">Ime:</label>
            <input type="text" id="ime" name="ime" required /><br></br>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required /><br></br>
            <label htmlFor="poruka">Poruka:</label>
            <textarea id="poruka" name="poruka" rows="4" cols="50" required></textarea>
            <input type="submit" value="Pošalji" /><br></br>
        </form>
        
    
	</>
	);
}


export default Kontakt;

