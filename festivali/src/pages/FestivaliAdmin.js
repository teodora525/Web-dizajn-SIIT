import React from 'react';
import Headerline from '../components/Headerline';
import FestivalAdminCard from '../components/FestivalAdminCard';
import { useNavigate } from 'react-router-dom';


const FestivaliAdmin = ({festivali, organizatori, handleEditFestival}) => {

    const navigate= useNavigate();

    return (
    <>
        <Headerline naslov="Administracija festivala" />
        <button onClick={() => navigate('/noviFestival')}>Novi festival</button>

        {festivali.map((festival) => { 
            const org = organizatori.find((o) => o.festivali === festival.parentId);

            return (<FestivalAdminCard key={festival.id} festival={festival} organizator={org}/> );
        })
}
    </>
    );
};

export default FestivaliAdmin;