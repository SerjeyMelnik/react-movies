import React from 'react';
import style from "./resultinfo.module.scss"
 const ResultInfo = ({totalMoviesCount}) => {
	 return ( 
		 <div className={style.result_info}>
			 <h2 className={style.result_info_title}>Found {totalMoviesCount} results</h2>
		 </div>
	  );
 }
  
 export default ResultInfo;