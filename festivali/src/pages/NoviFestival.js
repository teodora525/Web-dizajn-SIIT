import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registracija.css'
import Headerline from '../components/Headerline';
import GalerijaInput from '../components/GalerijaInput';

const NoviFestival = ({handlePutFestival}) => {
    const [naziv, setNaziv] = useState("");
    const [opis, setOpis] = useState("");
    const [slike, setSlike] = useState([]);
    const [tip, setTip] = useState("");
    const [prevoz, setPrevoz] = useState("");
    const [cena, setCena] = useState("");
    const [maxOsoba, setMaxOsoba] = useState("");
    const [slikaInput, setSlikaInput] = useState("");

    const handleChangeNaziv = (e) => setNaziv(e.target.value);
    const handleChangeOpis = (e) => setOpis(e.target.value);
    //const handleChangeSlike = (e) => setGodinaOsnivanja(e.target.value);
    const handleChangeTip = (e) => setTip(e.target.value);
    const handleChangePrevoz = (e) => setPrevoz(e.target.value);
    const handleChangeCena = (e) =>  setCena(e.target.value);
    const handleChangeMaxOsoba = (e) => setMaxOsoba(e.target.value);
    const handleChangeSlikaInput = (e) => setSlikaInput(e.target.value);
    const handleUbaciSliku = () => {
        const noveSlike = slike;
        noveSlike.push(slikaInput);
        setSlike(noveSlike);
        setSlikaInput("");
    }

    //const navigate = useNavigate('/organizatori') 

    /* const handleSubmitNoviOrganizator = () => {
        const status = handlePutOrganizator(naziv, adresa, godinaOsnivanja, logo, kontaktTelefon, email);
        if(status === 200){
            navigate('/organizatori');
        } else {
            alert("Neuspelo kreiranje korisnika: " + status);
        }
    } */

    const handleSubmitNoviFestival = () => {

    }

    /*
    {
          "naziv": "Atoski Slikarski Dnevnik",
          "opis": "Pridružite se umetnicima na Atosu dok slikaju inspirisani prirodom i monaškim životom. Ovaj slikarski maraton je prilika za sve posetioce da se upuste u kreativnost i razmene iskustva sa umetnicima.",
          "slike": [
            "https://i.imgur.com/13NPfCE.jpeg",
            "https://i.imgur.com/elM9ZuF.jpeg",
            "https://i.imgur.com/ljLJJPc.jpeg",
            "https://i.imgur.com/Ddo6ETm.jpeg"
          ],
          "tip": "Umetnički",
          "prevoz": "Sopstveni",
          "cena": "2500",
          "maxOsoba": "200"
        }
        */
        console.log(slike);

    return (
        <>
        <Headerline naslov="Kreiraj novi festival" />
        <div className='registracijaKontejner'>
        <div className='registracijaForma'>
            <span>Naziv:</span><input id="nazivInput" type='text' value={naziv} onChange={handleChangeNaziv} placeholder='Naziv festivala' />
            <span>Opis:</span><textarea id="opisTextArea" value={opis} onChange={handleChangeOpis} placeholder='Opis festivala' />
            {/* <span>Logo:</span><input id="logoInput" type='text' value={logo} onChange={handleChangeLogo} placeholder='Logo organizatora' /> */}
            {/* <span>Kontakt telefon:</span><input id="kontaktTelefonInput" type='text' value={kontaktTelefon} onChange={handleChangeKontaktTelefon} placeholder='Kontakt telefon' /> */}
            <span>Tip:</span><input id="tipInput" type='text' value={tip} onChange={handleChangeTip} placeholder='Tip festivala' />
            <span>Prevoz:</span><input id="prevozInput" type='text' value={prevoz} onChange={handleChangePrevoz} placeholder='Prevoz' />
            <span>Cena:</span><input id="cenaInput" type='text' value={cena} onChange={handleChangeCena} placeholder='Cena' />
            <span>Max osoba:</span><input id="maxOsobaInput" type='text' value={maxOsoba} onChange={handleChangeMaxOsoba} placeholder='Max osoba' />
            <span>Organizator:</span><select><option>Organizator 1</option></select> 
            <input id="slikaInput" type='text' value={slikaInput} onChange={handleChangeSlikaInput} placeholder='Link ka slici' />
            <button onClick={handleUbaciSliku}>Ubaci sliku</button>
            <GalerijaInput slike={slike} />
            <button onClick={handleSubmitNoviFestival} >Kreiraj festival</button> 
        </div>
        </div>
        </>
    );
}

export default NoviFestival;