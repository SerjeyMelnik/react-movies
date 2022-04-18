import React, { useEffect, useState } from 'react';
import style from './yearselector.module.scss'
 const YearSelector = ({setYear}) => {
	const [selectedValue,setSelectedValue] = useState('Choos year');
	const [droped,setDroped] = useState(false);

	const generateYears = (firstYear) => {
		const lastYear = new Date().getFullYear();
		const years = [];
		for (let i = firstYear; i < lastYear; i++) {
			years.push(i);
		}
		return years;
	}
	const years = generateYears(1990);

	const selectYear = (e) =>{
		
		setSelectedValue(e.target.dataset.year)
		setDroped(false)
	}
	const toggleDropDown = () =>{
		droped ? setDroped(false) : setDroped(true);
	}
	useEffect(()=>{
		setYear(selectedValue)
	},[selectedValue])

	 return ( 
		 <div className={style.select_wrapper}>
			 <p className={style.select_title}> Year </p>
			<div className={style.select}>

				<p 
					className={`${style.selected_value} ${droped ? style.active : ""}`} 
					onClick={toggleDropDown}

					> {selectedValue} </p>

				<ul className={`${style.drop_down_box} ${droped ? style.droped : ""}`}>
					<li 
						onClick={ selectYear }
						data-year={"Choos year"}
						>Choos year</li>
					{ 
						years.map(year => {
							return 		<li 
											key={year} 
											onClick={ selectYear }
											data-year={year}
											> 
											{year}
										</li>
						})
					}
				</ul>
			</div>
		 </div>
	  );
 }
  
 export default YearSelector;