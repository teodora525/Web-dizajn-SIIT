import Headerline from "../components/Headerline";
import "./Kontakt.css";

const Kontakt = () => {
	return (
	<>
	<Headerline naslov="Kontakt!" />
	<h2>Kontaktirajte nas</h2>
        <p>Imate pitanja ili želite da nas kontaktirate? Popunite formular ispod ili nas pozovite na navedeni broj telefona.</p>
        <form>
            <label for="ime">Ime:</label>
            <input type="text" id="ime" name="ime" required /><br></br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required /><br></br>
            <label for="poruka">Poruka:</label>
            <textarea id="poruka" name="poruka" rows="4" cols="50" required></textarea>
            <input type="submit" value="Pošalji" /><br></br>
        </form>
        <p>Možete nas takođe kontaktirati i putem telefona ili emaila:</p>
        <p>Telefon: +123456789</p>
        <p>Email: info@organizatorifestivala.com</p>
    
	</>
	);
}


export default Kontakt;

