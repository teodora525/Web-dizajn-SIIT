import React, { Fragment } from 'react';

const GalerijaInput = ({slike}) => {
    console.log(slike);
    return (
    <>
    <div className='listaSlika'>
    <ul>
        {slike.map((slika) => {
            return (
                
            <li key={slika}> {slika}</li>
                
            );
        })}
    </ul>
    </div>
    <div className='galerija'>
        {slike.map((slika) => {
            return (
                <img key={slika} src={slika} alt="" />
            );
        })}
    </div>
    </>
    );
}

export default GalerijaInput;