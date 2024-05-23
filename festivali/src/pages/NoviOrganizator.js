import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registracija.css'
import Headerline from '../components/Headerline';

const NoviOrganizator = ({handlePutOrganizator}) => {
    const [naziv, setNaziv] = useState("");
    const [adresa, setAdresa] = useState("");
    const [godinaOsnivanja, setGodinaOsnivanja] = useState(2024);
    const [logo, setLogo] = useState("");
    const [kontaktTelefon, setKontaktTelefon] = useState("");
    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState("valid");
    // const [festivali, setFestivali] = useState("");

    const handleChangeNaziv = (e) => setNaziv(e.target.value);
    const handleChangeAdresa = (e) => setAdresa(e.target.value);
    const handleChangeGodinaOsnivanja = (e) => setGodinaOsnivanja(e.target.value);
    const handleChangeLogo = (e) => setLogo(e.target.value);
    const handleChangeKontaktTelefon = (e) => setKontaktTelefon(e.target.value);
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? setValidEmail("valid") : setValidEmail("invalid");
    }

    const navigate = useNavigate('/organizatori')

    const handleSubmitNoviOrganizator = () => {
        const status = handlePutOrganizator(naziv, adresa, godinaOsnivanja, logo, kontaktTelefon, email);
        if(status === 200){
            navigate('/organizatori');
        } else {
            alert("Neuspelo kreiranje korisnika: " + status);
        }
    }

    /*
    "naziv": "BeoArt Fest",
        "adresa": "Knez Mihailova 48, Beograd, 11000",
        "godinaOsnivanja": "2015",
        "logo": "https://i.imgur.com/OV15WM6.jpeg",
        "kontaktTelefon": "011/3042-568",
        "email": "kontakt@beoartfest.rs",
        "festivali": "-MNVEu6iMr2EFlQO6TW63"
        */

    

    return (
        <>
        <Headerline naslov="Kreiraj novog organizatora" />
        <div className='registracijaKontejner'>
        <div className='registracijaForma'>
            <span>Naziv:</span><input id="nazivInput" type='text' value={naziv} onChange={handleChangeNaziv} placeholder='Naziv organizatora' />
            <span>Adresa:</span><input id="adresaInput" type='text' value={adresa} onChange={handleChangeAdresa} placeholder='Adresa organizatora' />
            <span>Godina osnivanja:</span><input id="godinaOsnivanjaInput" type='number' value={godinaOsnivanja} onChange={handleChangeGodinaOsnivanja} placeholder='Godina osnivanja organizatora' />
            <span>Logo:</span><input id="logoInput" type='text' value={logo} onChange={handleChangeLogo} placeholder='Logo organizatora' />
            <span>Kontakt telefon:</span><input id="kontaktTelefonInput" type='text' value={kontaktTelefon} onChange={handleChangeKontaktTelefon} placeholder='Kontakt telefon' />
            <span>Email:</span><input id="emailInput" className={validEmail} type='text' value={email} onChange={handleChangeEmail} placeholder='Email adresa organizatora' />
            <button onClick={handleSubmitNoviOrganizator} >Kreiraj organizatora</button>
        </div>
        </div>
        </>
    );
}

export default NoviOrganizator;