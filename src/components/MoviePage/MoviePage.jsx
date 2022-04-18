import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom"
import ServiceAPI from '../../API/ServiseAPI';
import { useFetching } from '../../API/useFetching';
import stl from './moviepage.module.scss'
import Loader from "../Loader/Loader"
const MoviePage = () => {
	const [movie,setMovie] = useState({})
	const {id} = useParams();
	const notHave = "N/A";
	const googleSearch = 'https://www.google.com/search?q=';

	const [getMovieByID,isMovieLoading,error] = useFetching(async (id) =>{
	const result = await ServiceAPI.getMovieByID(id);
	setMovie(result)
	
	})
	useEffect(()=>{
		getMovieByID(id)
	},[])
	console.log(movie.Ratings);
	return ( 
		<div className={stl.movie_page}>
			
				{
					isMovieLoading  ?
					<Loader/> :
					<div className={stl.movie_content} >
						<div className={stl.movie_top_info}>
							<div className={stl.movie_thumb_wrapper}>
								<img src={
									movie.Poster == notHave ?
									'https://via.placeholder.com/300x450?text=IMG+Not+Found' :
									movie.Poster
								} alt="Poster"/>
							</div>
							<div className={stl.movie_detail_info}>
								<h2 className={stl.movie_title}>{movie.Title}</h2>
								<ul className={stl.movie_detail_list}>
									{
										movie.Actors != notHave  ?
										<li className={stl.actors}>
											<span>Actors: </span> 
											{
												movie.Actors.split(",").map(actor =>
													<a 
														href={googleSearch + actor} 
														key={actor} 
														className={stl.actor}
														target="_blank">{actor}</a>
													)
											}
										</li> :
										''
									}
									{
										movie.BoxOffice != notHave ?
										<li className={stl.box_office}> 
											<span>Box Office: </span> 
											<span>{movie.BoxOffice}</span>
										</li> :
										''
									}
									{
										movie.Released != notHave ?
										<li className={stl.released}> 
											<span>Release: </span> 
											<span>{movie.Released}</span>
										</li> :
										''
									}
									{
										movie.Type != notHave ?
										<li className={stl.type}> 
											<span>Type: </span> 
											<span>{movie.Type}</span>
										</li> :
										''
									}
									{
										movie.Genre != notHave  ?
										<li className={stl.genre}>
											<span>Genre: </span> 
											<span>{movie.Genre}</span>
										</li> :
										''
									}
									{
										movie.Runtime != notHave ?
										<li className={stl.runtime}> 
											<span>Runtime: </span> 
											<span>{movie.Runtime}</span>
										</li> :
										''
									}
									{
										movie.Director != notHave  ?
										<li className={stl.directors}>
											<span>Director: </span> 
											{
												movie.Director.split(",").map(director =>
													<a 
														href={googleSearch + director} 
														key={director} 
														className={stl.director}
														target="_blank">{director}</a>
													)
											}
										</li> :
										''
									}
									{
										movie.Writer != notHave  ?
										<li className={stl.writers}>
											<span>Writer: </span> 
											{
												movie.Writer.split(",").map(writer =>
													<a 
														href={googleSearch + writer} 
														key={writer} 
														className={stl.writer}
														target="_blank">{writer}</a>
													)
											}
										</li> :
										''
									}
								</ul>
								
									{
									movie.imdbRating != notHave || movie.Ratings.length  ?
									<div className={stl.ratings_wrapper}>
										<h3>Ratings:</h3>
										<div className={stl.ratings}>
										{
											movie.imdbRating != notHave ?
											<div className={stl.rating}>
												<span className={stl.rating_source}>IMBD: </span>
												<span className={stl.rating_value}>{movie.imdbRating}</span>
											</div> : ''
										}
										{
											movie.Ratings ?
											movie.Ratings.map(rating => 
												<div className={stl.rating} key={rating.Source}>
													<span className={stl.rating_source}>{rating.Source}: </span>
													<span className={stl.rating_value}>{rating.Value}</span>
												</div> 
												)
											 : ""
										}
										</div>
									</div> 
	
									: ""
									}
									
							</div>
						</div>
						{
										movie.Plot != notHave ?
										<div className={stl.description}>
											{movie.Plot}
										</div>
										: ""
									}	
					</div>
				}
				
			
		</div>
	 );
}
 
export default MoviePage;