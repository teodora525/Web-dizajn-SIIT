
import Navbar from '../components/Navbar';
import PageFooter from '../components/PageFooter';
import "./Layout.css";

import { Outlet } from "react-router-dom";


const Layout = ({korisnici}) => {
	return(
	<>
		<Navbar korisnici={korisnici} />
		<div className='container'>
			<Outlet />
			<PageFooter />
		</div>
		
		
	</>
	);
}


export default Layout;

