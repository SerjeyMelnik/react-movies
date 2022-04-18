import React, { useEffect, useState } from 'react';
import YearSelector from '../YearSelector/YearSelector';
import style from './filter.module.scss'

 const Filter = ({setMoviesType,setYear}) => {
	 const [moviType,setMoviType] = useState("All");

	useEffect(() =>{
		setMoviesType(moviType);
	 },[moviType]);
	
	 
	 return ( 
		 <div className="filter_wrapper">
			 <div className={style.radio_wrapper}>
				 <div className={style.radio_item}>
					 <input 
					 	id='allTypes'
					 	type="radio" 
						name="moviType" 
						value="All"
						checked={moviType === "All"}
						onChange={ (e)=>{ setMoviType(e.target.value) } }
						/>
						<label htmlFor="allTypes">All</label>
				 </div>
				 <div className={style.radio_item}>
					 <input
					 	id='movies'
					 	type="radio" 
						name="moviType" 
						value="movie"
						checked={moviType === "movie"}
						onChange={(e)=>{ setMoviType(e.target.value) }}
						/>
						<label htmlFor="movies">Movies only</label>
				 </div>
				 <div className={style.radio_item}>
					 <input 
					 	id='series'
					 	type="radio" 
						name="moviType" 
						value="series"
						checked={moviType === "series"}
						onChange={(e)=>{ setMoviType(e.target.value) }}
						/>
						<label htmlFor="series">Series only</label>
				 </div>
				 <div className="select_wrapper">
					 <YearSelector setYear={setYear}/>
				 </div>
			 </div>
		 </div>
	  );
 }
  
 export default Filter;