import React, { useState } from 'react';
import './KorisnikAdminCard.css';
//import { useNavigate } from 'react-router-dom';


const KorisnikAdminCard = ({korisnik, handlePutKorisnik, handleEditKorisnik, handleDeleteKorisnik}) => {

    const [popup, setPopup] = useState(false);

    const [korisnikId] = useState(korisnik.id); 
    const [ime, setIme] = useState(korisnik.ime);
    const [prezime, setPrezime] = useState(korisnik.prezime);
    const [korisnickoIme, setKorisnickoIme] = useState(korisnik.korisnickoIme);
    const [lozinka, setLozinka] = useState(korisnik.lozinka);
    const [email, setEmail] = useState(korisnik.email);
    const [validEmail, setValidEmail] = useState("valid");
    const [datumRodjenja, setDatumRodjenja] = useState(korisnik.datumRodjenja);
    const [adresa, setAdresa] = useState(korisnik.adresa);
    const [telefon, setTelefon] = useState(korisnik.telefon);
    const [zanimanje, setZanimanje] = useState(korisnik.zanimanje);

    const handleChangeIme = (e) => setIme(e.target.value);
    const handleChangePrezime = (e) => setPrezime(e.target.value);
    const handleChangeKorisnickoIme = (e) => setKorisnickoIme(e.target.value);
    const handleChangeLozinka = (e) => setLozinka(e.target.value);
    const handleChangeEmail = (e) => {
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? setValidEmail("valid") : setValidEmail("invalid"); 
        setEmail(e.target.value); 
    }
    const handleChangeDatumRodjenja = (e) => setDatumRodjenja(e.target.value);
    const handleChangeAdresa = (e) => setAdresa(e.target.value);
    const handleChangeTelefon = (e) => setTelefon(e.target.value);
    const handleChangeZanimanje = (e) => setZanimanje(e.target.value);

    const handleSubmitEditKorisnik = () => {
        handleEditKorisnik(korisnikId, ime, prezime, korisnickoIme, lozinka, email, datumRodjenja, adresa, telefon, zanimanje);
    }

    const pop = () => {
		setPopup(true);
	}

    const closeEditPopup = () => {
		setPopup(false);
	}

    //const navigate = useNavigate();



    const handleDeleteKorisnikButtonClick = () => handleDeleteKorisnik(korisnikId) ;

    if (typeof korisnik !== "undefined") {
    return (
        <>
                <div className='korisnikAdminCard' >
                    <div className='korisnickoIme'>
                        <span className='label'>Korisničko ime:</span><span>{korisnik.korisnickoIme}</span>
                    </div>
                    <div className='lozinka'>
                        <span className='label'>Lozinka:</span><span>****</span>
                    </div>
                    <div className='ime'>
                        <span className='label'>Ime:</span><span>{korisnik.ime}</span>
                    </div>
                    <div className='prezime'>
                        <span className='label'>Prezime:</span><span>{korisnik.prezime}</span>
                    </div>
                    <div className='email'>
                        <span className='label'>Email:</span><span>{korisnik.email}</span>
                        </div>
                    <div className='adresa'>
                        <span className='label'>Adresa:</span><span>{korisnik.adresa}</span>
                        
                    </div>
                    <div className='datumRodjenja'>
                        <span className='label'>Datum rođenja:</span><span>{korisnik.datumRodjenja}</span>
                        </div>
                    <div className='telefon'>
                        <span className='label'>Telefon:</span><span>{korisnik.telefon}</span>
                        </div>
                    <div className='zanimanje'>
                        <span className='label'>Zanimanje:</span><span>{korisnik.zanimanje}</span>
                    </div>
                    <div className='buttons'>
                        <button onClick={pop}>Izmeni</button>
                        <button onClick={handleDeleteKorisnikButtonClick}>Obriši</button>
                    </div>
                </div>

                {popup && <div className='editPopupBG'>
		            <button className="izlazBtn" onClick={closeEditPopup}>X</button>
		            <div className='editKorisnikBlok'>
			        <div className='editKorisnikForma'>
                            <span>Ime:</span><input id="imeInput" type='text' value={ime} onChange={handleChangeIme} placeholder='Vaše ime' />
                            <span>Prezime:</span><input id="prezimeInput" type='text' value={prezime} onChange={handleChangePrezime} placeholder='Vaše prezime' />
                            <span>Korisničko ime:</span><input id="korisnickoImeInput" type='text' value={korisnickoIme} onChange={handleChangeKorisnickoIme} placeholder='Vaše korisničko ime' />
                            <span>Lozinka:</span><input id="lozinkaInput" type='password' value={lozinka} onChange={handleChangeLozinka} placeholder='Vaša lozinka' />
                            <span>Email:</span><input id="emailInput" className={validEmail} type='text' value={email} onChange={handleChangeEmail} placeholder='Vaša email adresa' />
                            <span>Datum rođenja:</span><input id="datumRodjenjaInput" type='date' value={datumRodjenja} onChange={handleChangeDatumRodjenja} />
                            <span>Adresa:</span><input id="adresaInput" type='text' value={adresa} onChange={handleChangeAdresa} placeholder='Vaša adresa' />
                            <span>Telefon:</span><input id="telefonInput" type='text' value={telefon} onChange={handleChangeTelefon} placeholder='Vaš telefon' />
                            <span>Zanimanje:</span><input id="zanimanjeInput" type='text' value={zanimanje} onChange={handleChangeZanimanje} placeholder='Vaše zanimanje' />
                            <button onClick={handleSubmitEditKorisnik} >Registrujte se</button>
                        </div>
		            </div>
		        </div>}
                
                
          </>      
    );
} 
else { return (
    <h4>Učitavam...</h4>
); }
}

export default KorisnikAdminCard;