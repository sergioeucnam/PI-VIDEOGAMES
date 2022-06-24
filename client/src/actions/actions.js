import axios from 'axios';
export const GET_ALL_VIDEOGAMES = 'GET_ALL_VIDEOGAMES';
export const GET_VIDEOGAMES_DETAIL = 'GET_VIDEOGAMES_DETAIL';
export const CREATE_VIDEOGAME = 'CREATE_VIDEOGAME';
export const GET_GENRES = 'GET_GENRES';
export const SEARCH_GAMES = 'SEARCH_GAMES';
export const RESET_DETAILS = 'RESET_DETAILS';

export const getAllGames = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3001/videogames`);
            dispatch({ type: GET_ALL_VIDEOGAMES, payload: response.data });
        } catch (error) {
            console.log(error);

        }
    }
}

export const getGamesDetail = (id) => {
    return async (dispatch) => {
        // try {
        //     const response = await axios(`http://localhost:3001/videogame/${id}`);
        //     dispatch({ type: GET_VIDEOGAMES_DETAIL, payload: response.data });
        //     // console.log('response data de action get game details', response.data);
        // } catch (error) {
        //     console.log(error, 'aca me rompi en la action');
        // }
        const onSuccess = async (success) => {
            await dispatch({ type: RESET_DETAILS })
            await dispatch({ type: GET_VIDEOGAMES_DETAIL, payload: success });
            return success;
        }
        try {
            const response = await axios(`http://localhost:3001/videogame/${id}`);
            return onSuccess(response.data);
        } catch (error) {
            console.error(error);
        }
    }
}

export const resetDetail = () => {
    return (dispatch) => {
        try {
            dispatch({ type: RESET_DETAILS, payload: {} });
        } catch (error) {
            console.log(error);
        }
    }
}

export const searchGame = (name) => {
    return async (dispatch) => {
        try {
            const response = await axios(`http://localhost:3001/videogames/?name=${name}`);
            dispatch({ type: SEARCH_GAMES, payload: response.data });
        } catch (error) {
            console.log(error);
        }
    }
}

export const createGame = (values) => {
    return { type: CREATE_VIDEOGAME, payload: values }
}

export const getGenres = () => {
    return { type: GET_GENRES }
}