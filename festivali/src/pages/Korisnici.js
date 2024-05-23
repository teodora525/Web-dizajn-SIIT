import React from 'react';
import Headerline from '../components/Headerline';
import KorisnikAdminCard from '../components/KorisnikAdminCard';
import { useNavigate } from 'react-router-dom';

const Korisnici = ({korisnici, handleEditKorisnik, handleDeleteKorisnik}) => {

    const navigate = useNavigate();

    if (typeof korisnici !== "undefined") {
        return (

    <>
    <Headerline naslov={"Administracija korisnika"} />
    
    <div className='dugme'>
        <button onClick={() => navigate('/registracija')}>Dodaj korisnika</button>
    </div>

    {korisnici.map((korisnik) => {
        //console.log(korisnik)
        return <KorisnikAdminCard key={korisnik.id} korisnik={korisnik} handleDeleteKorisnik={handleDeleteKorisnik} handleEditKorisnik={handleEditKorisnik} />
    })}
    
    </>
    );
} else {
    return (<Headerline naslov="Učitavam..." />);
}
}

export default Korisnici;