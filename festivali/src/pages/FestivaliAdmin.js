import React from 'react';
import Headerline from '../components/Headerline';
import FestivalAdminCard from '../components/FestivalAdminCard';
import { useNavigate } from 'react-router-dom';


const FestivaliAdmin = ({festivali, organizatori}) => {
    //console.log(festivali);


    const navigate= useNavigate();

    return (
    <>
        <Headerline naslov="Administracija festivala" />
        <button onClick={() => navigate('/noviFestival')}>Novi festival</button>

        {festivali.map((festival) => { 
            //console.log(organizatori);
            const org = organizatori.find((o) => o.festivali === festival.parentId);
            //console.log(org);
            return (<FestivalAdminCard key={festival.id} festival={festival} organizator={org}/> );
        })
}
    </>
    );
};

export default FestivaliAdmin;