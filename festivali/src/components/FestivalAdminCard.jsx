import React from 'react';
import './FestivalAdminCard.css';
import { useState } from 'react';
import GalerijaInput from './GalerijaInput';

const FestivalAdminCard = ({festival, organizator, handleEditFestival, handleDeleteFestival, organizatori}) => {

    const [popup, setPopup] = useState(false);

    const [naziv, setNaziv] = useState(festival.naziv);
    const [opis, setOpis] = useState(festival.opis);
    const [slike, setSlike] = useState(festival.slike);
    const [tip, setTip] = useState(festival.tip);
    const [prevoz, setPrevoz] = useState(festival.prevoz);
    const [cena, setCena] = useState(festival.cena);
    const [maxOsoba, setMaxOsoba] = useState(festival.maxOsoba);
    const [slikaInput, setSlikaInput] = useState("");
    const [selectOrganizator, setSelectOrganizator] = useState(organizator.naziv);

    const handleChangeNaziv = (e) => setNaziv(e.target.value);
    const handleChangeOpis = (e) => setOpis(e.target.value);
    const handleChangeTip = (e) => setTip(e.target.value);
    const handleChangePrevoz = (e) => setPrevoz(e.target.value);
    const handleChangeCena = (e) =>  setCena(e.target.value);
    const handleChangeMaxOsoba = (e) => setMaxOsoba(e.target.value);
    const handleChangeSelectOrganizator = (e) => setSelectOrganizator(e.target.value);
    const handleChangeSlikaInput = (e) => setSlikaInput(e.target.value);
    const handleUbaciSliku = () => {
        const noveSlike = slike;
        noveSlike.push(slikaInput);
        setSlike(noveSlike);
        setSlikaInput("");
    }

    const handleRemoveSlika = (s) => {
        const noveSlike = slike;
        const index = noveSlike.indexOf(s);
        console.log(index);
        if (index > -1) {
            noveSlike.splice(index, 1);
        }
        setSlike(noveSlike);
    }

    const pop = () => {
		setPopup(true);
	}

    const closeEditPopup = () => {
		setPopup(false);
	}

    const handleSubmitEditFestival = () => {
        const org = organizatori.find((o) => selectOrganizator === o.naziv );
        const noviParentId = org.festivali;
        handleEditFestival(festival.id, naziv, opis, slike, tip, prevoz, cena, maxOsoba, noviParentId, organizator.festivali);
    }

    const handleSubmitDeleteFestival = () => {
        handleDeleteFestival(festival.id, festival.parentId);
    }

    return (
                <>
                {!popup && <div className='festivalAdminCard' >
                    <div className='nazivFestivala'><span className='.label'>Naziv:</span><span>{festival.naziv}</span></div>
                    <div className='opisFesivala'><span className='.label'>Opis:</span><span>{festival.opis}</span></div>
                    <div className='tipFestivala'><span className='.label'>Tip festivala:</span><span>{festival.tip}</span></div>
                    <div className='prevoz'><span className='.label'>Prevoz:</span><span>{festival.prevoz}</span></div>
                    <div className='cenaFestivala'><span className='.label'>Cena:</span><span>{festival.cena}</span></div>
                    <div className='maxOsoba'><span className='.label'>Maksimum osoba:</span><span>{festival.maxOsoba}</span></div>
                    {typeof organizator !== "undefined"?
                    <div className='organizatorFestivala'><span className='.label'>Organizator:</span><span>{organizator.naziv}</span></div> 
                    : <></>}
                    <div className='galerija-pad'><div className='galerija'>
                    {festival.slike.map((s) => (<img key={s} src={s} alt={s} />))}
                    </div>
                    </div>
                    <div className='kontrole'>
                        <button onClick={pop}>Izmeni</button>
                        <button onClick={handleSubmitDeleteFestival}>Obriši</button>
                    </div>
                </div>}

                {popup && <div className='editPopupBG'>
                <div className='closeDiv' ><button className="izlazBtn" onClick={closeEditPopup}>X</button></div>
                <div>
                <div className='editFestivalForma'>
                    <span className='.label'>Naziv:</span><input id="nazivInput" type='text' value={naziv} onChange={handleChangeNaziv} placeholder='Naziv festivala' />
                    <span className='.label'>Opis:</span><textarea id="opisTextArea" value={opis} onChange={handleChangeOpis} placeholder='Opis festivala' />
                    <span className='.label'>Tip:</span><input id="tipInput" type='text' value={tip} onChange={handleChangeTip} placeholder='Tip festivala' />
                    <span className='.label'>Prevoz:</span><input id="prevozInput" type='text' value={prevoz} onChange={handleChangePrevoz} placeholder='Prevoz' />
                    <span className='.label'>Cena:</span><input id="cenaInput" type='text' value={cena} onChange={handleChangeCena} placeholder='Cena' />
                    <span className='.label'>Max osoba:</span><input id="maxOsobaInput" type='text' value={maxOsoba} onChange={handleChangeMaxOsoba} placeholder='Max osoba' />
                    <span className='.label'>Organizator:</span>
                    <select value={selectOrganizator} onChange={handleChangeSelectOrganizator}>
                    <option></option>
                    {organizatori.map ((o) => {
                        return (<option key={o.id}>{o.naziv}</option>);
                    }) 
                    }
                    </select> 
                    </div>
                    <div className='galerijaInsertKontrole'>
                    <input id="slikaInput" type='text' value={slikaInput} onChange={handleChangeSlikaInput} placeholder='Link ka slici' />
                    <button onClick={handleUbaciSliku}>Ubaci sliku</button>
                    </div>
                    <div>
                    <GalerijaInput slike={slike} handleRemoveSlika={handleRemoveSlika} />
                    </div>
                    <button onClick={handleSubmitEditFestival} >Zapamti</button>
                
                    </div>
                </div>
            } 
                
                </>
            )
};

export default FestivalAdminCard;