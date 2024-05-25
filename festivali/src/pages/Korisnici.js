import React from 'react';
import Headerline from '../components/Headerline';
import KorisnikAdminCard from '../components/KorisnikAdminCard';
import { useNavigate } from 'react-router-dom';
import './Korisnici.css';

const Korisnici = ({korisnici, handleEditKorisnik, handleDeleteKorisnik}) => {

    const navigate = useNavigate();

    if (typeof korisnici !== "undefined") {
        return (
    <>
    <Headerline naslov={"Administracija korisnika"} />
    
    <button onClick={() => navigate('/registracija')}>Dodaj korisnika</button>

    <div className='korisniciAdminGrid' >
    {korisnici.map((korisnik) => {
        return <KorisnikAdminCard key={korisnik.id} korisnik={korisnik} handleDeleteKorisnik={handleDeleteKorisnik} handleEditKorisnik={handleEditKorisnik} />
    })}
    </div>
    </>
    );
} else {
    return (<Headerline naslov="Učitavam..." />);
}
}

export default Korisnici;