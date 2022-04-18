
import axios from "axios"
import PagesServise from "../utils/pages";


const MY_API_KEY = process.env.REACT_APP_API_KEY;

export default class ServiceAPI {


    static async getMovieByID(id) {
        const response = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=${MY_API_KEY}`);
        return response.data;
    }

    static async getMovies(queryStr, typeFilter, movieYear, moviePage) {
        const search = queryStr !== '' ? `&s=${queryStr}` : '&s=matrix';
        const type = typeFilter !== '' && typeFilter !== 'All' ? `&type=${typeFilter}` : '';
        const year = movieYear == '' || movieYear == 'Choos year' ? '' : `&y=${movieYear}`;
        const page = moviePage !== '' ? `&page=${moviePage}` : '';

        const response = await axios.get(`https://www.omdbapi.com/?apikey=${MY_API_KEY}${search}${type}${year}${page}`);


        return response.data;
    }


}


