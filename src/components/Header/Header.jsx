import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from "./header.module.scss"

const Header = () => {
	const navigate = useNavigate();
	return ( 
		<header className={style.header}>
			<div className="container">
				<div className={style.header_content}>

				
					<h3 onClick={ ()=>{ navigate('/movies') } } className={style.mainHeaderLink}>React Movies</h3>

					<ul className={style.listLink}>
						<li className={style.li}>
							<a href="" className="">Repository</a>
						</li>
					</ul>
				</div>
			</div>
		</header> 
	);
}
 
export default Header;