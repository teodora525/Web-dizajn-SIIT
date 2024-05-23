import { useState } from 'react';
import React from 'react';
import './OrganizatoriAdminCard.css';


const OrganizatoriAdminCard = ({organizator, handleEditOrganizator, handleDeleteOrganizator}) => {

    const [popup, setPopup] = useState(false);
    const [naziv, setNaziv] = useState(organizator.naziv);
    const [adresa, setAdresa] = useState(organizator.adresa);
    const [godinaOsnivanja, setGodinaOsnivanja] = useState(organizator.godinaOsnivanja);
    const [logo, setLogo] = useState(organizator.logo);
    const [kontaktTelefon, setKontaktTelefon] = useState(organizator.kontaktTelefon);
    const [email, setEmail] = useState(organizator.email);
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

    const pop = () => {
		setPopup(true);
	}

    const closeEditPopup = () => {
		setPopup(false);
	}

    console.log(organizator);
    
    const handleDeleteOrganizatorButtonClick = () => {
        handleDeleteOrganizator(organizator.id, organizator.festivali);
        //console.log(organizator, organizator.festivali);
    }


    const handleSubmitEditOrganizator = () => {
        handleEditOrganizator(organizator.id, naziv, adresa, godinaOsnivanja, logo, kontaktTelefon, email, organizator.festivali); 
    }

    if (typeof organizator !== "undefined") {
    return (
                <>
                <div className='organizator'>
                    <div>
                        <span className='label'>Naziv:</span><span>{organizator.naziv}</span>
                    </div>
                    <div>
                        <span className='label'>Adresa:</span><span>{organizator.adresa}</span>
                    </div>
                    <div>
                        <span className='label'>Godina osnivanja:</span><span>{organizator.godinaOsnivanja}</span>
                    </div>
                    <div >
                        <span className='label'>Logo:</span><span><img src={organizator.logo} alt={organizator.email}  /></span>
                    </div>
                    <div>
                        <span className='label'>Kontakt telefon:</span><span>{organizator.kontaktTelefon}</span>
                        </div>
                    <div>
                        <span className='label'>Email:</span><span>{organizator.email}</span>
                        
                    </div>

                    <div className='buttons'>
                        <button onClick={pop}>Izmeni</button>
                        <button onClick={handleDeleteOrganizatorButtonClick}>Obriši</button>
                    </div>
                </div>
                {popup && <div className='editPopupBG'>
                <button className="izlazBtn" onClick={closeEditPopup}>X</button>
                <div>
                <div className='registracijaForma'>
                    <span>Naziv:</span><input id="nazivInput" type='text' value={naziv} onChange={handleChangeNaziv} placeholder='Naziv organizatora' />
                    <span>Adresa:</span><input id="adresaInput" type='text' value={adresa} onChange={handleChangeAdresa} placeholder='Adresa organizatora' />
                    <span>Godina osnivanja:</span><input id="godinaOsnivanjaInput" type='number' value={godinaOsnivanja} onChange={handleChangeGodinaOsnivanja} placeholder='Godina osnivanja organizatora' />
                    <span>Logo:</span><input id="logoInput" type='text' value={logo} onChange={handleChangeLogo} placeholder='Logo organizatora' />
                    <span>Kontakt telefon:</span><input id="kontaktTelefonInput" type='text' value={kontaktTelefon} onChange={handleChangeKontaktTelefon} placeholder='Kontakt telefon' />
                    <span>Email:</span><input id="emailInput" className={validEmail} type='text' value={email} onChange={handleChangeEmail} placeholder='Email adresa organizatora' />
                    <span>{organizator.festivali}</span>
                    <button onClick={handleSubmitEditOrganizator} >Izmeni organizatora</button>
                </div>
                    </div>
                </div>
            } 
            </>

                
                
    );
} 
else { return (
    <h4>Učitavam...</h4>
); }
}

export default OrganizatoriAdminCard;