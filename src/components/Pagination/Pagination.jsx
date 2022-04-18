import React, { useEffect, useState } from 'react';
import { getCountOfPages } from '../../utils/pages';

import style from "./pagination.module.scss"
const Pagination = ({totalMoviesCount,currentPage,setMoviesPage}) => {
	const defaultPages = [1,2,3,4,5,6,7,8,9,10];
	const [pagesLarge,setPagesLarge] = useState(defaultPages);
	let pagesArr = [];
	const pages = getCountOfPages(totalMoviesCount);
	const showingPages = 10;
	
			for (let i = 1; i <= pages; i++) {
				pagesArr.push(i)
			}
	
	const previousPages = () =>{

		pagesLarge[0] - showingPages <= 0 
		?
		setPagesLarge(pagesLarge.map(page => page - pagesLarge[0] + 1)) 
		: 
		setPagesLarge(pagesLarge.map(page => page - showingPages))

	}
	const nextPages = () =>{
		console.log(pages);
		pagesLarge[pagesLarge.length - 1] + showingPages >= pages 
		?
		setPagesLarge(pagesLarge.map(page => page + (pages - pagesLarge[pagesLarge.length - 1])))
		: 
		setPagesLarge(pagesLarge.map(page => page + showingPages))

	}
	
	const setPage = (e) => {
		const page = parseInt(e.target.dataset.page);
		setMoviesPage(page)
		if (page > pagesLarge[showingPages/2 - 1])
		{
			setPagesLarge(pagesLarge.map(pageButt => 
				{
					return (pagesLarge[pagesLarge.length - 1] + page - pagesLarge[showingPages/2 - 1])  < pages ?
							pageButt + page - pagesLarge[showingPages/2 - 1] :
							pageButt
				}))
		}
	}
	return ( 
			<>
			{
				pagesArr.length <= showingPages
				?
				<div className={style.pagination_wrapper}>
					{
					pagesArr.map(page => {
						return <span
						key={page} 
						className={`${style.pagination_button} ${page == currentPage ? style.current : ""}`}
						data-page={page}
						onClick={(e)=>{setMoviesPage(e.target.dataset.page)}}
						>
							{page}
						</span>
					})
					}
				</div>
				:
				<div className={style.pagination_wrapper}>
					<span 
						className={`${style.pagination_button} ${style.arrow_left}`}
						onClick={previousPages}
						> <span>&#8249;</span> </span>
						{
							pagesLarge.map(page => {
								return <span
								key={page} 
								className={`${style.pagination_button} ${page == currentPage ? style.current : ""}`}
								data-page={page}
								onClick={setPage}
								>
									{page}
								</span>
							})
						}
						{
							pagesLarge[pagesLarge.length - 1] >= pages - 1   ?
							'' :
							<span className={style.dots}>...</span>
						}
						{
							pagesLarge[pagesLarge.length - 1] == pages  ?
							'' :
							<span	
							className={`${style.pagination_button} ${pagesArr.length == currentPage ? style.current : ""}`}
							data-page={pagesArr.length}
							onClick={(e)=>{setMoviesPage(e.target.dataset.page)}}
							>
								{pagesArr.length}
							</span>
						}
						
					<span 
						className={`${style.pagination_button} ${style.arrow_right}`}
						onClick={nextPages}
						> <span>&#8250;</span> </span>
				</div>
					
				
				
			}
			</>
		
	 );
}
 
export default Pagination;