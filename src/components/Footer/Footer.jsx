import React from 'react';
import style from "./footer.module.scss"
const Footer = () => {
	return ( 
		<footer className={style.footer_wrapper}>

				<div className="container">

				<span className={style.copy}>© {new Date() . getFullYear()} Copyright Text</span>

				<a className="" href="#!"></a>
				</div>
	
		</footer>
	 );
}
 
export default Footer;