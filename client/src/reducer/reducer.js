import { GET_ALL_VIDEOGAMES, GET_VIDEOGAMES_DETAIL, CREATE_VIDEOGAME, GET_GENRES, RESET_DETAILS, SEARCH_GAMES, } from '../actions/actions.js'
const initialState = {
    searchGames: {},
    allGames: [],
    gameDetails: {},
    genre: [],

};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_VIDEOGAMES:
            return {
                ...state,
                allGames: action.payload
            };
        case SEARCH_GAMES:
            return {
                ...state,
                searchGames: action.payload
            }
        case GET_VIDEOGAMES_DETAIL:
            return {
                ...state,
                gameDetails: action.payload
            };
        case GET_GENRES:
            return {
                ...state,
                genre: action.payload
            };
        case CREATE_VIDEOGAME:
            return {
                ...state,
                allGames: [...state.allGames, action.payload]
            };
        case RESET_DETAILS:
            return {
                ...state,
                gameDetails: {}
            };
        default: return state;
    }
}
export default rootReducer;
