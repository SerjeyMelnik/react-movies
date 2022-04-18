import React, { useEffect, useState } from 'react';
import ServiceAPI from '../../API/ServiseAPI';
import { useFetching } from '../../API/useFetching';
import MoviesList from '../MoviesList/MoviesList';
import style from "./main.module.scss";
import Loader from '../Loader/Loader';
import Search from '../Search/Search';
import Filter from '../Filter/Filter';
import Pagination from '../Pagination/Pagination';
import PagesServise from '../../utils/pages';
import ResultInfo from '../ResultInfo/ResultInfo';

const Main = () => {
	const [movies,setMovies] = useState([]);
	const [searchQuery,setSearchQuery] = useState("matrix");
	const [moviesType,setMoviesType] = useState("All");
	const [moviesYear,setMoviesYear] = useState('');
	const [moviesPage,setMoviesPage] = useState(1);
	const [totalMoviesCount,setTotalMoviesCount] = useState(0);

	
	const [getMovies,moviesIsLoading,moviesError]  = useFetching(async (searchQuery,moviesType,moviesYear,page)=>{
		const result = await ServiceAPI.getMovies(searchQuery,moviesType,moviesYear,page);
		setMovies(result.Search);
		setTotalMoviesCount(result.totalResults);
	});

	

	useEffect(()=>{
		getMovies(searchQuery,moviesType,moviesYear,moviesPage)
		
	},[])

	useEffect(()=>{
		getMovies(searchQuery,moviesType,moviesYear,moviesPage)
	},[moviesType,searchQuery,moviesYear,moviesPage])

	return ( 
	<main className={style.main}>
		<div className={style.main_container}>
			<div className={style.header_movieList}>
				<div className={style.filter_wrapper}>
					<Search setSearchQuery = { setSearchQuery  }/>
					<Filter setMoviesType = { setMoviesType  } setYear={setMoviesYear}/>
				</div>
				<div className={style.result_info_wrapper}>
					<ResultInfo totalMoviesCount={totalMoviesCount}/>
				</div>
			</div>
			{
					moviesIsLoading ?
					<Loader /> :
					<MoviesList movies={movies} />
			}
			<Pagination totalMoviesCount={totalMoviesCount} currentPage={moviesPage} setMoviesPage={setMoviesPage}/>
	
		</div>
	</main> 
	);
}
 
export default Main;