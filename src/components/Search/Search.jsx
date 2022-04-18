import React, { useState } from 'react';
import style from "./search.module.scss"

const Search = ({setSearchQuery}) => {
	const [search,setSearch] = useState("matrix");
	
	const getMovies = (e) =>{
	
		if (e.key === "Enter" )
		{
			setSearchQuery(search)
		}
	
		
	}
	
	return ( 
		<div className={style.search_wrapper}>
			<input 
				type="search" 
				className={style.search_input}
				placeholder='Search'
				value={search}
				onChange={ (e)=>{ setSearch(e.target.value) } }
				onKeyDown = { getMovies }
			/>
		</div>
	 );
}
 
export default Search;