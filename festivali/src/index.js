import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Layout from './pages/Layout';
import Pocetna from './pages/Pocetna';
import Organizatori from './pages/Organizatori';
import Festivali from './pages/Festivali';
import Kontakt from './pages/Kontakt';
import Festival from './pages/Festival';
import Organizator from './pages/Organizator';
import Korisnici from './pages/Korisnici';

import { db } from './firebaseConfig';
import { onValue, ref, set, push, update, remove } from 'firebase/database';
import {useState, useEffect} from "react";
import OrganizatoriAdmin from './pages/OrganizatoriAdmin';
import FestivaliAdmin from './pages/FestivaliAdmin';
//import of from './organizatori_festivala';
import Registracija from './pages/Registracija';
import NoviOrganizator from './pages/NoviOrganizator';
import NoviFestival from './pages/NoviFestival';


export default function App() {
	
	const [organizatoriFestivala, setOrganizatoriFestivala] = useState([]);
	const [festivaliOrganizatora, setFestivaliOrganizatora] = useState([]);
	const [korisnici, setKorisnici] = useState([]);

	//const orgs = [];

	//Object.keys(of.organizatoriFestivala).forEach(k => {
	//	const el = of.organizatoriFestivala[k];
	//	el.id = k;
	//	orgs.push(el);
	//});

	const objtoar = (obj) => {
		let out = [];
		Object.keys(obj).forEach((k) => {
			if(k !== "id"){
				obj[k].id = k;
				if(obj['id']) {
					obj[k].parentId = obj['id'];
				}
				out.push(obj[k]);
			}
		})
		return out;
	}


	const sviFestivali = [];
	festivaliOrganizatora.forEach((f) => {
			objtoar(f).forEach(ff => sviFestivali.push(ff));
		});

	
	const getfbDB = (vr, cb, path) => {
		const query = ref(db, path);
		const fbdb = onValue(query, (snapshot) => {
			const data = snapshot.val();	
			if (snapshot.exists()) {
				const tmp =[];
			  Object.keys(data).forEach((k) => {			
				  data[k].id = k;
				  //console.log(data[k].id);
				  tmp.push(data[k]);
			  });
			  cb(tmp);
			}
			//console.log(vr);
		});
		return fbdb;
	}


	const handlePutKorisnik = (ime, prezime, korisnickoIme, lozinka, email, datumRodjenja, adresa, telefon, zanimanje) => {
		set(ref(db,'korisnici/' + push(ref(db, 'korisnici')).key),{
			korisnickoIme: korisnickoIme,
			lozinka: lozinka,
			ime: ime,
			prezime: prezime,
			email: email,
			datumRodjenja: datumRodjenja,
			adresa: adresa,
			telefon: telefon,
			zanimanje: zanimanje
		  });
		
		return 200;
	}


	const handleEditKorisnik = (id, ime, prezime, korisnickoIme, lozinka, email, datumRodjenja, adresa, telefon, zanimanje) => {
		update(ref(db,'korisnici/' + id), {
			korisnickoIme: korisnickoIme,
			lozinka: lozinka,
			ime: ime,
			prezime: prezime,
			email: email,
			datumRodjenja: datumRodjenja,
			adresa: adresa,
			telefon: telefon,
			zanimanje: zanimanje
		});
	};

	const handleDeleteKorisnik = async (id) => {
		await remove(ref(db,'korisnici/' + id));
	}

	const handlePutOrganizator = (naziv, adresa, godinaOsnivanja, logo, kontaktTelefon, email) => {

		const festivaliKey = push(ref(db, 'festivali')).key;
		set(ref(db, 'festivali/' + festivaliKey), {});

		set(ref(db,'organizatoriFestivala/' + push(ref(db, 'organizatoriFestivala')).key), {
			naziv: naziv,
			adresa: adresa,
			godinaOsnivanja: godinaOsnivanja.toString(),
			logo: logo,
			kontaktTelefon: kontaktTelefon,
			email: email,
			festivali: festivaliKey
		});

		return 200;
	}

	const handleEditOrganizator = (id, naziv, adresa, godinaOsnivanja, logo, kontaktTelefon, email, festivali) => {
		update(ref(db,'organizatoriFestivala/' + id), {
			naziv: naziv,
			adresa: adresa,
			godinaOsnivanja: godinaOsnivanja.toString(),
			logo: logo,
			kontaktTelefon: kontaktTelefon,
			email: email,
			festivali: festivali
		});
	}


	const handleDeleteOrganizator = (id, idFestivala) => {
		remove(ref(db,'festivali/' + idFestivala));
		remove(ref(db,'organizatoriFestivala/' + id));
	}

	const handlePutFestival = (naziv, opis, slike, tip, prevoz, cena, maxOsoba, festivali) => {
		set(ref(db,'festivali/' + festivali + "/" + push(ref(db, 'festivali/' + festivali)).key), {
			naziv: naziv,
			opis: opis,
			slike: slike,
			tip: tip,
			prevoz: prevoz,
			cena: cena,
			maxOsoba: maxOsoba
		  });
	}

	const handleEditFestival = () => {

	}

	const handleDeleteFestival = (id, festivali) => {
		remove(ref(db,'festivali/' + festivali + "/" + id));
	}

	
	useEffect(() => {
		getfbDB(organizatoriFestivala, setOrganizatoriFestivala, "organizatoriFestivala");
		getfbDB(festivaliOrganizatora, setFestivaliOrganizatora, "festivali");
		getfbDB(korisnici, setKorisnici, "korisnici");
		
	  }, []);


//console.log(orgs);


	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={ <Layout korisnici={korisnici} /> }>
					<Route index element={ <Pocetna organizatori={organizatoriFestivala} />} />
					<Route path="organizatori" element={ <Organizatori organizatori={organizatoriFestivala} /> } />
					<Route path="festivali" element={ <Festivali festivaliOrganizatora={festivaliOrganizatora} organizatori={organizatoriFestivala} /> } />
					<Route path="kontakt" element={ <Kontakt />} />
					<Route path="organizator/*" element={<Organizator festivaliOrganizatora={festivaliOrganizatora} organizatori={organizatoriFestivala} />} />
					<Route path="festival/*" element={<Festival festivaliOrganizatora={festivaliOrganizatora} />} />
					<Route path="organizator/*" element={<Organizator festivaliOrganizatora={festivaliOrganizatora} organizatori={organizatoriFestivala}/>} />
					<Route path="korisnici" element={ 
						<Korisnici korisnici={korisnici} 
								handleDeleteKorisnik={handleDeleteKorisnik} 
								handlePutKorisnik={handlePutKorisnik}
								handleEditKorisnik={handleEditKorisnik} /> 
						} />
					<Route path="organizatoriAdmin" element={
						<OrganizatoriAdmin 
								organizatori={organizatoriFestivala} 
								handleDeleteOrganizator={handleDeleteOrganizator} 
								handleEditOrganizator={handleEditOrganizator}
								/>} />
					
					<Route path="festivaliAdmin" element={<FestivaliAdmin festivali={sviFestivali} organizatori={organizatoriFestivala} 
					handleEditFestival={handleEditFestival} handleDeleteFestival={handleDeleteFestival}/>} />

					<Route path="registracija" element={<Registracija handlePutKorisnik={handlePutKorisnik} />} />
					<Route path="noviOrganizator" element={<NoviOrganizator handlePutOrganizator={handlePutOrganizator} />} />
					<Route path="noviFestival" element={<NoviFestival handlePutFestival={handlePutFestival} organizatori={organizatoriFestivala} />} />
				</Route>
			</Routes>

		</BrowserRouter>

	);
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
