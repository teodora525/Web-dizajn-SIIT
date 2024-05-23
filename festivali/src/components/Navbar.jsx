import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

const Navbar = ({korisnici}) => {
	const [popup, setPopup] = useState(false);
	const [korisnik, setKorisnik] = useState(null);

	const [korisnickoIme, setKorisnickoIme] = useState("");
	const [lozinka, setLozinka] = useState("");

	const pop = () => {
		setPopup(true);
	}

	const closePrijavaPopup = () => {
		setKorisnickoIme("");
		setLozinka("");
		setPopup(false);
	}

	const handleChangeKIme = (e) => setKorisnickoIme(e.target.value);
	const handleChangeLozinka = (e) => setLozinka(e.target.value);

	const login = () => {
		const k = korisnici.find((kr) => kr.korisnickoIme === korisnickoIme && kr.lozinka === lozinka );
		typeof k === "undefined" ? alert("Pogrešno korisničko ime ili lozinka!") : setKorisnik(k);
		setPopup(false);
	}
	const logOut = () => setKorisnik(null);

	return (
		<>
		<nav>
			<Link to="/">Početna</Link>
			<Link to="/organizatori">Organizatori</Link>
			<Link to="/festivali">Festivali</Link>
			<div className="dropdown">
				<button className="dropbtn">Izmena</button>
				<div className="dropdown-content">
					<Link to="/organizatoriAdmin">Organizatori</Link>
					<Link to="/festivaliAdmin">Festivali</Link>
					<Link to="/korisnici">Korisnici</Link>
				</div>
			</div>
			<Link to="/kontakt">Kontakt</Link>
			{ korisnik === null ? 
			(<><button id="loginBtn" onClick={pop}>Prijavi se</button><Link to="/registracija" id="registerBtn">Registracija</Link></>) : 
			(<><button id="logout" onClick={logOut}>Odjavi se</button><span>Dobrodošli - {korisnik.ime + " " + korisnik.prezime}</span></>)}
			
		</nav>
		{popup && <div className='prijavaBG'>
		<button className="izlazBtn" onClick={closePrijavaPopup}>X</button>
		<div className='prijavaBlok'>
			<span>Korisničko ime:</span><input id="korisnickoIme" type="text" value={korisnickoIme} onChange={handleChangeKIme} />
			<span>Lozinka:</span><input id="lozinka" type="password" value={lozinka} onChange={handleChangeLozinka} />
			<button onClick={login}>Prijavi se</button>
		</div>
		</div>}
		</>
	)

};

export default Navbar;
