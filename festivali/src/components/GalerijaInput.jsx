import React, { Fragment, useState } from 'react';
import './GalerijaInput.css'

const GalerijaInput = ({slike, handleRemoveSlika}) => {
    const [sl, setSl] = useState(slike);

    const removeSlika = (e) => {
        const s = slike.find((s) => s === e.target.id);
        const noveSlike = sl;
        const index = noveSlike.indexOf(s);
        console.log(index);
        if (index > -1) {
            noveSlike.splice(index, 1);
        }
        setSl(noveSlike);
        handleRemoveSlika(s);
    }
    return (
    <>
    <div className='listaSlika'>
    <ul>
        {sl.map((slika) => {
            return ( 
            <div key={slika} className='pic-list'><li> {slika}</li><button id={slika} onClick={removeSlika}>x</button></div>
            );
        })}
    </ul>
    </div>
    <div className='galerija'>
        {sl.map((slika) => {
            return (
                <img key={slika} src={slika} alt="" />
            );
        })}
    </div>
    </>
    );
}

export default GalerijaInput;