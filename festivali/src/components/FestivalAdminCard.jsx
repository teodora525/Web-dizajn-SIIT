import React from 'react';
import './FestivalAdminCard.css';
import { useState } from 'react';
import GalerijaInput from './GalerijaInput';

const FestivalAdminCard = ({festival, organizator, handleEditFestival, handleDeleteFestival}) => {
            
    const [popup, setPopup] = useState(false);

    const [naziv, setNaziv] = useState(festival.naziv);
    const [opis, setOpis] = useState(festival.opis);
    const [slike, setSlike] = useState(festival.slike);
    const [tip, setTip] = useState(festival.tip);
    const [prevoz, setPrevoz] = useState(festival.prevoz);
    const [cena, setCena] = useState(festival.cena);
    const [maxOsoba, setMaxOsoba] = useState(festival.maxOsoba);
    const [slikaInput, setSlikaInput] = useState("");

    const handleChangeNaziv = (e) => setNaziv(e.target.value);
    const handleChangeOpis = (e) => setOpis(e.target.value);
    const handleChangeTip = (e) => setTip(e.target.value);
    const handleChangePrevoz = (e) => setPrevoz(e.target.value);
    const handleChangeCena = (e) =>  setCena(e.target.value);
    const handleChangeMaxOsoba = (e) => setMaxOsoba(e.target.value);

    const pop = () => {
		setPopup(true);
	}

    const closeEditPopup = () => {
		setPopup(false);
	}

    const handleSubmitEditFestival = () => {
        const status = handleEditFestival(festival.id, naziv, opis, slike, tip, prevoz, maxOsoba, festival.parentId);
    }

    const handleSubmitDeleteFestival = () => {
        handleDeleteFestival(festival.id, festival.parentId);
    }

    return (
                <>
                <div className='festivalAdminCard' >
                    <div className='nazivFestivala'><span>Naziv:</span><span>{festival.naziv}</span></div>
                    <div className='opisFesivala'><span>Opis:</span><span>{festival.opis}</span></div>
                    <div className='tipFestivala'><span>Tip festivala:</span><span>{festival.tip}</span></div>
                    <div className='prevoz'><span>Prevoz:</span><span>{festival.prevoz}</span></div>
                    <div className='cenaFestivala'><span>Cena:</span><span>{festival.cena}</span></div>
                    <div className='maxOsoba'><span>Maksimum osoba:</span><span>{festival.maxOsoba}</span></div>
                    {/*<div className='organizatorFestivala'><span>Organizator:</span><span>{organizator.naziv}</span></div> */}
                    <div className='galerija'>
                    {festival.slike.map((s) => (<img key={s} src={s} alt={s} />))}
                    </div>
                    <div className='kontrole'>
                        <button onClick={pop}>Izmeni</button>
                        <button onClick={handleSubmitDeleteFestival}>Obriši</button>
                    </div>
                </div>

                {popup && <div className='editPopupBG'>
                <button className="izlazBtn" onClick={closeEditPopup}>X</button>
                <div>
                <div className='registracijaForma'>
                    <span>Naziv:</span><input id="nazivInput" type='text' value={naziv} onChange={handleChangeNaziv} placeholder='Naziv festivala' />
                    <span>Opis:</span><textarea id="opisTextArea" value={opis} onChange={handleChangeOpis} placeholder='Opis festivala' />
                    <span>Tip:</span><input id="tipInput" type='text' value={tip} onChange={handleChangeTip} placeholder='Tip festivala' />
                    <span>Prevoz:</span><input id="prevozInput" type='text' value={prevoz} onChange={handleChangePrevoz} placeholder='Prevoz' />
                    <span>Cena:</span><input id="cenaInput" type='text' value={cena} onChange={handleChangeCena} placeholder='Cena' />
                    <span>Max osoba:</span><input id="maxOsobaInput" type='text' value={maxOsoba} onChange={handleChangeMaxOsoba} placeholder='Max osoba' />
                    
                            <button onClick={handleSubmitEditFestival} >Izmeni festival</button>
                </div>
                    </div>
                </div>
            } 
                
                </>
            )
};

export default FestivalAdminCard;