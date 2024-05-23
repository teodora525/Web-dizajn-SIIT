import React from 'react';
import './FestivalAdminCard.css';

const FestivalAdminCard = ({festival, organizator}) => {
            return (
                <>
                <div className='festivalAdminCard' >
                    <div className='nazivFestivala'><span>Naziv:</span><span>{festival.naziv}</span></div>
                    <div className='opisFesivala'><span>Opis:</span><span>{festival.opis}</span></div>
                    <div className='tipFestivala'><span>Tip festivala:</span><span>{festival.tip}</span></div>
                    <div className='prevoz'><span>Prevoz:</span><span>{festival.prevoz}</span></div>
                    <div className='cenaFestivala'><span>Cena:</span><span>{festival.cena}</span></div>
                    <div className='maxOsoba'><span>Maksimum osoba:</span><span>{festival.maxOsoba}</span></div>
                    <div className='organizatorFestivala'><span>Organizator:</span><span>{organizator.naziv}</span></div>
                    <div className='galerija'>
                    {festival.slike.map((s) => (<img key={s} src={s} alt={s} />))}
                    </div>
                    <div className='kontrole'>
                        <button>Izmeni</button>
                        <button>Obriši</button>
                    </div>
                </div>
                
                </>
            )
};

export default FestivalAdminCard;