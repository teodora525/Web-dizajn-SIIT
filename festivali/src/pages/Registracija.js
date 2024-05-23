import React, { useState } from 'react';
import Headerline from '../components/Headerline';
import './Registracija.css';
import { useNavigate } from 'react-router-dom';

const Registracija = ({handlePutKorisnik}) => { 
    const [ime, setIme] = useState("");
    const [prezime, setPrezime] = useState("");
    const [korisnickoIme, setKorisnickoIme] = useState("");
    const [lozinka, setLozinka] = useState("");
    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState("valid");
    const [datumRodjenja, setDatumRodjenja] = useState(new Date());
    const [adresa, setAdresa] = useState("");
    const [telefon, setTelefon] = useState("");
    const [zanimanje, setZanimanje] = useState("");

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

    const handleSubmitRegistracija = () => {
        const status = handlePutKorisnik(ime, prezime, korisnickoIme, lozinka, email, datumRodjenja, adresa, telefon, zanimanje);
        if(status === 200){
            navigate('/korisnici');
        } else {
            alert("Neuspelo kreiranje korisnika: " + status);
        }
    }

    const navigate = useNavigate();

    return (
    <>
    <Headerline naslov="Registrujte korisnika" />
    <div className='registracijaForma'>
        <span>Ime:</span><input id="imeInput" type='text' value={ime} onChange={handleChangeIme} placeholder='Vaše ime' />
        <span>Prezime:</span><input id="prezimeInput" type='text' value={prezime} onChange={handleChangePrezime} placeholder='Vaše prezime' />
        <span>Korisničko ime:</span><input id="korisnickoImeInput" type='text' value={korisnickoIme} onChange={handleChangeKorisnickoIme} placeholder='Vaše korisničko ime' />
        <span>Lozinka:</span><input id="lozinkaInput" type='password' value={lozinka} onChange={handleChangeLozinka} placeholder='Vaša lozinka' />
        <span>Email:</span><input id="emailInput" className={validEmail} type='text' value={email} onChange={handleChangeEmail} placeholder='Vaša email adresa' />
        <span>Datum rođenja:</span><input id="datumRodjenjaInput" type='date' value={datumRodjenja} onChange={handleChangeDatumRodjenja} />
        <span>Adresa:</span><input id="adresaInput" type='text' value={adresa} onChange={handleChangeAdresa} placeholder='Vaša adresa' />
        <span>Telefon:</span><input id="telefonInput" type='text' value={telefon} onChange={handleChangeTelefon} placeholder='Vaš telefon' />
        <span>Zanimanje:</span><input id="zanimanjeInput" type='text' value={zanimanje} onChange={handleChangeZanimanje} placeholder='Vaše zanimanje' />
        <button onClick={handleSubmitRegistracija} >Registrujte se</button>
    </div>


    </>            
    );
}

export default Registracija;