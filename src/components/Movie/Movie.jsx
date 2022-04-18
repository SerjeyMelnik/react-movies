import React from 'react';
import {useNavigate} from "react-router-dom"
import style from "./movi.module.scss"

const Movie = ({movi:{Title,Poster,Type,Year,imdbID}}) => {
    
   
	const navigateTo = useNavigate();
    

    return ( 
        <div className={style.movi_card} onClick={()=>{navigateTo(`/movies/movie=${imdbID}`)}}>
            <div className={style.movi_card_img_wrapper}>
                {   
                    Poster === "N/A" ?
                    <img className={style.movi_card_img} src="https://via.placeholder.com/150x220?text=IMG+Not+Found" alt="" />
                                        :
                    <img className={style.movi_card_img} src={Poster} alt="" />
                }
            </div>
            <div className={style.movi_card_info}>
                <h3 className={style.movi_card_title} onClick={()=>{navigateTo(`/movies/movie=${imdbID}`)}}>{Title}</h3>
                <div className={style.movi_card_bottom_info}>
                    <span className={style.movi_card_year}>{Year}</span>
                    <span className={style.movi_card_type}>{Type}</span>
                </div>
            </div>
        </div>
     );
}
 
export default Movie;