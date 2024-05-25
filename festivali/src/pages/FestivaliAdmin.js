import React from 'react';
import Headerline from '../components/Headerline';
import FestivalAdminCard from '../components/FestivalAdminCard';
import { useNavigate } from 'react-router-dom';
import './FestivaliAdmin.css';



const FestivaliAdmin = ({festivali, organizatori, handleEditFestival, handleDeleteFestival}) => {

    const navigate= useNavigate();

    return (
    <>
        <Headerline naslov="Administracija festivala" />
        <button onClick={() => navigate('/noviFestival')}>Novi festival</button>

        <div className="festivaliAdminGrid">
        {festivali.map((festival) => { 
            const org = organizatori.find((o) => o.festivali === festival.parentId);
            

            return (<FestivalAdminCard key={festival.id} 
                festival={festival} organizator={org} 
                handleEditFestival={handleEditFestival} 
                handleDeleteFestival={handleDeleteFestival}
                organizatori={organizatori} /> );
        })
        }
        </div>
    </>
    );
};

export default FestivaliAdmin;