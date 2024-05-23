import Headerline from "../components/Headerline";
import OrganizatoriAdminCard from "../components/OrganizatoriAdminCard";
import { useNavigate } from "react-router-dom";


const OrganizatoriAdmin = ({organizatori, handleEditOrganizator, handleDeleteOrganizator}) => {
    const navigate = useNavigate();
    
    return(
        <>
            <Headerline naslov="Administracija organizatora festivala" />

            <button onClick={() => navigate('/noviOrganizator')} >Novi organizator</button>
            {organizatori.map(organizator => {
                return (<OrganizatoriAdminCard key={organizator.id} organizator={organizator} handleEditOrganizator={handleEditOrganizator} handleDeleteOrganizator={handleDeleteOrganizator} />);
            }) }
        </>
    );
}
export default OrganizatoriAdmin;