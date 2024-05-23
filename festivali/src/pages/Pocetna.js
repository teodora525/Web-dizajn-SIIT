
import Headerline from '../components/Headerline';
import ListaOrganizatora from "../components/ListaOrganizatora";

/*
import {useState} from "react";
import {db} from "../firebaseConfig";
import {collection, getDocs} from 'firebase/firestore';
*/

const Pocetna =  ({organizatori}) => {

	//const [data, setData] = useState([]);


	/*const getData = async () => {
		try {
			const dataCollRef = collection(db, "organizatoriFestivala");
			const data = await getDocs(dataCollRef);
			const dcs = data.docs.map(
				(doc) => ({
					...doc.data(),
					id: doc.id,
				})
			);
			setData(dcs); 
		} catch (err) {
			console.error(err);
		}
	};
getData();*/

	//setData(dt);


/*


	const ors = [];

	Object.keys(dt.organizatoriFestivala).forEach(k => {
		const el = dt.organizatoriFestivala[k];
		el.id = k;
		ors.push(el);
	});
	
*/

	return (
	<>

		<Headerline naslov="Lista organizatora festivala" />

		<div className="container">
        
		<ListaOrganizatora organizatori={organizatori} />
		
    	</div>

	</>


	);
}


export default Pocetna;

