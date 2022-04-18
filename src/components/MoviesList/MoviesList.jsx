import React from 'react';
import Movie from '../Movie/Movie';
import style from "./movies.module.scss"
const MoviesList = ({movies}) => {

	return (
		<>
		<div className={style.movi_cards}>
			{
					!movies ?
					<div>Post Not Found</div> :
					movies.map( movi => {
					return <Movie key={movi.imdbID} movi={movi} /> }
					)
			}
			
		</div>
		
		</>
	 );
}
 
export default MoviesList;